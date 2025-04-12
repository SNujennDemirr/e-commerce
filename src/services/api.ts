import axios from 'axios';

// Fake API URL'ini buraya ekleyin
const BASE_URL = 'https://api.example.com/products'; 

// Ürünleri çeken fonksiyon
export const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // API'den gelen veriyi döndür
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
