import { StyledWrapper, StyledHotelContainer } from './HotelListBox.styled';
import { HotelListImage } from '../HotelListImage/HotelListImage';

export const HotelListBox = () => {
  return (
    <StyledWrapper>
      <StyledHotelContainer>
        <HotelListImage />
      </StyledHotelContainer>
    </StyledWrapper>
  );
};
