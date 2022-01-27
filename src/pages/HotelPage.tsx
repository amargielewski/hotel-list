import React from 'react';
import { useHotelsDetails } from '../api/getHotelDetails';
import { useHotels } from '../api/getHotels';
import { HotelListBox } from '../components/HotelListBox/HotelListBox';
import { StyledWrapper } from './HotelPage.styled';

export const HotelPage = () => {
  const { data, isLoading, error } = useHotels();

  return (
    <StyledWrapper>
      {data &&
        data?.map((hotel) => (
          <React.Fragment key={hotel.id}>
            <HotelListBox {...hotel} />
          </React.Fragment>
        ))}
    </StyledWrapper>
  );
};
