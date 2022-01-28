import styled from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 50px;
  border: 1px solid ${({ theme }) => theme.colors.ligthgray};
`;

export const StyledHotelContainer = styled.div`
  display: flex;
  gap: 0 20px;
  padding: 15px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  flex-direction: column;
`;

export const StyledHotelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  margin-top: 10px;
  @media (max-width: 400px) {
    align-items: center;
  }
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
  margin-top: 20px;
  font-size: 30px;

  @media (max-width: 400px) {
    align-self: center;
  }
`;

export const StyledCountryTownContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

  @media (max-width: 400px) {
    align-items: center;
  }
`;

export const StyledContactEmailText = styled.p`
  font-weight: 400;
  font-size: 14px;

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
export const StyledContactTelephoneText = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 3px;

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  gap: 0 10px;

  @media (max-width: 1000px) {
    gap: 0 20px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
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
  max-height: 400px;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

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
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

export const StyledMessage = styled.p`
  padding: 20px 0;
  font-weight: 500;
  font-size: 24px;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
