import React from 'react';
import { Room } from '../../types/hotelDetails';
import {
  HeaderSmall,
  TextLarge,
  TextSmall
} from '../Typography/Typography.styled';

import {
  StyledWrapper,
  StyledInfoContainer,
  StyledContainerWrapper,
  StyledContentContainer,
  StyledRoomFacilitiesTitle,
  StyledRoomFacilitiesContainer,
  StyledDescriptionContainer,
  StyledDescriptionText
} from './HotelRoom.styled';

export const HotelRoom = ({
  name,
  occupancy,
  facilities,
  longDescription
}: Room) => {
  return (
    <StyledWrapper>
      <StyledContainerWrapper>
        <StyledInfoContainer>
          <HeaderSmall>{name}</HeaderSmall>
          <TextLarge>Adult: {occupancy.maxAdults}</TextLarge>
          <TextLarge>Children: {occupancy.maxChildren}</TextLarge>
        </StyledInfoContainer>

        <StyledContentContainer>
          {longDescription && (
            <StyledDescriptionContainer>
              <HeaderSmall>Description:</HeaderSmall>
              <StyledDescriptionText>{longDescription}</StyledDescriptionText>
            </StyledDescriptionContainer>
          )}
          {facilities.length !== 0 && (
            <StyledRoomFacilitiesContainer>
              <StyledRoomFacilitiesTitle>Facilities:</StyledRoomFacilitiesTitle>
              {facilities.map(({ name, code }) => (
                <TextSmall key={code}>{name},</TextSmall>
              ))}
            </StyledRoomFacilitiesContainer>
          )}
        </StyledContentContainer>
      </StyledContainerWrapper>
    </StyledWrapper>
  );
};
