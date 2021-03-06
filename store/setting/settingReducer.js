import {
  FETCH_CURRENCY_SUCCESS,
  FETCH_CURRENCY_POSITION_SUCCESS,
  FETCH_SETTINGS_PENDING,
  FETCH_SETTINGS_ERROR,
  FETCH_SETTINGS_SUCCESS,
  FETCH_PAYMENT_GATEWAYS_SUCCESS,
} from './settingActions';

const initialState = {
  pending: false,
  error: null,
  currency: null,
  currencyPosition: '',
  paymentGateways: []
};

export const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SETTINGS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SETTINGS_ERROR:
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    case FETCH_SETTINGS_SUCCESS:
      return {
        ...state,
        pending: false,
      };
    case FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        currency: action.currency,
      };
    case FETCH_CURRENCY_POSITION_SUCCESS:
      return {
        ...state,
        currencyPosition: action.position,
      };
    case FETCH_PAYMENT_GATEWAYS_SUCCESS:
      return {
        ...state,
        paymentGateways: action.paymentGateways,
      };
    default:
      return state;
  }
};
