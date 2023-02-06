import { CityEvent } from "@/types/CityEvent";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from '@/styles/Home.module.scss';

type Props = {
  data: CityEvent[],
}

export const Events: FC<Props> = ({ data }) => {
  const city = capitalizeFirstLetter(data[0].city);

  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Events in {city}</h1>

      <div className={styles.main__cards_container}>
        {data.map((event) => {
          const { id, title, city, image } = event;

          return (
            <Link key={id} href={`/events/${city.toLowerCase()}/${id}`}>
              <Image
                loader={() => image}
                src={image}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ 
                  width: "340px",
                  height: "200px",
                  objectPosition: "center",
                  objectFit: "cover",
                }}
              />
              <h2>{title}</h2>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default Events;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { allEvents } = await import('../../../data/data.json');
  const id = context.params?.city;
  const cityEvents = allEvents.filter(event => (
    event.city.toLowerCase() === id
  ))

  return {
    props: {
      data: cityEvents,
    }
  }
}

export async function getStaticPaths() {
  const { events_categories } = await import('../../../data/data.json');
  const allPaths = events_categories.map(event => {
    return {
      params: {
        city: event.id,
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}