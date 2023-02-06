import { FC } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

type Props = {
  children: React.ReactNode,
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}
