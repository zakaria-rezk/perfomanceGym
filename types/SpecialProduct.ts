export type SpecialProduct = {
  id: number;
  name: string;
  price: number;
  imgs: [string];
  category: string;
  details: string;
  isHot: boolean;
  OnSale: boolean;
  InStock: boolean;
  offer: string | null;
  quickview:boolean,
  icons: {
    quickview: boolean;
    compare: boolean;
    wishlist: boolean;
  };
};
