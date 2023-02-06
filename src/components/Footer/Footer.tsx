import { FC } from 'react';
import styles from  './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        © 2023 Time to Code - A Project Built with Next.js
      </p>
    </footer>
  );
};
