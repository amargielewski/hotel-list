import React, { PropsWithChildren } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { MainLayoutWrapper } from './MainLayout.styled';

type MainLayoutProps = PropsWithChildren<{}>;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <MainLayoutWrapper>{children}</MainLayoutWrapper>
    </>
  );
};
