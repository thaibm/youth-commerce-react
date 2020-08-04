export const FETCH_SETTINGS_PENDING = 'FETCH_SETTINGS_PENDING';
export const FETCH_SETTINGS_ERROR = 'FETCH_SETTINGS_ERROR';
export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_POSITION_SUCCESS = 'FETCH_CURRENCY_POSITION_SUCCESS';
export const FETCH_SETTINGS_SUCCESS = 'FETCH_SETTINGS_SUCCESS';
export const FETCH_PAYMENT_GATEWAYS_SUCCESS = 'FETCH_PAYMENT_GATEWAYS_SUCCESS';

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

export function fetchPaymentGatewaysSuccess(paymentGateways) {
  return {
    type: FETCH_PAYMENT_GATEWAYS_SUCCESS,
    paymentGateways: paymentGateways,
  };
}

export function fetchSettingsSuccess() {
  return {
    type: FETCH_SETTINGS_SUCCESS,
  };
}

export function fetchSettingsPending() {
  return {
    type: FETCH_SETTINGS_PENDING,
  };
}

export function fetchSettingsError(error) {
  return {
    type: FETCH_SETTINGS_ERROR,
    error: error,
  };
}
