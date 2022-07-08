import axios from 'axios';

export const restService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
