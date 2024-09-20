<template>
  <div class="position-relative">
    <div><MobileNavHeadline title="shohpping cart" /></div>

    <div
      v-if="store.cart.length > 0"
      class="d-flex flex-column justify-space-between container"
    >
      <div
        class="d-flex justify-space-between my-2"
        v-for="(pro, index) in store.cart"
        :key="index"
      >
        <div>
          <img
            :src="pro.imgs[0]"
            alt=""
            class="rounded-xl"
            width="80"
            height="100"
          />
          <v-divider class="w-100"></v-divider>
        </div>
        <div class="my-2 mx-1">
          <p class="text-body-2">{{ pro.name }}</p>
          <p class="text-orange-accent-4">
            {{ pro.price }} USD
            <span class="text-grey">x {{ pro.cartQuanity }}</span>
          </p>
        </div>
        <div class="">
          <v-btn @click="removePro(pro)" variant="text"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </div>
      </div>
      <div class="btns align-self-end">
        <v-btn class="w-100 my-2" @click="router.replace('/cart')">
          view cart</v-btn
        >
        <v-btn
          class="w-100 bg-orange-accent-4"
          @click="router.replace('/checkout')"
        >
          compate checkout</v-btn
        >
      </div>
    </div>
    <div class="text-center h-100 w-100 my-10" v-else>
      <v-icon size="" class="icon">mdi-cart-remove</v-icon>
      <p>NO PRODUCT FOUNDED</p>
      <v-btn
        class="bg-red mx-5 my-5 text-uppercase"
        size="large"
        rounded
        @click="router.push('/ProductCategory/SHOP')"
        >Go to shop</v-btn
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from "~/sotres/ProductSotre";
import type { SpecialProduct } from "~/types/SpecialProduct";
const store = useProductStore();

const removePro = (payload: SpecialProduct) => {
  store.cart = store.cart.filter(
    (pro: SpecialProduct) => pro.name != payload.name
  );
};
const router = useRouter();
</script>
<style scoped>
.icon {
  font-size: 100px !important;
}
</style>
