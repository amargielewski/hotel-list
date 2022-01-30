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
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.flame};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  display: flex;

  width: 25px;
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
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StyledCounterName = styled(TextMedium)`
  text-transform: capitalize;
`;
