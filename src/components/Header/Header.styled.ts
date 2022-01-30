import { HeaderLarge } from '../Typography/Typography.styled';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  ::after {
    position: absolute;
    content: '';
    width: 100%;
    top: 100%;
    height: 1px;
    background-color: lightgray;
  }
`;

export const HeaderLogo = styled(HeaderLarge)`
  text-transform: capitalize;
  letter-spacing: 4px;

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;
