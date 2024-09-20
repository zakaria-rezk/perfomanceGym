<template>
  <div>
    <v-card class="mx-2 bg-grey-lighten-3 my-5 "
      ><h1 class="text-center my-5">Your Order</h1>
      <div class="rounded eveletion-5 bg-grey-lighten-5">
        <div v-for="(pro, index) in productStore.cart" :key="index">
          <div class="proWrap text-md-body-1 text-caption">
            <p class="name">{{ pro.name }} × {{ pro.cartQuanity }}</p>
            <p class="price text-orange-accent-4">
              {{ pro.price * pro.cartQuanity }} USD
            </p>
          </div>
          <v-divider></v-divider>
        </div>
        <div class="proWrap text-md-body-1 text-caption">
          <p class="name text-uppercase">The total</p>
          <p class="price text-orange-accent-4">{{ totlalPrice }} USD</p>
        </div>
      </div>
      <div class="radio">
        <v-radio-group class="my-5" v-model="selectedPaymentMethod">
          <v-radio
            label="Paypal(Not available)"
            value="paypal"
            disabled
          ></v-radio>
          <v-radio label="Stripe" value="stripe"></v-radio>
        </v-radio-group>
      </div>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from "~/sotres/ProductSotre";
import type { SpecialProduct } from "~/types/SpecialProduct";
const selectedPaymentMethod = ref<string>("stripe");
const totlalPrice = computed(() => {
  let chargeCost = 20;
  let price = 0;
  productStore.cart.forEach(
    (pro: SpecialProduct) => (price += pro.price * pro.cartQuanity)
  );
  return price + chargeCost;
});
const productStore = useProductStore();
</script>
<style scoped>
.proWrap {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 1rem;
  white-space: nowrap;
}
</style>
