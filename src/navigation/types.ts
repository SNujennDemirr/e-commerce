// types.ts  navigasyonun yol haritası hangi sayfa var, o sayfaya giderken bir şey gönderilecek mi?
export type RootStackParamList = {
  Home: undefined;
  ProductDetail: { productId: string };
  ShoppingCart: undefined;
  Favorites: undefined; 
};