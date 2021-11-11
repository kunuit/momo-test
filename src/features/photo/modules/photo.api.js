// import qs from 'query-string';

import axiosService from '@src/modules/axiosService';
import {API_GET_PHOTO} from '@env';

export const getPhotoListAPI = (start, limit) => {
  return axiosService.get(`${API_GET_PHOTO}?_start=${start}&_limit=${limit}`);
};

export const getPhotoDetailAPI = id => {
  return axiosService.get(`${API_GET_PHOTO}/${id}`);
};
