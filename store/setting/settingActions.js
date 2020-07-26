export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_POSITION_SUCCESS = 'FETCH_CURRENCY_POSITION_SUCCESS';

export function fetchCurrencySuccess(currency) {
  return {
    type: FETCH_CURRENCY_SUCCESS,
    currency: currency,
  };
}

export function fetchCurrencyPositionSuccess(position) {
  return {
    type: FETCH_CURRENCY_POSITION_SUCCESS,
    position: position,
  };
}
