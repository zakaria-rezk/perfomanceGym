<template>
  <v-container class="position-relative my-10">
    <SectionTitle title="special" SectionContent="FEATURED PRODUCTS" />
    <Product :products="data" :mdCOLS="3" :smCOLS="6" :wishlist="false" />
  </v-container>
</template>
<script setup lang="ts">
const data = useFetchData();
</script>
