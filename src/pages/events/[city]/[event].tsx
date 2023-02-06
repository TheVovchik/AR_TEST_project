import { CityEvent } from "@/types/CityEvent";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import { FC, FormEvent, useRef, useState } from "react";
import styles from '@/styles/Home.module.scss';
import { useRouter } from "next/router";
import { EmailPattern } from "@/utils/EmailPattern";

type Props = {
  data: CityEvent,
}

const EventPage: FC<Props> = ({ data }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const {
    title,
    description,
    image,
  } = data;

  const inputEmail = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const validateEmail = (email: string) => {
    const isValid = EmailPattern.test(email);

    if (!isValid) {
      setError('Please input valid email adress');
    }

    return isValid;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (inputEmail) {
      const emailValue = inputEmail.current?.value;
      const eventId = router.query.event;

      if (emailValue) {
        const isValid = validateEmail(emailValue);

        if (!isValid) {
          return;
        }
      
        try {
          const response = await fetch('/api/email-registration', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: emailValue,
              eventId,
            })
          })

          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }

          const data = await response.json();

          inputEmail.current.value = '';
          setSuccess(data.message);
          setError('');
        } catch (e) {
          setError('Something went wrong');
        }
      } else {
        setError('Please input your email adress');
      }
    }
  }

  return (
    <main className={styles.main}>
      <Image
        loader={() => image}
        src={image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />

      <h2 className={styles.main__title}>{title}</h2>

      <p className={styles.main__descr}>{description}</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email" className={styles.form__label}>
          Get register for this event
        </label>

        <div className={styles.form__input_group}>
          <input
            ref={inputEmail}
            name="email"
            type="text"
            placeholder="Please insert your email here"
            className={styles.form__input}
          />

          <button type="submit" className={styles.form__submit}>
            Submit
          </button>
        </div>
        {error && (
          <p style={{ color: "darkred", padding: "10px 0" }}>{error}</p>
        )}
        {success && (
          <p style={{ color: "darkgreen", padding: "10px 0" }}>{success}</p>
        )}
      </form>
    </main>
  );
}

export default EventPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { allEvents } = await import('../../../data/data.json');
  const id = context.params?.event;
  const cityEvent = allEvents.find(event => (
    event.id === id
  ))

  return {
    props: {
      data: cityEvent,
    }
  }
}

export async function getStaticPaths() {
  const { allEvents } = await import('../../../data/data.json');
  const allPaths = allEvents.map(event => {
    return {
      params: {
        city: event.city.toLowerCase(),
        event: event.id,
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}