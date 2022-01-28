import styled from 'styled-components';
import { TextMedium, HeaderSmall } from '../Typography/Typography.styled';

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

export const StyledContentContainer = styled.div`
  flex: 3;
`;

export const StyledRoomFacilitiesTitle = styled(HeaderSmall)`
  padding-right: 10px;
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

export const StyledDescriptionText = styled(TextMedium)`
  line-height: 20px;
`;
