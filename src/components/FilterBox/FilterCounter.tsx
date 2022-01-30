/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
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
  value: number;
};
export const FilterCounter = ({
  name,
  handleChange,
  value
}: FilterCounterProps) => {
  return (
    <StyledWrapper>
      <StyledCounterName>{name}:</StyledCounterName>

      {value > 0 ? (
        <StyledButton onClick={() => handleChange(value - 1)}>-</StyledButton>
      ) : (
        <StyledButton disabled>-</StyledButton>
      )}
      <StyledValue>{value}</StyledValue>
      <StyledButton onClick={() => handleChange(value + 1)}>+</StyledButton>
    </StyledWrapper>
  );
};
