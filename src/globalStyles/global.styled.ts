import { createGlobalStyle } from 'styled-components';
import { ResetCss } from './reset.styled';

export const GlobalStyle = createGlobalStyle`
${ResetCss}

body {
    font-family: 'Montserrat', sans-serif;
    background-color:${({ theme }) => theme.colors.floral_white};
    color: ${({ theme }) => theme.colors.rasin_black}
}

`;
