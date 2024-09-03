<template>
  <v-col cols="12" md="6" class="position-relative">
    <div class="d-flex justify-space-arobetween">
      <div class="text-black w-75">
        <v-breadcrumbs
          :items="items"
          class=".v-breadcrumbs-item text-body-2 text-no-wrap"
        >
          <template v-slot:item="{ item, index }">
            <v-breadcrumbs-item v-if="index !== items.length - 1">
              {{ item.title }}
            </v-breadcrumbs-item>
            <v-breadcrumbs-item
              v-else
              class="last-breadcrumb-item text-caption"
            >
              {{ item.title }}
            </v-breadcrumbs-item>
          </template></v-breadcrumbs
        >
        <h1 class="text-no-wrap">
          {{ Props.product?.name }}
        </h1>
        <h3>{{ Props.product?.price }} USD</h3>
        <p>
          {{ Props.product?.details }}
        </p>
        <Cart />
      </div>
      <div class="mt-4 swap position-absolute">
        <v-btn
          variant="text"
          size="small"
          class="no-hover-effect"
          @mouseenter="prepairprev = true"
          @mouseleave="prepairprev = false"
          @click="goBack"
          ><v-icon size="small" class="mr-n5">mdi-arrow-left</v-icon></v-btn
        >
        <v-btn variant="text" class="" size="xx-small"
          ><v-icon>mdi-view-grid-outline</v-icon></v-btn
        >
        <v-btn
          size="small"
          variant="text"
          class="mx-n1 no-hover-effect"
          @mouseenter="prepairnext = true"
          @mouseleave="prepairnext = false"
          @click="moveForward"
          ><v-icon size="small" class="ml-n5">mdi-arrow-right</v-icon></v-btn
        >

        <nuxt-link
          :to="{
            name: 'Product-Category-product',
            params: {
              Category: nextProduct?.category,
              product: nextProduct?.name,
            },
          }"
          @mouseenter="prepairnext = true"
          @mouseleave="prepairnext = false"
          v-if="prepairnext"
          class="product position-absolute bg-white d-flex elevation-1 text-decoration-none"
        >
          <div v-if="nextProduct?.imgs[0]" class="pa-1">
            <img
              :src="nextProduct?.imgs[0]"
              alt=""
              width="100px"
              height="120px"
              class="rounded"
            />
          </div>
          <div class="d-flex flex-column flex-grow-1 text-caption my-2">
            <p>{{ nextProduct?.name }}</p>
            <p>{{ nextProduct?.price }} USD</p>
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="prepairprev"
          :to="{
            name: 'Product-Category-product',
            params: {
              Category: prevProduct?.category,
              product: prevProduct?.name,
            },
          }"
          @mouseenter="prepairprev = true"
          @mouseleave="prepairprev = false"
          class="product position-absolute bg-white d-flex elevation-1 text-decoration-none"
        >
          <div v-if="prevProduct?.imgs[0]" class="pa-1">
            <img
              :src="prevProduct?.imgs[0]"
              alt=""
              width="100px"
              height="120px"
              class="rounded"
            />
          </div>
          <div class="d-flex flex-column flex-grow-1 text-caption my-2">
            <p>{{ prevProduct?.name }}</p>
            <p>{{ prevProduct?.price }} USD</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </v-col>
</template>
<script setup lang="ts">
import { useUserStore } from "~/sotres/Product";
import type { SpecialProduct } from "~/types/SpecialProduct";
const router = useRouter();
interface props {
  product: SpecialProduct | undefined;
}
const Props = defineProps<props>();
const nextProduct = ref<SpecialProduct>();
const prevProduct = ref<SpecialProduct>();
const prepairnext = ref<boolean>(false);
const prepairprev = ref<boolean>(false);
const items = ref<string[]>([
  "home",
  `${Props.product?.category}`,
  `${Props.product?.name}`,
]);
const moveForward = () => {
  router.push({
    name: "Product-Category-product",
    params: {
      Category: nextProduct.value?.category,
      product: nextProduct.value?.name,
    },
  });
};
const goBack = () => {
  router.push({
    name: "Product-Category-product",
    params: {
      Category: prevProduct.value?.category,
      product: prevProduct.value?.name,
    },
  });
};
onMounted(() => {
  const store = useUserStore();
  nextProduct.value = store.product[`${Props.product?.next.category}`].filter(
    (pro: SpecialProduct) => pro.name === Props.product?.next.name
  )[0];
  prevProduct.value = store.product[`${Props.product?.prev.category}`].filter(
    (pro: SpecialProduct) => pro.name === Props.product?.prev.name
  )[0];

});
</script>
<style scoped>
.last-breadcrumb-item {
  display: none;
}
.swap {
  right: 0;
  z-index: 55555;
}
.product {
  right: 2px;
  width: 220px;
  height: 150px;
  border-radius: 10px;
}
.no-hover-effect:hover {
  background-color: transparent !important;
  box-shadow: none !important;
}
/* Show the last breadcrumb item on large screens (e.g., 1024px and up) */
@media (min-width: 1280px) {
  .last-breadcrumb-item {
    display: inline-block;
    opacity: 0.5;
  }
}
@media (max-width: 768px) {
  .text-no-wrap {
    white-space: wrap !important;
  }
}
</style>
