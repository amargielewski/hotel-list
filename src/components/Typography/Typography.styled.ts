import styled from 'styled-components';

// {
//   xs: 10,
//   s: 14,
//   m: 16,
//   l: 18,
//   xl: 24,
//   xxl: 32
// }

export const HeaderSmall = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const HeaderMedium = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const HeaderLarge = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const TextSmall = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
export const TextMedium = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
export const TextLarge = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
