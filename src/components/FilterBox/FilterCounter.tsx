/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import {
  StyledWrapper,
  StyledButton,
  StyledValue,
  StyledCounterName
} from './FilterCounter.styled';

export type FilterNameType = 'children' | 'adults';

export type FilterCounterProps = {
  name: FilterNameType;
  handleChange: (value: number) => void;
};

export const FilterCounter = ({ name, handleChange }: FilterCounterProps) => {
  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    handleChange(counterValue);
  }, [counterValue]);

  return (
    <StyledWrapper>
      <StyledCounterName>{name}:</StyledCounterName>

      {counterValue > 0 ? (
        <StyledButton onClick={() => setCounterValue(counterValue - 1)}>
          -
        </StyledButton>
      ) : (
        <StyledButton disabled>-</StyledButton>
      )}
      <StyledValue>{counterValue}</StyledValue>
      <StyledButton onClick={() => setCounterValue(counterValue + 1)}>
        +
      </StyledButton>
    </StyledWrapper>
  );
};
