import {initialState} from './photo.initial-state';
import {typePhotos} from './photo.type';

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    // show loading

    //handle
    case typePhotos.changeFields:
      return {
        ...state,
        ...payload.changeFields,
      };

    case typePhotos.fetchPhotoListSuccess:
      return {
        ...state,
        photos: {...state.photos, ...payload.data},
        showLoading: false,
        actionLoading: null,
        pagination: {...state.pagination, currentPage: payload.currentPage},
      };

    case typePhotos.fetchPhotoDetailSuccess:
      return {
        ...state,
        selectedPhoto: payload.data,
        cachePhoto: {
          ...state.cachePhoto,
          [payload.data.id]: payload.data,
        },
        showLoading: false,
        actionLoading: null,
      };
    default:
      return state;
  }
};

export default reducer;
