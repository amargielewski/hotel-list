import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ::after {
    position: absolute;
    content: '';
    width: 100%;
    top: 0;
    height: 1px;
    /* background-color: ${({ theme }) => theme.colors.flame}; */
    background-color: lightgray;
  }
`;

export const HeaderLogo = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.rasin_black};
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 4px;
`;