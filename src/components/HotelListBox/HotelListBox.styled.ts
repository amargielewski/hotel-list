import styled from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  height: 400px;
  border: 1px solid ${({ theme }) => theme.colors.celtic_blue};
  border-radius: 10px;
  padding: 15px;
`;

export const StyledHotelContainer = styled.div`
  display: flex;
  gap: 0 20px;
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
  font-weight: 400;
`;
