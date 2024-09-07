<template>
  <div>
    <pageTitle
      ><div
        class="position-absolute W-100 d-none d-lg-flex list bg-transparent list text-center text-h6"
      >
        <nuxt-link
          to="/"
          class="text-decoration-none text-grey-lighten-2 d-flex px-1"
          >Home <span class="mx-2"> / </span></nuxt-link
        >
        <p class="text-grey-lighten-1">{{ route.name }}</p>
      </div>
    </pageTitle>
    <v-container v-if="productStore.compare.length === 0">
      <v-row class="text-center">
        <v-col
          ><v-icon class="w-100 custom-icon text-grey-lighten-2" size=""
            >mdi-compare-horizontal</v-icon
          >
          <p class="text-uppercase text-h4 text-md-h1">compare list is empty</p>
          <p class="text-body-1 text-md-h4 text-grey-lighten-1">
            No products added in the compare list. You must add some products to
            compare them.
          </p>
          <p class="text-grey-lighten-1 text-body-1 text-md-h4">
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
      </v-row></v-container
    >

    <v-table class="ma-5" v-else>
      <tbody>
        <tr>
          <td></td>
          <td
            v-for="pro in productStore.compare"
            :key="pro.name"
            class="text-body-1 pa-4"
          >
            <div>
              <v-btn
                size=""
                variant="text"
                class="text-balck"
                @click="removeProducts(pro)"
                >remove</v-btn
              >
            </div>
            <img :src="pro.imgs[0]" alt="" :width="trWidth" class="img" />
            <p class="ma-1">{{ pro.name }}</p>

            <p class="ma-1">{{ pro.price }}USD</p>
            <v-btn class="bg-orange">Add to cart</v-btn>
          </td>
        </tr>
        <tr class="pa-4">
          <td style="vertical-align: bottom" class="text-h6 pa-4">
            Description
          </td>
          <td
            v-for="pro in productStore.compare"
            :key="pro.name"
            class="text-body-2 pa-4"
          >
            {{ pro.details }}
          </td>
        </tr>
        <tr class="">
          <td style="vertical-align: bottom" class="text-h6 pa-4">
            Availabilty
          </td>
          <td v-for="pro in productStore.compare" :key="pro.name">
            {{ pro.InStock ? "Available in stock ✅" : "Out of stock ❌" }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
import { useProductStore } from "~/sotres/ProductSotre";
import type { SpecialProduct } from "~/types/SpecialProduct";
const route = useRoute();
const productStore = useProductStore();
const trWidth = computed(() => 1000 / productStore.compare.length);
const removeProducts = (payload: SpecialProduct) => {
  productStore.compare = productStore.compare.filter((pro: SpecialProduct) => {
    return pro.name !== payload.name;
  });
};
onMounted(() => {
  const productStore = useProductStore();
  console.log(productStore.compare);
  console.log(trWidth.value);
});
</script>
<style scoped>
.custom-icon {
  font-size: 250px !important;
}
.parent {
  overflow-x: scroll;
}
.img {
  min-width: 100px;
  max-width: 300px;
}
.compersion {
}
.list {
  top: 70%;

  left: 50%;

  transform: translate(-80%, -50%);
}
@media (max-width: 425px) {
  .custom-icon {
    font-size: 150px !important;
  }
}
</style>
