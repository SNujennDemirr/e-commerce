import { create } from 'zustand';

// Favori ürün tipi
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

// Zustand store tipi
interface FavoriteState {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

// Store'u oluştur
export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  favorites: [],

  // Ürün favorilere ekleniyor
  addFavorite: (product) =>
    set((state) => ({
      favorites: [...state.favorites, product],
    })),

  // Ürün favorilerden çıkarılıyor
  removeFavorite: (productId) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== productId),
    })),

  // Favoride olup olmadığını kontrol etmek için
  isFavorite: (productId) =>
    get().favorites.some((item) => item.id === productId),
}));
