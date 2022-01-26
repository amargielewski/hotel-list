import React from 'react';

import {
  StyledWrapper,
  StyledInfoContainer,
  StyledRoomNameText,
  StyledRoomInfoText,
  StyledContainerWrapper,
  StyledContentContainer,
  StyledRoomFacilitiesTitle,
  StyledRoomFacilitiesItem
} from './HotelRoom.styled';

export const HotelRoom = () => {
  return (
    <StyledWrapper>
      <StyledContainerWrapper>
        <StyledInfoContainer>
          <StyledRoomNameText>Room:Name</StyledRoomNameText>
          <StyledRoomInfoText>Adult: 2</StyledRoomInfoText>
          <StyledRoomInfoText>Children: 0</StyledRoomInfoText>
        </StyledInfoContainer>
        <StyledContentContainer>
          <StyledRoomFacilitiesTitle>Facilities:</StyledRoomFacilitiesTitle>
          <StyledRoomFacilitiesItem>4 Poster Bed</StyledRoomFacilitiesItem>
          <StyledRoomFacilitiesItem>Bathrobes</StyledRoomFacilitiesItem>
          <StyledRoomFacilitiesItem>
            Disabled Access / Facilities
          </StyledRoomFacilitiesItem>
        </StyledContentContainer>
      </StyledContainerWrapper>
    </StyledWrapper>
  );
};
