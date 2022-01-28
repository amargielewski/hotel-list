import styled from 'styled-components';
import { TextMedium } from '../Typography/Typography.styled';

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
  cursor: pointer;
  :disabled {
    opacity: 0.3;
    cursor: auto;
  }
`;

export const StyledValue = styled(TextMedium)`
  font-weight: 600;
`;

export const StyledCounterName = styled(TextMedium)`
  text-transform: capitalize;
`;
