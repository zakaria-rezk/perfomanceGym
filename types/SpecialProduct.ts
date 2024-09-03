import type { BlobOptions } from "buffer";

export type SpecialProduct = {
  id: number;
  name: string;
  price: number;
  imgs: string[];
  category: string;
  details: string;
  isHot: boolean;
  OnSale: boolean;
  InStock: boolean;
  offer: string | boolean;
  quickview: boolean;
  icons: {
    quickview: boolean;
    compare: boolean;
    wishlist: boolean;
  };
  next: {
    name: string;
    category: string;
  };
  prev: {
    name: string;
    category: string;
  };
};
