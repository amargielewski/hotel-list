import styled from 'styled-components';

export const FooterWrapper = styled.div`
  margin-top: 50px;

  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.rasin_black};
`;

export const FooterLogo = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.floral_white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: capitalize;
  letter-spacing: 4px;
`;
