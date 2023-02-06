import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import { CityEvent } from '@/types/CityEvent';

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({
      message: `Events data not found`,
    });
  }

  if (method === 'POST') {
    const {email, eventId } = req.body;
    let error;

    if (!email || !email.includes('@')) {
      return res.status(422).json({
        message: 'Invalid email adress',
      });
    }
    
    const newAllEvents = allEvents.map((event: CityEvent ) => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          error = `This email has already been registred`
        } else {
          return {
            ...event,
            'emails_registered': [... event.emails_registered, email],
          }
        }
      }

      return event;
    });

    fs
      .writeFileSync(filePath, JSON.stringify({ events_categories, allEvents: newAllEvents }))
    
    if (error) {
      return res.status(201).json({
        message: error,
      });
    }
    
    res
      .status(200)
      .json({ 
        message: `You have been registered successfully with the email: ${email}`,
      });
  }
}

function buildPath() {
  return path.join(process.cwd(), 'src', 'data', 'data.json');
}

function extractData(filepath: string) {
  const jsonData = fs.readFileSync(filepath, 'utf8');
  const data = JSON.parse(jsonData);

  return data;
}