import axios from 'axios';
import { TOKEN_HEADER_NAME } from '@/config/setting';
import { getToken } from './token-util';

const baseinfo = axios.create({
  baseURL: 'http://slxd3.api.com/'
});

baseinfo.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers[TOKEN_HEADER_NAME] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

baseinfo.interceptors.response.use((resp) => {
  return resp;
});

export default baseinfo;
