import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  //baseURL: 'https://jsonplaceholder.typicode.com/',//Apifalsa
  //baseURL: 'http://localhost:3000/',
});


export default api;
// BaseUrl: http//localhost:3000/users são meus endpoints.
