<template>
  <div>
    <CartPageTitle />
    <v-container>
      <div>
        <Warn
          text="You Cann't go to checkout while your cart is empty"
          class="my-4"
          v-if="navigationWarn"
        />
      </div>
      <v-row
        v-if="productStore.cart.length > 0"
        class="d-flex flex-column flex-md-row"
      >
        <v-col cols="12" md="9">
          <v-table class="">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pro in productStore.cart" :key="pro.name">
                <td>
                  <v-btn variant="text" size="small" @click="removeProduct(pro)"
                    ><v-icon>mdi-close</v-icon></v-btn
                  >
                </td>
                <td>
                  <img :src="pro.imgs[0]" width="100" alt="" />
                </td>
                <td>{{ pro.name }}</td>
                <td>{{ pro.price }}</td>
                <td>
                  <CartCounter
                    :conuter="pro.cartQuanity"
                    @updateCounter="
                      (newQuantity) => updateProductQuantity(pro, newQuantity)
                    "
                  />
                </td>

                <td>{{ pro.cartQuanity * pro.price }}</td>
              </tr>
              <v-divider></v-divider>
            </tbody>
          </v-table>
          <v-btn @click="updateTotal" class="w-100 bg-orange-accent-4 my-2"
            >Upadte Cart</v-btn
          >
        </v-col>
        <v-col cols="12" md="3">
          <div class="position-relative">
            <div ref="progress" class="position-absolute progress display-none">
              <v-progress-circular indeterminate></v-progress-circular>
            </div>
            <div ref="parent">
              <v-card class="pa-3 border w-100"
                ><p class="text-h6">Shopping Cart Total</p>
                <div class="d-flex justify-space-between my-2 text-body-1">
                  <p>Total</p>
                  <p class="text-grey">{{ totalPrice }} USD</p>
                </div>
                <v-divider></v-divider>
                <div
                  class="shopping d-flex justify-space-between align-center py-2"
                >
                  <p>Shopping</p>
                  <div>
                    <p>Order Price:20</p>
                    <p>Order to :</p>
                    <button
                      variant="text"
                      class="text-orange-accent-4"
                      @click="loactionvisibality()"
                    >
                      Change Order
                    </button>
                    <div v-if="location" class="location" ref="locationDiv">
                      <v-select
                        :items="['Option 1', 'Option 2', 'Option 3']"
                        label="Country"
                        density="compact"
                        class="rounded"
                      ></v-select>
                      <v-select
                        :items="['Cairo', 'Option 2', 'Option 3']"
                        label="City"
                        density="compact"
                      ></v-select>
                      <v-text-field
                        label="Enter Zip Code"
                        density="compact"
                        placeholder="Type something..."
                        class="rounded"
                      ></v-text-field>
                    </div>
                  </div>
                </div>
                <v-divider></v-divider>
                <div class="d-flex justify-space-between my-2">
                  <p class="text-h6">The total</p>
                  <p class="text-orange-accent-4 boold">
                    {{ totalPrice + 20 }} USD
                  </p>
                </div>
                <v-btn class="w-100 bg-orange-accent-4" @click="updateTotal"
                  >Complate Order</v-btn
                ></v-card
              >
            </div>
          </div></v-col
        >
      </v-row>
      <v-row v-else class="text-center">
        <NoProductFound />
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from "~/sotres/ProductSotre";
import type { SpecialProduct } from "~/types/SpecialProduct";
const navigationWarn = ref<boolean>(false);
const parent = ref<any>(null);
const progress = ref<HTMLDivElement>();
const location = ref<boolean>(false);
const locationDiv = ref<HTMLDivElement>();
const removeProduct = (payload: SpecialProduct) => {
  productStore.cart = productStore.cart.filter(
    (pro: SpecialProduct) => pro.name !== payload.name
  );
};
const totalPrice = ref<number>(0);

const productStore = useProductStore();

const updateProductQuantity = (payload: SpecialProduct, counter: number) => {
  payload.cartQuanity = counter;
};
const loactionvisibality = () => {
  if (!location.value) {
    location.value = !location.value;
    locationDiv.value?.classList.add("slide-downup");
    setTimeout(() => {
      locationDiv.value?.classList.remove("slide-downup");
    }, 500);
  } else {
    locationDiv.value?.classList.add("slide-topdown");
    setTimeout(() => {
      location.value = !location.value;
      locationDiv.value?.classList.remove("slide-topdown");
    }, 500);
  }
};
const updateTotal = () => {
  if (!parent.value || !progress.value) return;
  parent.value?.classList.add("opictiy");

  progress.value.classList.remove("display-none");
  setTimeout(() => {
    parent.value?.classList.remove("opictiy");
    progress.value?.classList.add("display-none");
    totalPrice.value = 0;
    productStore.cart.forEach((el: SpecialProduct) => {
      totalPrice.value += el.cartQuanity * el.price;
    });
  }, 500);
};
onBeforeRouteLeave((to: any, from: any, next: any) => {
  if (to.name === "checkout" && productStore.cart.length === 0) {
    navigationWarn.value = true;
    next(false);
  } else next(true);
});
</script>
<style scoped>
.location {
  flex-direction: column;
  transition: all 1s;
}
.slide-downup {
  animation: slide-downup 1s ease;
}
.slide-topdown {
  animation: slide-topdown 1s ease;
}
.opictiy {
  opacity: 0.3;
}
.display-none {
  display: none !important;
}
.progress {
  top: 50%;
  left: 50%;
  z-index: 1111;
}

.router-link-active,
.router-link-exact-active {
  text-decoration: underline !important;
  text-decoration-color: orange !important;
}
@keyframes slide-downup {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-topdown {
  from {
    opacity: 1;
    transform: translateY(0%);
  }
  to {
    opacity: 0;
    transform: translateY(-20%);
  }
}
</style>
