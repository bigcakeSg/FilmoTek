import axios from 'axios';

export const axiosInst = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URI
});

export const axiosRapidApiInst = axios.create({
  baseURL: 'https://moviesdatabase.p.rapidapi.com'
});
