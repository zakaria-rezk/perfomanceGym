<template>
  <div>
    <pageTitle
      ><div
        class="position-absolute W-100 d-none d-lg-flex list bg-transparent text-center text-h6"
      >
        <nuxt-link
          to="/"
          class="text-decoration-none text-grey-lighten-2 d-flex px-1"
          >Home <span class="mx-2"> / </span></nuxt-link
        >
        <p class="text-grey-lighten-1">{{ route.name }}</p>
      </div>
    </pageTitle>
    <v-container>
      <v-row class="text-center">
        <v-col v-if="productStore.wishlist.length === 0"
          ><v-icon
            class="w-100 custom-icon text-grey-lighten-2"
            size="xxx-large"
            >mdi-heart-outline</v-icon
          >
          <p class="text-uppercase text-h4 text-md-h1">
            .this wishlist is empty
          </p>
          <p
            class="text-h4 text-grey-lighten-1 text-uppercase text-h4 text-md-h4"
          >
            You don't have any products in the wishlist yet.
          </p>
          <p
            class="text-h6 text-grey-lighten-1 text-uppercase text-h6 text-md-h4"
          >
            You will find a lot of interesting products on our "Shop" page.
          </p>
          <v-btn
            class="bg-red mx-5 my-5 text-uppercase"
            size="large"
            rounded
            @click="router.push('/ProductCategory/SHOP')"
            >Go to shop</v-btn
          ></v-col
        >
        <v-col v-else>
          <div class="position-relative">
            <p class="text-h6 text-{md}-h4">your wishlist product</p>
            <v-divider></v-divider>
            <div
              class="d-flex justify-end bg-grey-lighten-3 bar"
              v-if="bar"
              ref="barcontainer"
            >
              <v-btn variant="text" @click="selectAll" v-if="!allSeltected"
                >Select all ✅</v-btn
              >
              <v-btn variant="text" @click="desSelectAll" v-else
                >DesSelect all ✅</v-btn
              >
              <v-btn variant="text" @click="removeProducts">Remove ❌</v-btn>
            </div>
            <Product
              :smCOLS="6"
              :mdCOLS="4"
              :products="productStore.wishlist"
              :wishlist="true"
              class="my-10"
              @select="select"
              @removeProduct="removeProduct"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from "~/sotres/ProductSotre";
import type { SpecialProduct } from "~/types/SpecialProduct";
const productStore = useProductStore();
const bar = ref<boolean>();
const barcontainer = ref<HTMLDivElement>();
const allSeltected = ref<boolean>(false);
const route = useRoute();
const router = useRouter();
const removeProduct = (payload: SpecialProduct) => {
  productStore.wishlist = productStore.wishlist.filter(
    (pro: SpecialProduct) => pro.name !== payload.name
  );
};
const selectAll = () => {
  allSeltected.value = true;
  productStore.wishlist.forEach((pro: SpecialProduct) => {
    pro.selected = true;
  });
};
const desSelectAll = () => {
  allSeltected.value = false;
  bar.value = false;
  productStore.wishlist.forEach((pro: SpecialProduct) => {
    pro.selected = false;
  });
};
const removeProducts = () => {
  productStore.wishlist = productStore.wishlist.filter(
    (pro: SpecialProduct) => {
      return pro.selected !== true;
    }
  );
};
const select = (payload: SpecialProduct) => {
  bar.value = false;
  allSeltected.value = true;
  console.log(productStore.wishlist);
  productStore.wishlist.forEach((pro: SpecialProduct) => {
    if (pro.selected) {
      bar.value = true;
    } else {
      allSeltected.value = false;
      return;
    }
  });
};
onMounted(() => {});
</script>
<style scoped>
.bar {
  animation: bar 0.5s ease forwards;
  transform: translateY(10px);
  transition: all 0.5s;
  height: 100%;
}
.icon {
  position: absolute;
  top: -50px;
}
.custom-icon {
  font-size: 250px !important;
}
.list {
  top: 70%;

  left: 50%;

  transform: translate(-80%, -50%);
}
@media (max-width:425px) {
  .custom-icon {
  font-size: 150px !important;
}
  
}
@keyframes bar {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(10px);
    opacity: 1;
  }
}
</style>
