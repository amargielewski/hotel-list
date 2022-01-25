import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid ${({ theme }) => theme.colors.celtic_blue};
  border-radius: 10px;
  padding: 15px;
`;
