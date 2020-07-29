import axios from 'axios';

export const http = axios.create({
  baseURL: `https://reqres.in/api/`,
  headers: {
    'X-Custom-Header': 'Custom-Value',
    'X-Auth-Token': '123456ABCD',
  },
});

//  other clients with different baseURLs
//  ...
