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

export const HeaderLogo = styled.h2`
  font-size: 32px;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 4px;
`;
