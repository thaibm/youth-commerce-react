import axios from 'axios';
import { BASE_URL } from './config';

const API = axios.create({
	baseURL: BASE_URL,
	timeout: 30000,
	headers: { 'Content-Type': 'multipart/form-data' }
});

// TODO
// Request interceptors
API.interceptors.request.use(
	(config) => {
		//   if (UserModule.token) {
		//   }
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

// TODO
// Response interceptors
API.interceptors.response.use(
	(response) => {
		if (Math.floor(response.status / 100) !== 2) {
			return Promise.reject(new Error(response.statusText || 'Error'));
		} else {
			return response;
		}
	},
	(error) => {
		return Promise.reject(error.response);
	}
);

export {
	API
}
