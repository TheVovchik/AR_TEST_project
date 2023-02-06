import { EventsCategories } from '@/types/EventsCategories';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from  './EventCard.module.scss';

type Props = {
  descr?: boolean,
  data: EventsCategories[],
}

export const EventCards: FC<Props> = ({ descr, data }) => {
  return (
    <>
      {data.map(({ id, title, description, image }, index) => {
          const isEven = index % 2 === 0 
            ? styles.event_card_full__link_even
            : styles.event_card_full__link
          ;

          return (
            <div
              key={id}
              className={
                descr 
                  ? styles.event_card_full
                  : styles.event_card
                }
            >
              <Link
                href={`/events/${id}`}
                className={
                  descr 
                  ? isEven
                  : styles.event_card__link
                }
              >
                <Image
                  loader={() => image}
                  src={image}
                  alt={title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={
                    descr 
                    ? styles.event_card_full__photo
                    : styles.event_card__photo
                  }
                />
                <h2
                  className={
                    descr 
                    ? styles.event_card_full__title
                    : styles.event_card__title
                  }
                >
                  {title}
                </h2>

                {descr && (
                  <p
                    className={
                      descr 
                      ? styles.event_card_full__descr
                      : styles.event_card__descr
                    }
                  >
                    {description}
                  </p>
                )}
              </Link>
            </div>
          );
      })}
    </>
    
  );
}
