<template>
  <div>
    <div
      v-for="pro in Props.products"
      :key="pro.name"
      class="icons bg-grey-lighten-5 elevation-1 position-absolute d-flex flex-column justify-space-around flex-column-end"
    >
      <div v-if="!pro.compare">
        <v-btn
          class="compare"
          variant="text"
          :loading="pro.icons.compare"
          @click="loading('compare', pro)"
        >
          <v-icon size="x-large" class="">mdi-compare-horizontal</v-icon></v-btn
        >
        <p class="position-relative icon-link bg-black text-compare ml-n3">
          Compare
        </p>
      </div>
      <div v-else>
        <v-btn
          @click="router.replace('/compare')"
          class="compare"
          variant="text"
        >
          <v-icon size="x-large">mdi-check</v-icon></v-btn
        >
        <p class="position-relative icon-link bg-black text-compare ml-n3">
          Compare Products
        </p>
      </div>
      <div>
        <v-btn
          class="search"
          :loading="pro.icons.quickview"
          variant="text"
          @click="loading('quickview', pro)"
        >
          <v-icon size="x-large" class="view">mdi-magnify </v-icon></v-btn
        >
        <p class="position-relative icon-link bg-black ml-n4 px-2 text-search">
          Quick View
        </p>
      </div>
      <div v-if="!pro.wishlist">
        <v-btn
          :loading="pro.icons.wishlist"
          class="wishlist"
          variant="text"
          @click="loading('wishlist', pro)"
        >
          <v-icon size="x-large">mdi-heart-outline</v-icon></v-btn
        >
        <p
          class="position-relative text-wishlist icon-link bg-black ml-n4 px-2"
        >
          Add to wishlist
        </p>
      </div>
      <div v-if="pro.wishlist && !Props.wishlist">
        <v-btn
          @click="router.replace('/wishlist')"
          class="position-relative wishlist"
          variant="text"
        >
          <v-icon size="x-large">mdi-check</v-icon></v-btn
        >
        <p
          class="position-relative text-wishlist icon-link bg-black ml-n4 px-2"
        >
          Browse wishlist
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from "~/sotres/ProductSotre";
const productStore = useProductStore();
const router = useRouter();
import type { SpecialProduct } from "~/types/SpecialProduct";
interface props {
  products: SpecialProduct[] | undefined;
}
const Props = defineProps<props>();
const modela = ref<boolean>(false);

const loading = (val: string, pro: SpecialProduct) => {
  switch (val) {
    case "compare":
      pro.icons.compare = true;
      setTimeout(() => {
        pro.compare = true;
        const exists = productStore.wishlist.find(
          (payload: SpecialProduct) => pro.name === payload.name
        );
        if (!exists) productStore.compare.push(pro);
        pro.icons.compare = false;
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
      }, 1000);
      break;
    case "quickview":
      pro.icons.quickview = true;
      setTimeout(() => {
        modela.value = true;
        pro.icons.quickview = false;
        pro.quickview = true;
      }, 500);
      break;
  }
};
</script>

<style scoped>
.col {
  background-color: rgb(252, 252, 252);
  cursor: pointer;
  position: relative;
  transition: all 0.5s;
  z-index: 0;
}

.col:hover {
  position: relative;
  background-color: #fff;
  transform: scaleY(1.1);
  box-shadow: 100px black;
  z-index: 10;
}
.icons {
  display: none !important;
  width: 60px !important;
}
.text-compare,
.text-wishlist,
.text-search {
  opacity: 0;
}
.text-wishlist {
}
.compare:hover + .text-compare,
.search:hover + .text-search,
.wishlist:hover + .text-wishlist {
  opacity: 1 !important;
}
.product-icons {
  top: 50px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 50px;
  border-radius: 10px;
  opacity: 1;
}

.icon-link {
  left: 80px;
  top: -25px;
  border-radius: 5px;
  width: fit-content;
  white-space: nowrap;
  font-size: 14px;
}

.btn {
  height: 50px;
  border-radius: 30px;
}
.wishlistbnt {
  position: relative;
  top: -5px;
}
.col:hover .icons {
  display: flex !important;
  animation: left2right 0.3s ease-in-out forwards;
}
.col:hover .details {
  display: inline !important;
}
.icon {
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.5s;
}
.custom-checkbox:hover {
  cursor: pointer;
}
.cart {
  transform: translateY(10px);
  transition: all 0.5s;
}
button:hover .icon {
  transform: translateY(-50%);
  opacity: 1;
}
button:hover .cart {
  transform: translateY(100%);
  opacity: 0;
}
@keyframes left2right {
  from {
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
