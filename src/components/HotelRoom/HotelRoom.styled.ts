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
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

export const StyledRoomNameText = styled.p`
  font-weight: 500;
  font-size: 18px;
`;
export const StyledRoomInfoText = styled.p`
  font-weight: 300;
  font-size: 16px;
`;

export const StyledContentContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const StyledRoomFacilitiesTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  padding-right: 10px;
`;

export const StyledRoomFacilitiesItem = styled.p`
  font-weight: 300;
  font-size: 16px;
`;
