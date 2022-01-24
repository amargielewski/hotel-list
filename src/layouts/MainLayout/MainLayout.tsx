import React, { PropsWithChildren } from 'react';
import { MainLayoutWrapper } from './MainLayout';

type MainLayoutProps = PropsWithChildren<{}>;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
};
