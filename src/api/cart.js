import axios from 'axios';
import { API_URL } from '@/config';

export const loadCartData = (params) => axios.get(`${API_URL}/baskets`, { params });

export const addProduct = (payload, params) => axios.post(`${API_URL}/baskets/products`, payload, { params });

export const updateProduct = (payload, params) => axios.post(`${API_URL}/baskets/products`, payload, { params });

export const deleteProduct = (data, params) => axios.delete(`${API_URL}/baskets/products`, { data, params });
