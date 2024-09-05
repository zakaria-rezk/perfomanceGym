<template>
  <div>
    <div class="d-flex justify-center w-100">
      <h1 class="text-uppercase">
        <span class="text-red">gym</span> accessories
      </h1>
    </div>
    <v-container fluid class="my-10 bg-grey-lighten-4">
      <Product :mdCOLS="3" :products="data" :smCOLS="12"  :wishlist="false"/>
      <!-- <img src="/assets/imges/products/Accessories/4126XBijESL._AC_SL1500_-313x300.jpg" alt=""> -->
    </v-container>
    <div class="d-flex justify-center w-100">
      <v-btn class="bg-orange-accent-4" variant="flat">show all</v-btn>
    </div>
  </div>
</template>
<script setup lang="ts">
const data = useGymAccessoires();

</script>
