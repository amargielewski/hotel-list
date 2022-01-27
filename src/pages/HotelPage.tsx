/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { useHotels } from '../api/getHotels';
import { HotelListBox } from '../components/HotelListBox/HotelListBox';
import { stateContext } from '../providers/state';
import { StyledWrapper } from './HotelPage.styled';

export const HotelPage = () => {
  const { data, isLoading, error } = useHotels();
  const { state } = useContext(stateContext);

  const filtredData = data?.filter((item) => {
    const stars = (state.stars ?? 0) / 20;
    return +item.starRating >= stars;
  });

  return (
    <StyledWrapper>
      {filtredData &&
        filtredData?.map((hotel) => (
          <React.Fragment key={hotel.id}>
            <HotelListBox {...hotel} />
          </React.Fragment>
        ))}
    </StyledWrapper>
  );
};
