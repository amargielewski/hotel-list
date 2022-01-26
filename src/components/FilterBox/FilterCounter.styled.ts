import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
  margin-left: 10px;
`;

export const StyledButton = styled.button`
  border: none;
  font-size: 18px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.flame};
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  :disabled {
    opacity: 0.3;
  }
`;

export const StyledValue = styled.p`
  padding: 0 3px;
  font-weight: 600;
`;

export const StyledCounterName = styled.p`
  text-transform: capitalize;
  font-weight: 500;
`;
