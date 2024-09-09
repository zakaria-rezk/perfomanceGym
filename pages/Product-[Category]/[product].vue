<template>
  <div>
    <v-container style="margin-top: 125px" class="overflow-hidden"
      ><v-row class="no-wrap" v-if="!isloading">
        <productImgs
          :imgSrc="arr"
          :offer="prodcutDetails?.offer"
          :hot="prodcutDetails?.isHot"
          v-if="arr.length > 0"
        />
        <productDetails :product="prodcutDetails" />
      </v-row>
      <div style="" class="w-100 text-center" v-else>
        <v-progress-circular
          indeterminate
          color="orange"
          size="250"
        ></v-progress-circular>
      </div>
    </v-container>
    <v-container class="position-relative my-10 text-center">
      <SectionTitle title="Related" SectionContent="Related Products" />
      <div ref="productContainer">
        <Product
          :products="Products"
          :mdCOLS="3"
          :smCOLS="6"
          class="d-none d-md-flex"
          :wishlist="false"
        />
        <Product
          :products="ProductSm"
          :mdCOLS="3"
          class="d-flex d-md-none"
          :smCOLS="6"
          :wishlist="false"
        />
      </div>
      <button
        size="10"
        density="compact"
        variant="text"
        color="black"
        class="my-4 mx-2 d-none d-md-inline"
        :disabled="selected"
        :class="{ grey: selected }"
        @click="swap(1)"
      >
        O
      </button>
      <button
        size="10"
        density="compact"
        variant="text"
        color="black"
        class="my-4 mx-2 d-none d-md-inline"
        :class="{ grey: !selected }"
        :disabled="!selected"
        @click="swap(2)"
      >
        O
      </button>
      <button
        size="10"
        density="compact"
        variant="text"
        color="black"
        class="my-4 mx-2 d-md-none d-inline"
        :disabled="selected"
        :class="{ grey: selected }"
        @click="swap(1)"
      >
        O
      </button>
      <button
        size="10"
        density="compact"
        variant="text"
        color="black"
        class="my-4 mx-2 d-md-none d-inline"
        :class="{ grey: !selected }"
        :disabled="!selected"
        @click="swap(2)"
      >
        O
      </button>
    </v-container>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
import { useUserStore } from "~/sotres/Product";
import type { SpecialProduct } from "~/types/SpecialProduct";
const selected = ref<boolean>(false);
const productContainer = ref<HTMLDivElement>();
const data = useFetchData();
const Products = ref<SpecialProduct[]>(data.slice(0, 4));
const ProductSm = ref<SpecialProduct[]>(data.slice(0, 2));

const prodcutDetails = ref<SpecialProduct>();
const isloading = ref<boolean>(true);
const item = ref<SpecialProduct>();

let arr = ref<string[]>([]);

const swap = (goToPage: number) => {
  if (goToPage === 1) moveRight();
  else moveLeft();
};
const moveRight = () => {
  if (!productContainer.value) return;
  selected.value = !selected.value;
  productContainer.value?.classList.remove("right2center");
  productContainer.value.classList.add("center2right");
  setTimeout(() => {
    Products.value = data.slice(4, 8);
    ProductSm.value = data.slice(6, 8);
    console.log(Products.value);
    productContainer.value?.classList.remove("center2right");
    productContainer.value?.classList.add("left2center");
  }, 300);
};
const moveLeft = () => {
  if (!productContainer.value) return;
  console.log("moveleft");
  selected.value = !selected.value;
  productContainer.value?.classList.remove("left2center");
  productContainer.value.classList.add("center2left");
  setTimeout(() => {
    Products.value = data.slice(0, 4);
    ProductSm.value = data.slice(0, 2);
    console.log(Products.value);
    productContainer.value?.classList.remove("center2left");
    productContainer.value?.classList.add("right2center");
  }, 300);
};
onBeforeMount(() => {
  setTimeout(() => {
    isloading.value = false;
  }, 500);
  const route = useRoute();
  const Product = useUserStore();
  item.value = Product.product[`${route.params.Category}`].filter(
    (pro: SpecialProduct) => pro.name === route.params.product
  );
  arr.value = item.value[0].imgs;
  prodcutDetails.value = item.value[0];
  console.log(prodcutDetails.value?.isHot);
});
</script>
<style scoped>
@import "~/assets/style/left&rightAnimation.css";

.no-hover-effect:hover {
  background-color: transparent !important;
  box-shadow: none !important;
}
.grey {
  color: gray;
}
</style>
