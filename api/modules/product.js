import { API } from "../api";

export const getAllProducts = (params) => API({
    url: 'wc/v3/products',
    method: 'GET',
    params
});
