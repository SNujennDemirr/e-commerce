// src/store/cart.ts
import { create } from 'zustand';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
}

type NewCartItem = Omit<CartItem, 'quantity'>;

interface CartStore {
  cartItems: CartItem[];
  addToCart: (item: NewCartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],

  addToCart: (item) => {
    const existing = get().cartItems.find((i) => i.id === item.id);
    if (existing) {
      set({
        cartItems: get().cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },

  removeFromCart: (id) =>
    set({ cartItems: get().cartItems.filter((i) => i.id !== id) }),

  clearCart: () => set({ cartItems: [] }),

  // Adeti 1 artır
  increaseQuantity: (id) => {
    set({
      cartItems: get().cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  },

  // Adeti 1 azalt ama 1'in altına düşürme
  decreaseQuantity: (id) => {
    set({
      cartItems: get().cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ),
    });
  },
}));
