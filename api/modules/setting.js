import { API } from "../api";

export const getCurrentCurrency = () => API({
    url: 'wc/v3/data/currencies/current',
    method: 'GET'
});

export const getCurrencyPosition = () => API({
    url: 'wc/v3/settings/general/woocommerce_currency_pos',
    method: 'GET'
});

export const getPaymentGateways = () => API({
    url: 'wc/v3/payment_gateways',
    method: 'GET'
});
