// place combine all reducers
import {combineReducers} from 'redux';

// import productReducer from "./product.reducers";
import authReducer from '@features/auth/redux/auth.reducer';
import photoReducer from '@features/photo/redux/photo.reducer';

const rootReducer = combineReducers({
  // products: productReducer,
  auth: authReducer,
  photo: photoReducer,
});

export default rootReducer;
