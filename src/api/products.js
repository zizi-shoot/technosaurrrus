import axios from 'axios';
import { API_URL } from '@/config';

export const loadProductsData = (params) => axios.get(`${API_URL}/products`, { params });

export const loadOneProductData = (id) => axios.get(`${API_URL}/products/${id}`);

export const loadColorsData = () => axios.get(`${API_URL}/colors`);

export const loadCategoriesData = () => axios.get(`${API_URL}/productCategories`);
