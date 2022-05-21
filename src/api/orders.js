import { API_URL } from '@/config';
import axios from 'axios';

export const sendOrder = (data, params) => axios.post(`${API_URL}/orders`, data, { params });

export const loadOrder = (id, params) => axios.get(`${API_URL}/orders/${id}`, { params });
