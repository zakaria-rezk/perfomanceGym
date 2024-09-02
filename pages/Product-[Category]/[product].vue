<template>
  <div>
    <v-container style="margin-top: 125px"
      ><v-row class="no-wrap">
        <productImgs :imgSrc="arr" v-if="arr.length > 0" />

        <productDetails
          :name="prodcutDetails[0]"
          :price="prodcutDetails[1]"
        /> </v-row
    ></v-container>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "~/sotres/Product";

import type { SpecialProduct } from "~/types/SpecialProduct";

definePageMeta({
  layout: "custom",
});
const prodcutDetails = ref<[string, number]>(["", 0]);
const item = ref<SpecialProduct>();
let arr = ref<string[]>([]);
const Product = useUserStore();
onBeforeMount(() => {
  const route = useRoute();
  console.log(route.params.Category);
  item.value = Product.product[`${route.params.Category}`].filter(
    (pro: SpecialProduct) => pro.name === route.params.product
  );
  arr.value = item.value[0].imgs;
  prodcutDetails.value[0] = item.value[0].name;
  prodcutDetails.value[1] = item.value[0].price;
  console.log(prodcutDetails.value);
});
</script>
