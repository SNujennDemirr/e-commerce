import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api'; // API'den ürün verilerini çeken servis 

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

interface PriceFilter {
  min?: number;
  max?: number;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState<PriceFilter>({});

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
      let filtered = products;

      if (searchQuery.length >= 2) {
        filtered = filtered.filter((product: Product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (priceFilter.min !== undefined) {
        filtered = filtered.filter((product: Product) => product.price >= priceFilter.min!);
      }

      if (priceFilter.max !== undefined) {
        filtered = filtered.filter((product: Product) => product.price <= priceFilter.max!);
      }

      setFilteredProducts(filtered);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, priceFilter, products]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Fiyat filtresi uygulamak için dışarıdan çağrılacak fonksiyon 
  // veriyi yönetir filtreleme olayı 
  const handleFilter = (min: number, max: number) => {
    setPriceFilter({ min, max });
  };

  return {
    products: filteredProducts,
    loading,
    onSearch: handleSearch,
    onFilter: handleFilter,
  };
};
