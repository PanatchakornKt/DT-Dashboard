import axios from "axios";

export default axios.create({
  baseURL: 'http://api.openweathermap.org',
  params: {
    appid: 'c22c49fd4f10c752d726a91e4ae4f83f',
  },
});