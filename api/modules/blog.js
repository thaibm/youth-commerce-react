import { API } from "../api";

export const getAllPosts = (perPage = 1, page) => API({
    url: 'wp/v2/posts',
    method: 'GET',
    params: {
        per_page: perPage,
        page
    }
});
