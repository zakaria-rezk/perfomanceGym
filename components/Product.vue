<template>
  <v-row>
    <v-col
      v-for="pro in Props.products"
      :key="pro.name"
      :cols="Props.smCOLS"
      :md="Props.mdCOLS"
      class="position-relative col"
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
      <div
        class="d-flex justify-space-between wishlistbnt"
        v-if="Props.wishlist"
      >
        <label>
          <input
            type="checkbox"
            class="custom-checkbox"
            v-model="pro.selected"
            @click="
              pro.selected = !pro.selected;
              emit('select', pro);
            "
          />
        </label>

        <v-btn variant="text" size="x-small" @click="emit('removeProduct',pro)">remove ❌</v-btn>
      </div>
      <div class="">
        <div
          class="position-absolute product-icons d-flex flex-column align-center"
        >
          <div>
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
          </div>
          <div>
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
          </div>
          <div v-if="!pro.wishlist">
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
          <div v-if="pro.wishlist && !Props.wishlist">
            <v-btn
              @click="router.replace('/wishlist')"
              class="wishlist"
              variant="plain"
            >
              <v-icon size="x-large">mdi-check</v-icon></v-btn
            >
            <p class="position-relative icon-link bg-black px-2 text-wishlist">
              Browse wishlist
            </p>
          </div>
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
            class="ma-3"
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
import { useWishlistStore } from "~/sotres/wishLIst";
const Wishlist = useWishlistStore();
const router = useRouter();
import type { SpecialProduct } from "~/types/SpecialProduct";
interface props {
  products: SpecialProduct[] | undefined;
  mdCOLS: number;
  smCOLS: number;
  wishlist: boolean;
}
const Props = defineProps<props>();
const emit = defineEmits<{
  (event: "select", payload: SpecialProduct): void;
  (event: "removeProduct", payload: SpecialProduct): void;
}>();
const modela = ref<boolean>(false);

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
        pro.wishlist = true;
        const exists = Wishlist.wishlist.find(
          (payload: SpecialProduct) => pro.name === payload.name
        );
        if (!exists) Wishlist.wishlist.push(pro);
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
@import "~/assets/style/Hot&Offer.css";
.wishlist {
  position: relative;
  left: 22px;
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
  top: 50px;
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
  white-space: nowrap;
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
  box-shadow: 100px black;
  z-index: 10;
}
.btn {
  height: 50px;
  border-radius: 30px;
}
.wishlistbnt {
  position: relative;
  top: -5px;
}
.col:hover .details {
  display: block !important;
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
