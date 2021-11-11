import {convertDataSuccess} from '@src/modules/utils';
import {takeEvery, put, call, select} from 'redux-saga/effects';
import {getPhotoDetailAPI, getPhotoListAPI} from '../modules/photo.api';

import {typeActionLoading, typePhotos} from './photo.type';

function* fetchPhotoListSaga({payload}) {
  // show loading and block button
  yield put({
    type: typePhotos.changeFields,
    payload: {
      changeFields: {
        showLoading: true,
        actionLoading: typeActionLoading.list,
      },
    },
  });

  const {pagination} = yield select(state => state.photo);
  //call api
  const data = yield call(getPhotoListAPI, pagination.currentPage, 10);

  if (!!data) {
    // go to my profile
    const listObject = convertDataSuccess(data);

    yield put({
      type: typePhotos.fetchPhotoListSuccess,
      payload: {
        data: listObject,
        currentPage: pagination.currentPage + 10,
      },
    });
  } else {
    // res error
    yield put({
      type: typePhotos.changeFields,
      payload: {
        changeFields: {
          showLoadingList: false,
          actionLoading: null,
          errorPhoto: data.error,
        },
      },
    });
  }
}

function* fetchPhotoDetailSaga({payload}) {
  // show loading and block button

  const {cachePhoto} = yield select(state => state.photo);

  if (!!cachePhoto[payload.id]) {
    yield put({
      type: typePhotos.changeFields,
      payload: {
        changeFields: {
          selectedPhoto: cachePhoto[`${payload.id}`],
        },
      },
    });
    return;
  }

  yield put({
    type: typePhotos.changeFields,
    payload: {
      changeFields: {
        showLoading: true,
        actionLoading: typeActionLoading.detail,
      },
    },
  });
  //call api
  const data = yield call(getPhotoDetailAPI, payload.id);

  if (!!data) {
    // go to my profile
    yield put({
      type: typePhotos.fetchPhotoDetailSuccess,
      payload: {
        data,
      },
    });
  } else {
    // res error
    yield put({
      type: typePhotos.changeFields,
      payload: {
        error: data.error,
        showLoading: false,
        actionLoading: null,
      },
    });
  }
}

export const photoSagas = [
  takeEvery(typePhotos.fetchPhotoList, fetchPhotoListSaga),
  takeEvery(typePhotos.fetchPhotoDetail, fetchPhotoDetailSaga),
];
