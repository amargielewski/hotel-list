import { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import { Hotels } from '../types/hotels';

export const getHotels = () => apiService.get('/hotels?collection-id=OBMNG');

export const useHotels = () => {
  const [data, setData] = useState<Hotels[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getHotels()
      .then((RES) => {
        setData(RES?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return { data, isLoading, error };
};
