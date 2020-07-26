import { FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_POSITION_SUCCESS } from "./settingActions";

const initialState = {
  currency: null,
  currencyPosition: '',
};

export const settingReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
