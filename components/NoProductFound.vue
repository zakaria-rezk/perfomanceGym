<template>
  <v-col
    ><v-icon class="w-100 custom-icon text-grey-lighten-2" size="xxx-large"
      >mdi-cart</v-icon
    >
    <p class="text-uppercase text-h4 text-md-h1">.this cart is empty</p>
    <p class="text-h4 text-grey-lighten-1 text-uppercase text-h4 text-md-h4">
      You don't have any products in the cart yet.
    </p>
    <p class="text-h6 text-grey-lighten-1 text-uppercase text-h6 text-md-h4">
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
</template>
<script setup lang="ts">
const router = useRouter();
</script>
<style scoped>
.custom-icon {
  font-size: 250px !important;
}
@media (max-width: 425px) {
  .custom-icon {
    font-size: 150px !important;
  }
}
</style>
