import {
  StyledWrapper,
  StyledHotelContainer,
  StyledHotelInfoContainer,
  StyledInfoAddressText,
  StyledHotelNameText,
  StyledRatingWrapper
} from './HotelListBox.styled';
import { Rating } from 'react-simple-star-rating';
import { StarIcon } from '../Icons/StarIcon';
import { HotelRoom } from '../HotelRoom/HotelRoom';
import { ImageSlider } from '../ImageSlider/ImageSlider';
import { Hotels } from '../../types/hotels';

export const HotelListBox = ({ name, address1, address2 }: any) => {
  return (
    <StyledWrapper>
      <StyledHotelContainer>
        <ImageSlider />
        <StyledHotelInfoContainer>
          <StyledHotelNameText>{name}</StyledHotelNameText>
          <StyledInfoAddressText>{address1}</StyledInfoAddressText>
          {address2 && <StyledInfoAddressText>Addres 2</StyledInfoAddressText>}
        </StyledHotelInfoContainer>

        <StyledRatingWrapper>
          <Rating
            ratingValue={0}
            allowHalfIcon
            emptyIcon={<StarIcon color="lighray" />}
            fullIcon={<StarIcon color="#ffbc0b" />}
            size={20}
          />
        </StyledRatingWrapper>
      </StyledHotelContainer>
      <HotelRoom />
      <HotelRoom />
      <HotelRoom />
    </StyledWrapper>
  );
};
