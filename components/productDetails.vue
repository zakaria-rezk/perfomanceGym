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
        <div class="d-flex my-2">
          <div
            class="mx-2 ml-n3"
            v-if="!Props.product?.wishlist"
            @click="loading('wishlist', Props.product)"
          >
            <v-btn
              variant="text"
              size="small"
              :loading="Props.product?.icons.wishlist"
              >Add to wishlist
              <v-icon class="px-4">mdi-heart-outline</v-icon></v-btn
            >
          </div>
          <div v-else class="mx-2 ml-n3">
            <v-btn variant="text" size="small"
              >Broswe wishlist <v-icon class="px-4">mdi-check</v-icon></v-btn
            >
          </div>
          <div
            class="mx-2"
            v-if="!Props.product?.compare"
            @click="loading('compare', Props.product)"
          >
            <v-btn
              variant="text"
              size="small"
              :loading="Props.product?.icons.compare"
              >Compare<v-icon class="px-4" loading="true"
                >mdi-compare-horizontal</v-icon
              ></v-btn
            >
          </div>
          <div v-else class="mx-2 ml-n3">
            <v-btn variant="text" size="small"
              >Compare Products <v-icon class="px-4">mdi-check</v-icon></v-btn
            >
          </div>
        </div>
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
        <nuxt-link
          :to="{
            name: 'ProductCategory-category',
            params: { category: 'SHOP' },
          }"
          color="black"
          class="shop-link"
          ><v-icon>mdi-view-grid-outline</v-icon></nuxt-link
        >
        <p class="position-absolute shop text-caption bg-black rounded">
          Back to shop
        </p>

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
import { useProductStore } from "~/sotres/ProductSotre";
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
const productStore = useProductStore();
const loading = (val: string, pro: SpecialProduct) => {
  switch (val) {
    case "compare":
      pro.icons.compare = true;
      setTimeout(() => {
        pro.compare = true;
        const exists = productStore.compare.find(
          (payload: SpecialProduct) => pro.name === payload.name
        );
        if (!exists) productStore.compare.push(pro);
        pro.icons.compare = false;
        router.replace("/compare");
      }, 1000);
      break;
    case "wishlist":
      pro.icons.wishlist = true;
      setTimeout(() => {
        pro.wishlist = true;
        const exists = productStore.wishlist.find(
          (payload: SpecialProduct) => pro.name === payload.name
        );
        if (!exists) productStore.wishlist.push(pro);
        pro.icons.wishlist = false;
        router.replace("/wishlist");
      }, 1000);
      break;
  }
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
.shop {
  background-color: black;

  top: -20px;
  right: 80%;
  transform: translate(100%);
  white-space: nowrap;
  display: none;
}
.shop-link {
  color: black;
}
.shop-link:hover + .shop {
  display: inline !important;
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
