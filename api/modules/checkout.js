import { API } from "../api";

export const createOrder = (payload) => {
    return API({
        url: 'wc/v3/orders',
        method: 'POST',
        data: payload,
    });
}
