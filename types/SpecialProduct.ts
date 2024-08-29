export type SpecialProduct = {
  id: number;
  quickview:boolean,
  name: string;
  price: number;
  img: string;
  category: string;
  details: string;
  isHot: boolean;
  OnSale: boolean;
  InStock: boolean;
  offer: string | null;
  icons: {
    quickview: boolean;
    compare: boolean;
    wishlist: boolean;
  };
};
