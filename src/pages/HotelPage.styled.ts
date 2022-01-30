import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  margin-bottom: 150px;
`;

export const StyledLoading = styled.p`
  margin-top: 50px;
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  text-align: center;
`;

export const StyledError = styled.p`
  margin-top: 50px;
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  text-align: center;
`;
