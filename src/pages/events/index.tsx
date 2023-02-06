import { EventCards } from "@/components/EventCards";
import { EventsCategories } from "@/types/EventsCategories";
import { FC } from "react";
import styles from '@/styles/Home.module.scss';

type Props = {
  descr?: boolean,
  data: EventsCategories[],
}

const AllEvents: FC<Props> = ({ descr, data }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Events Page</h1>

      <div className={
        descr 
        ? styles.main__cards_full_container
        : styles.main__cards_container
        }>
        <EventCards descr={descr} data={data} />
      </div>
    </main>
  );
}

export default AllEvents;

export async function getServerSideProps() {
  const { events_categories } = await import('../../data/data.json');

  return {
    props: {
      descr: true,
      data: events_categories,
    }
  }
}
