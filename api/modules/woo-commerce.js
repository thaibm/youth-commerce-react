import { API } from "../api";
import { AUTH } from "../config";

export const getAllProducts = () => API({
    url: 'wc/v3/products',
    method: 'GET',
    // params: {
    //     consumer_key: AUTH.username,
    //     consumer_secret: AUTH.password
    // }
});
