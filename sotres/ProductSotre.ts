import { defineStore } from "pinia";

import type { SpecialProduct } from "~/types/SpecialProduct";
export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    wishlist: [] as SpecialProduct[],
    compare: [] as SpecialProduct[],
    cart: [
      {
        id: 3,
        name: "SHAKER 70ML",
        price: 200,
        imgs: [
          "/_nuxt/assets/imges/products/Accessories/Picsart_24-01-26_08-44-09-221-1024x1536.png",
          "/_nuxt/assets/imges/products/Accessories/Picsart_24-01-26_08-45-13-217-1024x1536.png",
        ],
        category: "Accessories",
        details:
          "Lorem ipsum is placeholder text commonly used in the graphic.",
        isHot: false,
        offer: false,
        OnSale: true,
        InStock: true,
        quickview: false,
        compare: false,
        selected: false,
        wishlist: false,
        icons: {
          quickview: false,
          compare: false,
          wishlist: false,
          cart: false,
        },
        cartQuanity: 0,
        next: {
          name: "BULK GAINER VANILLA 4KG",
          category: "WeightGainerCarbs",
        },
        prev: {
          name: "WHEY STROPERRY CHEESE CAKE 1kg",
          category: "WheyProtain",
        },
      },
    ] as SpecialProduct[],
    navWarn: false as boolean,
  }),
});
