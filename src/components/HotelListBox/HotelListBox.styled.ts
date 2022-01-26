import styled from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.flame};
  border-radius: 10px;
  margin-top: 50px;
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
  font-weight: 300;
  font-size: 16px;
`;

export const StyledHotelNameText = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

export const StyledRatingWrapper = styled.div`
  font-size: 30px;
  margin-left: auto;
`;
