import { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from '../globalStyles/global.styled';

export const theme = {
  colors: {
    black: '#000',
    polished_pine: '#689689',
    floral_white: '#fff8f0',
    flame: '#e4572e',
    rasin_black: '#171a21',
    celtic_blue: '#226ce0',
    ligthgray: '#d3d3d3'
  }
};

type ThemeProviderProps = PropsWithChildren<{}>;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
