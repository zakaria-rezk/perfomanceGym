<template>
  <div>
    <v-container
      style="margin-top: 125px;"
      class="overflow-hidden"
      ><v-row class="no-wrap" v-if="!isloading">
        <productImgs :imgSrc="arr" v-if="arr.length > 0" />

        <productDetails :product="prodcutDetails" />
      </v-row>
      <div style="" class="w-100 text-center" v-else>
        <v-progress-circular
          indeterminate
          color="orange"
          size="250"
        ></v-progress-circular>
      </div>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "~/sotres/Product";
import type { SpecialProduct } from "~/types/SpecialProduct";

definePageMeta({
  layout: "custom",
});
const prodcutDetails = ref<SpecialProduct>();
const isloading = ref<boolean>(true);
const item = ref<SpecialProduct>();
let arr = ref<string[]>([]);
const Product = useUserStore();
onBeforeMount(() => {
  setTimeout(() => {
    isloading.value = false;
  }, 500);
  const route = useRoute();
  item.value = Product.product[`${route.params.Category}`].filter(
    (pro: SpecialProduct) => pro.name === route.params.product
  );
  arr.value = item.value[0].imgs;
  prodcutDetails.value = item.value[0];
});
</script>
