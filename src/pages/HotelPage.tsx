import { useHotels } from '../api/getHotels';
import { HotelListBox } from '../components/HotelListBox/HotelListBox';
import { Hotels } from '../types/hotels';
import { StyledWrapper } from './HotelPage.styled';

export const HotelPage = () => {
  const { data, isLoading, error } = useHotels();

  console.log(data, isLoading, error);

  return (
    <StyledWrapper>
      {data.map(({ name, address1, address2 }) => (
        <HotelListBox name={name} address1={address1} address2={address2} />
      ))}
    </StyledWrapper>
  );
};
