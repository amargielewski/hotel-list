import {
  StyledWrapper,
  StyledHotelContainer,
  StyledHotelInfoContainer,
  StyledInfoAddressText,
  StyledHotelNameText,
  StyledRatingWrapper,
  StyledCountryTownContainer,
  StyledCountryName,
  StyledTownName,
  StyledHotelContactContainer,
  StyledContactTelephoneText,
  StyledContactEmailText,
  StyledInfoWrapper,
  StyledSingleContactBox,
  StyledDescriptionContainer,
  StyledDescriptionText,
  StyledHotelRoomsContainer,
  StyledDescriptionTitle
} from './HotelListBox.styled';
import { Rating } from 'react-simple-star-rating';
import { StarIcon } from '../Icons/StarIcon';
import { MailIcon } from '../Icons/MailIcon';
import { PhoneIcon } from '../Icons/PhoneIcon';
import { HotelRoom } from '../HotelRoom/HotelRoom';
import { ImageSlider } from '../ImageSlider/ImageSlider';
import { Hotels } from '../../types/hotels';
import { useHotelsDetails } from '../../api/getHotelDetails';
import React from 'react';

export const HotelListBox = ({
  name,
  address1,
  address2,
  country,
  town,
  starRating,
  images,
  telephone,
  email,
  description,
  id
}: Hotels) => {
  const { data, isLoading, error } = useHotelsDetails({ id });

  return (
    <StyledWrapper>
      <StyledHotelContainer>
        <ImageSlider images={images} />
        <StyledInfoWrapper>
          <StyledHotelInfoContainer>
            <StyledHotelNameText>{name}</StyledHotelNameText>
            <StyledCountryTownContainer>
              <StyledTownName>{town},</StyledTownName>
              <StyledCountryName>{country}</StyledCountryName>
            </StyledCountryTownContainer>
            <StyledInfoAddressText>{address1}</StyledInfoAddressText>
            {address2 && (
              <StyledInfoAddressText>Addres 2</StyledInfoAddressText>
            )}
          </StyledHotelInfoContainer>
          <StyledHotelContactContainer>
            <StyledSingleContactBox>
              <MailIcon />
              <StyledContactEmailText>{email}</StyledContactEmailText>
            </StyledSingleContactBox>
            <StyledSingleContactBox>
              <PhoneIcon />
              <StyledContactTelephoneText>
                {telephone}
              </StyledContactTelephoneText>
            </StyledSingleContactBox>
          </StyledHotelContactContainer>
        </StyledInfoWrapper>
        <StyledDescriptionContainer>
          <StyledDescriptionTitle>Description:</StyledDescriptionTitle>
          <StyledDescriptionText>{description}</StyledDescriptionText>
        </StyledDescriptionContainer>

        <StyledRatingWrapper>
          <Rating
            ratingValue={0}
            readonly
            initialValue={parseFloat(starRating)}
            emptyIcon={<StarIcon color="lighray" />}
            fullIcon={<StarIcon color="#ffbc0b" />}
            size={20}
          />
        </StyledRatingWrapper>
      </StyledHotelContainer>
      <StyledHotelRoomsContainer>
        {data &&
          data?.rooms.map((room) => (
            <React.Fragment key={room.id}>
              <HotelRoom {...room} />
            </React.Fragment>
          ))}
      </StyledHotelRoomsContainer>
    </StyledWrapper>
  );
};
