<template>
  <v-row>
    <v-col
      v-for="pro in Props.products"
      :key="pro.id"
      cols="12"
      :md="Props.mdCOLS"
      class="col"
    >
      <ModalQuickView
        class="text-center"
        :imgSrc="pro.imgs[0]"
        :ProName="pro.name"
        :ProPrice="pro.price"
        :ProCategory="pro.category"
        @closeModal="pro.quickview = false"
        v-if="pro.quickview"
      />

      <div>
        <div
          class="position-absolute product-icons d-flex flex-column align-center"
        >
          <v-btn
            class="compare"
            variant="plain"
            :loading="pro.icons.compare"
            @click="loading('compare', pro)"
          >
            <v-icon size="x-large" class=""
              >mdi-compare-horizontal</v-icon
            ></v-btn
          >
          <p
            class="position-relative icon-link bg-black text-compare ml-n7 px-2"
          >
            compare
          </p>
          <v-btn
            class="search"
            :loading="pro.icons.quickview"
            variant="plain"
            @click="loading('quickview', pro)"
          >
            <v-icon size="x-large" class="view">mdi-magnify </v-icon></v-btn
          >
          <p
            class="position-relative icon-link bg-black ml-n5 px-2 text-search"
          >
            Quick View
          </p>
          <v-btn
            :loading="pro.icons.wishlist"
            class="wishlist"
            variant="plain"
            @click="loading('wishlist', pro)"
          >
            <v-icon size="x-large">mdi-heart-outline</v-icon></v-btn
          >
          <p class="position-relative icon-link bg-black px-2 text-wishlist">
            Add to wishlist
          </p>
        </div>
        <nuxt-link
          :to="{
            name: 'Product-Category-product',
            params: { Category: pro.category, product: pro.name },
          }"
          class="text-decoration-none text-black"
        >
          <LzyLoadingImg
            :src="pro.imgs[0]"
            alt="pro.alt"
            :object="true"
            :hot="pro.isHot"
          />
          <p class="offers" v-if="pro.offer">{{ pro.offer }}</p>
          <div class="text-right">
            <p>{{ pro.name }}</p>
            <p>{{ pro.category }}</p>
            <p>{{ pro.price }} USD</p>
          </div>
        </nuxt-link>
      </div>
      <v-btn class="btn w-100 h bg-orange-accent-4"
        ><div>
          <p class="cart">add to cart</p>
          <v-icon class="icon">mdi-cart-outline</v-icon>
        </div></v-btn
      >
      <hr class="w-100" />
      <div class="details">
        <p>{{ pro.details }}</p>
      </div>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
interface props {
  products: SpecialProduct[];
  mdCOLS: number;
}
const Props = defineProps<props>();
const modela = ref<boolean>(false);

import type { SpecialProduct } from "~/types/SpecialProduct";
const loading = (val: string, pro: SpecialProduct) => {
  switch (val) {
    case "compare":
      pro.icons.compare = true;
      setTimeout(() => {
        pro.icons.compare = false;
      }, 1000);
      break;
    case "wishlist":
      pro.icons.wishlist = true;
      setTimeout(() => {
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
.offers {
  position: absolute;
  color: #fff;
  bottom: 300px;
  right: 10px;
  background-color: rgb(255, 187, 0);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  padding-top: 13px;
}
.text-compare,
.text-wishlist,
.text-search {
  opacity: 0;
}
.compare:hover + .text-compare,
.search:hover + .text-search,
.wishlist:hover + .text-wishlist {
  opacity: 1 !important;
}
.product-icons {
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 50px;
  border-radius: 10px;
  opacity: 0;
}
.col:hover .product-icons {
  animation: left2right 0.3s ease-in-out forwards;
}
.icon-link {
  left: 80px;
  top: -25px;
  border-radius: 5px;
  width: fit-content;
  text-wrap: nowrap;
  font-size: 14px;
}
.details {
  margin: 1px;
  position: absolute;
  z-index: 10000;
  display: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  left: 0;
  background-color: rgb(252, 249, 249);
  border-radius: 0 0 10px 10px;
  transition: all 0.5s;
}
.position-relative {
  position: sticky;
}
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
  z-index: 10;
}
.btn {
  height: 50px;
  border-radius: 30px;
}
.col:hover .details {
  display: block !important;
}

.icon {
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.5s;
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
