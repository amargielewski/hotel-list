import React from 'react';
import { Room } from '../../types/hotelDetails';

import {
  StyledWrapper,
  StyledInfoContainer,
  StyledRoomNameText,
  StyledRoomInfoText,
  StyledContainerWrapper,
  StyledContentContainer,
  StyledRoomFacilitiesTitle,
  StyledRoomFacilitiesItem,
  StyledRoomFacilitiesContainer,
  StyledDescriptionContainer,
  StyledDescriptionText,
  StyledDescriptionTitle
} from './HotelRoom.styled';

export const HotelRoom = ({
  name,
  occupancy,
  facilities,
  shortDescription
}: Room) => {
  return (
    <StyledWrapper>
      <StyledContainerWrapper>
        <StyledInfoContainer>
          <StyledRoomNameText>{name}</StyledRoomNameText>
          <StyledRoomInfoText>Adult: {occupancy.maxAdults}</StyledRoomInfoText>
          <StyledRoomInfoText>
            Children: {occupancy.maxChildren}
          </StyledRoomInfoText>
        </StyledInfoContainer>

        <StyledContentContainer>
          {shortDescription && (
            <StyledDescriptionContainer>
              <StyledDescriptionTitle>Description:</StyledDescriptionTitle>
              <StyledDescriptionText>{shortDescription}</StyledDescriptionText>
            </StyledDescriptionContainer>
          )}
          {facilities.length !== 0 && (
            <StyledRoomFacilitiesContainer>
              <StyledRoomFacilitiesTitle>Facilities:</StyledRoomFacilitiesTitle>
              {facilities.map(({ name, code }) => (
                <StyledRoomFacilitiesItem key={code}>
                  {name},
                </StyledRoomFacilitiesItem>
              ))}
            </StyledRoomFacilitiesContainer>
          )}
        </StyledContentContainer>
      </StyledContainerWrapper>
    </StyledWrapper>
  );
};
