import styled from 'styled-components';

export const FooterWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.rasin_black};
`;

export const FooterLogo = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.floral_white};
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 4px;
`;
