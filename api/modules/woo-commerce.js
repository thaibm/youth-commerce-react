import { API } from "../api";
import { AUTH } from "../config";

export const getAllProducts = (params) => API({
    url: 'wc/v3/products',
    method: 'GET',
    params
});

export const getCurrentCurrency = () => API({
    url: 'wc/v3/data/currencies/current',
    method: 'GET'
});
