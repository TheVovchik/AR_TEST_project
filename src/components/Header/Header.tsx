import { FC } from 'react';
import Link from 'next/link';
import styles from  './Header.module.scss';
import Image from 'next/image';
import Logo from '../../images/logo_black.png';
import { useRouter } from "next/router";

export const Header: FC = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.nav__logo}>
          <Image
            src={Logo}
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.nav__logo_img}
          />

          <h1 className={styles.header__title}>Sed ut perspiciatis unde omnis</h1>
        </div>

        <nav className={`${styles.header__nav} ${styles.nav}`}>
          <ul className={styles.nav__links}>
            <li
              className={
                router.pathname !== "/"
                  ? styles.nav__item
                  : `${styles.nav__item} ${styles.nav__item_active}`
              }
            >
              <Link
                href="/"
              >
                Home
              </Link>
            </li>

            <li
              className={
                router.pathname !== "/events"
                  ? styles.nav__item
                  : `${styles.nav__item} ${styles.nav__item_active}`
              }
            >
              <Link href="/events">Events</Link>
            </li>

            <li
              className={
                router.pathname !== "/about-us"
                  ? styles.nav__item
                  : `${styles.nav__item} ${styles.nav__item_active}`
              }
            >
              <Link
                href="/about-us"
                className={styles.nav__link}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
