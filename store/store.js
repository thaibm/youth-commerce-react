import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { settingReducer } from './setting/settingReducer';
import { cartReducer } from './cart/cartReducer';
import { productReducer } from './product/productReducer';
const initState = {};
const rootReducer = combineReducers({
  cartReducer,
  productReducer,
  settingReducer,
});

export const initStore = (initialState = initState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
