import { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import { Room, RootObject } from '../types/hotelDetails';

type getHotelsDetailsProps = {
  id: string;
};

export const getHotelDetails = ({ id }: getHotelsDetailsProps) =>
  apiService.get('/roomRates/OBMNG/' + id);

export const useHotelsDetails = ({ id }: getHotelsDetailsProps) => {
  const [data, setData] = useState<RootObject | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getHotelDetails({ id })
      .then((RES) => {
        setData(RES?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [id]);

  return { data, isLoading, error };
};
