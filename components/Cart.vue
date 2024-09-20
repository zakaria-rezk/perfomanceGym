<template>
  <div class="d-flex justify-start counter-div my-5">
    <CartCounter :conuter="1" @updateCounter="updateCounter" />
    <v-btn
      class="bg-red mx-5"
      size="large"
      rounded
      @click="updateCartQuantity(cartCounter)"
      >Add to cart</v-btn
    >
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "~/sotres/Product";
import { useProductStore } from "~/sotres/ProductSotre";
import type { SpecialProduct } from "~/types/SpecialProduct";
const state = useUserStore();
const cart = useProductStore();
const router = useRouter();
const cartCounter = ref<number>(1);
interface props {
  product: SpecialProduct;
}
const Props = defineProps<props>();
const updateCounter = (payload: number) => {
  cartCounter.value = payload;
};
const updateCartQuantity = (payload: number) => {
  state.updateCartCountity(Props.product, payload);
  const exists = cart.cart.find(
    (pro: SpecialProduct) => pro.name === Props.product.name
  );

  if (!exists) cart.cart.push(Props.product);

  setTimeout(() => {
    router.replace("/cart");
  }, 100);
};
</script>
<style scoped>
.counter-div {
  height: 50px;
}
</style>
