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
  StyledDescriptionTitle,
  StyledInfoContactContainer,
  StyledDescriptionRatingContainer,
  StyledMessage
} from './HotelListBox.styled';
import { Rating } from 'react-simple-star-rating';
import { StarIcon } from '../Icons/StarIcon';
import { MailIcon } from '../Icons/MailIcon';
import { PhoneIcon } from '../Icons/PhoneIcon';
import { HotelRoom } from '../HotelRoom/HotelRoom';
import { ImageSlider } from '../ImageSlider/ImageSlider';
import { Hotels } from '../../types/hotels';
import { useHotelsDetails } from '../../api/getHotelDetails';
import React, { useContext } from 'react';
import { stateContext } from '../../providers/state';

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

  const { state } = useContext(stateContext);

  const filtredData = data?.rooms.filter((item) => {
    const adults = state.adults ?? 0;
    const children = state.children ?? 0;

    return (
      +item.occupancy.maxAdults >= adults &&
      +item.occupancy.maxChildren >= children
    );
  });

  return (
    <StyledWrapper>
      <StyledHotelContainer>
        <StyledInfoWrapper>
          <ImageSlider images={images} />
          <StyledInfoContactContainer>
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
          </StyledInfoContactContainer>
        </StyledInfoWrapper>
        <StyledDescriptionRatingContainer>
          <StyledRatingWrapper>
            <Rating
              ratingValue={0}
              readonly
              initialValue={+starRating}
              emptyIcon={<StarIcon color="lighray" />}
              fullIcon={<StarIcon color="#ffbc0b" />}
              size={20}
            />
          </StyledRatingWrapper>

          <StyledDescriptionContainer>
            <StyledDescriptionTitle>Description:</StyledDescriptionTitle>
            <StyledDescriptionText>{description}</StyledDescriptionText>
          </StyledDescriptionContainer>
        </StyledDescriptionRatingContainer>
        {filtredData?.length === 0 && (
          <StyledMessage> No rooms matching the criteria</StyledMessage>
        )}
      </StyledHotelContainer>

      <StyledHotelRoomsContainer>
        {filtredData?.length === 0
          ? null
          : filtredData?.map((room) => (
              <React.Fragment key={room.id}>
                <HotelRoom {...room} />
              </React.Fragment>
            ))}
      </StyledHotelRoomsContainer>
    </StyledWrapper>
  );
};
