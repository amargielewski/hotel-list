import {
  StyledWrapper,
  StyledHotelContainer,
  StyledHotelInfoContainer,
  StyledInfoAddressText,
  StyledHotelNameText
} from './HotelListBox.styled';
import { HotelListImage } from '../HotelListImage/HotelListImage';
import Rating from 'react-rating';

export const HotelListBox = () => {
  return (
    <StyledWrapper>
      <StyledHotelContainer>
        <HotelListImage />
        <StyledHotelInfoContainer>
          <StyledHotelNameText>Hotel Name</StyledHotelNameText>
          <StyledInfoAddressText>Addres 1</StyledInfoAddressText>
          <StyledInfoAddressText>Addres 2</StyledInfoAddressText>
        </StyledHotelInfoContainer>
        <Rating />
      </StyledHotelContainer>
    </StyledWrapper>
  );
};
