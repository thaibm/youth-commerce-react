import { API } from "../api";

export const getAllPosts = () => API({
    url: 'wp/v2/posts',
    method: 'GET'
});
