import styles from '@/styles/Home.module.scss';

const AboutUs = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>About Us</h1>
      <p className={styles.main__descr}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam
        suscipit amet laudantium blanditiis, maxime impedit reiciendis velit
        mollitia eius, labore vitae, aliquid quae magni expedita consectetur nam
        eaque doloribus quibusdam aperiam obcaecati architecto dolorem hic.
        Explicabo reiciendis quisquam quas. Architecto, aliquid obcaecati in ut
        aut recusandae fugit repellat modi!
      </p>
      <h2 className={styles.main__title} >Dlor in reprehenderit </h2>
      <p className={styles.main__descr}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <ul className={styles.main__list}>
        <li className={styles.main__item}>
          <h3 className={styles.main__subtitle}>Dlor in reprehenderit </h3>
          <p className={styles.main__descr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in
          </p>
        </li>
        <li className={styles.main__item}>
          <h3 className={styles.main__subtitle}>Sed do eiusmod tempor </h3>
          <p className={styles.main__descr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in
          </p>
        </li>
      </ul>
    </main>
  );
}

export default AboutUs;
