<template>
  <div>
    <v-container style="margin-top: 125px"
      ><v-row class="overflow-hidden no-wrap">
        <productImgs />
        <productDetails /> </v-row
    ></v-container>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "~/sotres/Product";
import type { product } from "~/types/Product";
import type { SpecialProduct } from "~/types/SpecialProduct";

definePageMeta({
  layout: "custom",
});
const item = ref<SpecialProduct>();
const product = useUserStore();
onMounted(() => {
  const route = useRoute();
 
  console.log(item.value);
});
</script>
