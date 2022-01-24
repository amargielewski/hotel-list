import { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from '../globalStyles/global.styled';

const mainTheme = {
  colors: {
    black: '#000'
  }
};

type ThemeProviderProps = PropsWithChildren<{}>;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={mainTheme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
