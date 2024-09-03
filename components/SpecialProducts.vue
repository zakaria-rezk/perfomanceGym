<template>
  <v-container class="position-relative my-10" >
    <SectionTitle title="special" SectionContent="FEATURED PRODUCTS" />
    <Product :products="data" :mdCOLS="3" />
  </v-container>
</template>
<script setup lang="ts">
const data = useFetchData();
</script>

