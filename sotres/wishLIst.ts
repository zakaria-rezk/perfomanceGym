import { defineStore } from "pinia";

import type { SpecialProduct } from "~/types/SpecialProduct";
export const useWishlistStore = defineStore("wishlist", {
  state: (): { wishlist: SpecialProduct[] } => ({
    wishlist: [],
  }),
});
