import { EventCards } from '@/components/EventCards';
import { FC } from 'react';
import { EventsCategories } from '@/types/EventsCategories';
import styles from '@/styles/Home.module.scss'

type Props = {
  descr?: boolean,
  data: EventsCategories[],
}

export const Home: FC<Props> = ({ descr, data }) => {
  return (
    <main className={styles.main}>
      <div className={styles.main__cards_container}>
        <EventCards descr={descr} data={data} />
      </div>
    </main>
  );
}

export default Home;

export async function getServerSideProps() {
  const { events_categories } = await import('../data/data.json');

  return {
    props: {
      descr: false,
      data: events_categories,
    }
  }
}
