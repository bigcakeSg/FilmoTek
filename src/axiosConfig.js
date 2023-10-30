import env from 'react-dotenv';
import axios from 'axios';

export const axiosInst = axios.create({
  baseURL: env.API_BASE_URI_DEV
});

export const axiosRapidApiInst = axios.create({
  baseURL: 'https://moviesdatabase.p.rapidapi.com'
});
