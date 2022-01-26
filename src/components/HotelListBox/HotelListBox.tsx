import {
  StyledWrapper,
  StyledHotelContainer,
  StyledHotelInfoContainer,
  StyledInfoAddressText,
  StyledHotelNameText,
  StyledRatingWrapper
} from './HotelListBox.styled';
import { HotelListImage } from '../HotelListImage/HotelListImage';
import Rating from 'react-rating';
import { StarIcon } from '../Icons/StarIcon';
import { HotelRoom } from '../HotelRoom/HotelRoom';

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

        <StyledRatingWrapper>
          <Rating
            emptySymbol={<StarIcon color={'lightgray'} />}
            fullSymbol={<StarIcon color={'gold'} />}
            fractions={2}
          />
        </StyledRatingWrapper>
      </StyledHotelContainer>
      <HotelRoom />
      <HotelRoom />
      <HotelRoom />
    </StyledWrapper>
  );
};
