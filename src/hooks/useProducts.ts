// hooks/useProducts.ts
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };

    getProducts();
  }, []);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchQuery.length < 2) {
        setFilteredProducts(products);
        return;
      }

      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, products]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return {
    products: filteredProducts,
    loading,
    onSearch: handleSearch
  };
};
