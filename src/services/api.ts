import axios from 'axios';

export const apiService = axios.create({
  baseURL: 'https://obmng.dbm.guestline.net/api'
});
