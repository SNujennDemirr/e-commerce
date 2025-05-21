// hooks/useProducts.ts
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api'; // API'den ürün verilerini çeken servis

// API'den gelecek ürünlerin veri yapısını tanımlıyoruz
export interface Product {
  id: number;
  title: string;
  price: number; // API'den gelen veri number olarak gelir, ekranda string'e   NEDEEN ? 
  description: string;
  images: string[];
}

// useProducts adında özel bir hook oluşturuyoruz
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);             // Tüm ürünleri saklar array de tutar 
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Filtrelenmiş ürünler
  const [loading, setLoading] = useState(true);                        // Yüklenme durumu
  const [searchQuery, setSearchQuery] = useState('');                 // Kullanıcının yazdığı arama metni

  // Sayfa yüklendiğinde ürünleri API'den çeker
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();    // API'den ürünleri çek
      setProducts(data);                     // Tüm ürünleri kaydet
      setFilteredProducts(data);             // Filtrelenmiş ürün listesine de ata
      setLoading(false);                     // Yüklenme tamam
    };

    getProducts();
  }, []);

  // Arama inputu değiştiğinde çalışır (debounce uygulanır)
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      // Girilen arama 2 karakterden azsa tüm ürünleri göster
      if (searchQuery.length < 2) {
        setFilteredProducts(products);
        return;
      }

     
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, 500); // 500ms debounce süresi

    // Yeni karakter girildikçe eski zamanlayıcı temizlenir
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, products]);

  // Dışarıdan çağrıldığında arama sorgusunu güncelleyen fonksiyon
  const handleSearch = (query: string) => {
    setSearchQuery(query); // Kullanıcının inputunu güncelle
  };

  // Hook dışa açılırken bu veriler döndürülür
  return {
    products: filteredProducts, // Arama sonrası gösterilecek ürünler
    loading,                    // Yüklenme durumu
    onSearch: handleSearch      // Arama fonksiyonu (component'ten tetiklenir)
  };
};





