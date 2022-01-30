import { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from '../globalStyles/global.styled';

export const theme = {
  colors: {
    black: '#000',
    floral_white: '#fff8f0',
    flame: '#e4572e',
    rasin_black: '#171a21',
    ligthgray: '#d3d3d3'
  },
  fontSizes: {
    xs: 10,
    s: 14,
    m: 16,
    l: 18,
    xl: 24,
    xxl: 32
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600
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
