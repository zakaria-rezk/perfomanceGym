import { defineStore } from "pinia";

import type { SpecialProduct } from "~/types/SpecialProduct";
export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    wishlist: [] as SpecialProduct[],
    compare: [] as SpecialProduct[],
  }),
});
