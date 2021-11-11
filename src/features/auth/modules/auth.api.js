// import qs from 'query-string';

import axiosService from '@src/modules/axiosService';
import {API_LOGIN_ENDPOINT} from '@env';

export const loginAPI = data => {
  return axiosService.post(`${API_LOGIN_ENDPOINT}`, data);
};

export const setTokenHeaderService = token => {
  return axiosService.setToken(token);
};

export const setTokenHeaderMomoService = token => {
  return axiosService.setTokenMomo(token);
};
