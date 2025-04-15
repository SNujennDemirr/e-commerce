// src/services/api.ts
import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Ürünleri çekerken hata:', error);
    return [];
  }
};
