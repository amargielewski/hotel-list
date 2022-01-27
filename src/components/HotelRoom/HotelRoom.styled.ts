import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;

  ::after {
    position: absolute;
    content: '';
    width: 100%;
    top: 0;
    height: 1px;
    background-color: lightgray;
  }
`;

export const StyledContainerWrapper = styled.div`
  padding: 15px;
  display: flex;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 20px 0;
  }
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  flex: 1;
  margin-right: 10px;
`;

export const StyledRoomNameText = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
export const StyledRoomInfoText = styled.p`
  font-weight: 400;
  font-size: 18px;
`;

export const StyledContentContainer = styled.div`
  flex: 3;
`;

export const StyledRoomFacilitiesTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  padding-right: 10px;
`;

export const StyledRoomFacilitiesItem = styled.p`
  font-weight: 400;
  font-size: 14px;
`;

export const StyledRoomFacilitiesContainer = styled.div`
  display: flex;
  gap: 10px 5px;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0 10px;
  margin-bottom: 10px;
`;

export const StyledDescriptionText = styled.p`
  font-size: 16px;
  line-height: 20px;
`;

export const StyledDescriptionTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
`;
