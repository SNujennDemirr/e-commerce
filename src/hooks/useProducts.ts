import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api'; // API'den ürün verilerini çeken servis

// API'den gelecek ürünlerin veri yapısını tanımlıyoruz
export interface Product {
  id: number;
  title: string;
  price: number; // api den gelen veri number home da stringe dönşütürlmeli 
  description: string;
  images: string[];
}

// useProducts adında özel bir hook oluşturuyoruz
export const useProducts = () => {
  // Tüm ürünleri saklamak için state
  const [products, setProducts] = useState<Product[]>([]);

  // Arama sonucu filtrelenmiş ürünleri saklamak için state
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Veri çekilirken loading spinner göstermek için state
  const [loading, setLoading] = useState(true);

  // Sayfa yüklendiğinde ürünleri API'den çeker
  useEffect(() => {
    const getProducts = async () => {
      // API'den veri çekiyoruz
      const data = await fetchProducts();

      // Hem tüm ürünlere hem filtrelenmiş listeye atıyoruz (ilk başta aynı)
      setProducts(data);
      setFilteredProducts(data);

      // Yükleme tamamlandı, artık spinner'ı gizleyebiliriz
      setLoading(false);
    };

    getProducts(); // fonksiyonu çağırıyoruz
  }, []);

  // Arama kutusundan gelen sorguya göre filtreleme yapar
  const handleSearch = (query: string) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered); // filtrelenmiş veriyi state'e yaz
  };

  // Hook dışa açılırken gerekli değerler döndürülüyor
  return {
    products: filteredProducts, // filtrelenmiş ürünler
    loading,                    // yüklenme durumu
    onSearch: handleSearch      // arama fonksiyonu
  };
};
