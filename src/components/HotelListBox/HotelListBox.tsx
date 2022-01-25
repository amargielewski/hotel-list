import { PropsWithChildren } from 'react';
import { StyledWrapper } from './HotelListBox.styled';

type HotelListBoxProps = PropsWithChildren<{}>;

export const HotelListBox = ({ children }: HotelListBoxProps) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
