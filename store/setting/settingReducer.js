import { FETCH_CURRENCY_SUCCESS } from "./settingActions";

const initialState = {
  currency: null,
  currencyPosition: '',
};

export const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        pending: false,
        currency: action.currency,
      };
    default:
      return state;
  }
};
