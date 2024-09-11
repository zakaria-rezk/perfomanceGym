<template>
  <div>
    <CartPageTitle />
    <v-container
      ><v-row
        ><v-col cols="12" md="6">
          <p class="text-h4 text-grey my-5">Your Invoice</p>
          <v-form>
            <div class="w-100 d-flex">
              <div class="w-50 pa-2">
                <p for="first name">
                  First Name <span class="text-orange-accent-4">*</span>
                </p>
                <input
                  label="first name"
                  class="w-100 border-md h-100 rounded-xl"
                />
              </div>
              <div class="w-50 pa-2">
                <p for="first name">
                  Last Name <span class="text-orange-accent-4">*</span>
                </p>
                <input
                  label="first name"
                  class="w-100 border-md h-100 rounded-xl"
                />
              </div>
            </div>
            <div class="pa-2">
              <p for="first name ">
                Company Name(optional)
                <span class="text-orange-accent-4">*</span>
              </p>
              <input
                label="first name"
                class="w-100 border-md h-100 rounded-xl"
              />
            </div>
            <div class="pa-2">
              <p for="first name ">
                City <span class="text-orange-accent-4">*</span>
              </p>
              <input
                label="first name"
                class="w-100 border-md h-100 rounded-xl"
              />
            </div>
            <div class="pa-2">
              <p for="first name ">
                Street <span class="text-orange-accent-4">*</span>
              </p>
              <input
                label="first name"
                class="w-100 border-md h-100 rounded-xl"
              />
            </div>
            <div class="pa-2">
              <p for="first name ">
                Phone <span class="text-orange-accent-4">*</span>
              </p>
              <input
                label="first name"
                class="w-100 border-md h-100 rounded-xl"
              />
            </div>
            <div class="pa-2">
              <p for="first name ">
                ZIP Code <span class="text-orange-accent-4">*</span>
              </p>
              <input
                label="first name"
                class="w-100 border-md h-100 rounded-xl"
              /></div
          ></v-form>
          <v-btn class="w-100 bg-orange-accent-4" @click="submit"
            >Complate Payment</v-btn
          ></v-col
        >
        <v-col cols="12" md="6"
          ><v-card class="mx-2 bg-grey-lighten-3 my-5"
            ><h1 class="text-center my-5">Your Order</h1>
            <div class="rounded eveletion-5 bg-grey-lighten-5">
              <div class="proWrap">
                <p class="name">name</p>
                <p class="price">price</p>
              </div>
              <v-divider></v-divider>
              <div class="proWrap">
                <p class="name">name</p>
                <p class="price">price</p>
              </div>
              <v-divider></v-divider>
              <div class="proWrap">
                <p class="name">name</p>
                <p class="price">price</p>
              </div>
              <v-divider></v-divider>
              <div class="proWrap">
                <p class="name">name</p>
                <p class="price">price</p>
              </div>
              <v-divider></v-divider>
            </div>
            <div class="radio">
              <v-radio-group class="my-5" v-model="payment">
                <v-radio label="Paypal" value="paypal"></v-radio>
                <v-radio label="Stripe" value="strip"></v-radio>
              </v-radio-group>
            </div>
            <stripe-checkout
              ref="checkoutRef"
              mode="payment"
              :pk="publishableKey"
              :line-items="lineItems"
              :success-url="successURL"
              :cancel-url="cancelURL"
              @loading="(v) => (loading = v)" /></v-card
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from "~/sotres/ProductSotre";

const publishableKey =
  "pk_test_51PxfmTRqTO26FYa43jk6sUkOtj1XGmwGPGX2H3UcIe1ki2Laizy82L7bWrT3aGndduIggaolgbpEzEABSUIFIROD00rvXctMtJ";
const loading = ref<boolean>(false);
const lineItems = ref([
  {
    price: "price_1PxgJNRqTO26FYa4Ne3h0IKh", // The id of the one-time price you created in your Stripe dashboard
    quantity: 1,
  },
]);
const successURL = ref<string>("http://localhost:3000/cart");
const cancelURL = ref<string>("http://localhost:3000/wishlist");
const checkoutRef = ref<HTMLDivElement>();

const submit = () => {
  if (!checkoutRef.value) return;
  checkoutRef.value.redirectToCheckout();
};
const payment = ref<string>();
definePageMeta({
  middleware: [
    function () {
      const productStore = useProductStore();
      if (productStore.cart.length === 0) return navigateTo("/cart");
    },
  ],
});
onMounted(() => {});
</script>
<style scoped>
.text-field {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
}
.proWrap {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 1rem;
}
input {
  height: 40px !important;
}
</style>
