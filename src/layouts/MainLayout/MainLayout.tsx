import { PropsWithChildren } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { MainLayoutWrapper, StyledWrapper } from './MainLayout.styled';

type MainLayoutProps = PropsWithChildren<{}>;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <StyledWrapper>
      <Header />
      <MainLayoutWrapper>{children}</MainLayoutWrapper>
      <Footer />
    </StyledWrapper>
  );
};
