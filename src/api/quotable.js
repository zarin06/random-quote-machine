import axios from 'axios';

export default axios.create({
  // baseURL: 'http://quotes.stormconsultancy.co.uk'
  baseURL: 'https://programming-quotes-api.herokuapp.com/'
});