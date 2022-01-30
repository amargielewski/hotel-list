import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin-top: 50px;

  width: 100%;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.rasin_black};
`;

export const StyledTextContainer = styled.div`
  color: ${({ theme }) => theme.colors.floral_white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px 0;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.floral_white};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
`;
