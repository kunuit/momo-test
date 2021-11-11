import {
  takeEvery,
  put,
  call,
  takeLatest,
  select,
  all,
} from 'redux-saga/effects';

import {typeAuths} from './auth.type';
import {
  loginAPI,
  setTokenHeaderService,
  setTokenHeaderMomoService,
} from '../modules/auth.api';
import {typePhotos} from '@src/features/photo/redux/photo.type';

function* initAuthSaga({payload}) {
  yield call(setTokenHeaderService, payload.token);
}

function* addTokenMomoSaga({payload}) {
  yield call(setTokenHeaderMomoService, payload.token);
}

function* loginSaga(action) {
  // show loading and block button
  yield put({type: typeAuths.showAuthLoading});
  //call api
  const data = yield call(loginAPI, action.payload);

  if (!!data.token) {
    // go to my profile
    yield put({
      type: typeAuths.loginSuccess,
      payload: {
        data,
      },
    });
    yield call(setTokenHeaderMomoService, data.token);
    yield put({type: typePhotos.fetchPhotoList});
  } else {
    // res error
    yield put({
      type: typeAuths.loginFail,
      payload: {
        error: data.error,
      },
    });
  }
}

export const authSagas = [
  takeLatest(typeAuths.login, loginSaga),
  takeEvery(typeAuths.initAuth, initAuthSaga),
  takeEvery(typeAuths.addTokenMomo, addTokenMomoSaga),
];
