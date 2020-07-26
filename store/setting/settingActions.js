export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';

export function fetchCurrencySuccess(currency) {
  return {
    type: FETCH_CURRENCY_SUCCESS,
    currency: currency,
  };
}
