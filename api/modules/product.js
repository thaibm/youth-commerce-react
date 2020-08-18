import { API } from "../api";

export const getAllProducts = (params) => API({
    url: 'wc/v3/products',
    method: 'GET',
    params
});

export const getProductById = (id) => API({
    url: `wc/v3/products/${id}`,
    method: 'GET'
});
