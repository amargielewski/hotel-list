import styled from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 50px;
  border: 1px solid ${({ theme }) => theme.colors.flame};
`;

export const StyledHotelContainer = styled.div`
  display: flex;
  gap: 0 20px;
  padding: 15px;
`;

export const StyledHotelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
`;

export const StyledInfoAddressText = styled.p`
  font-weight: 400;
  font-size: 16px;
`;

export const StyledHotelNameText = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

export const StyledRatingWrapper = styled.div`
  align-self: flex-end;
  font-size: 30px;
  @media (max-width: 1000px) {
    font-size: 25px;
  }
`;

export const StyledCountryTownContainer = styled.div`
  display: flex;
  gap: 0 10px;
`;
export const StyledCountryName = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
export const StyledTownName = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

export const StyledHotelContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
`;

export const StyledContactEmailText = styled.p`
  font-weight: 400;
  font-size: 14px;
`;
export const StyledContactTelephoneText = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 3px;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  gap: 0 10px;

  flex: 1;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 10px 0;
  }
`;

export const StyledSingleContactBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;

export const StyledDescriptionContainer = styled.div`
  margin-top: 20px;
`;

export const StyledDescriptionText = styled.p`
  font-size: 16px;
  line-height: 20px;
`;

export const StyledDescriptionTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

export const StyledHotelRoomsContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.flame};
    border-radius: 10px;
  }
`;

export const StyledInfoContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;

export const StyledDescriptionRatingContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;
