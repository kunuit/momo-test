import {all} from '@redux-saga/core/effects';
import {authSagas} from '@src/features/auth/redux/auth.saga';
import {photoSagas} from '@src/features/photo/redux/photo.saga';

function* rootSaga() {
  yield all([...authSagas, ...photoSagas]);
}

export default rootSaga;
