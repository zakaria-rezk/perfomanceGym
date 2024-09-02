<template>
  <v-col cols="12" md="6" class="position-relative">
    <div class="d-flex justify-space-arobetween">
      <div class="text-black w-75">
        <v-breadcrumbs
          :items="items"
          class=".v-breadcrumbs-item text-body-2 text-no-wrap"
        >
          <template v-slot:item="{ item, index }">
            <v-breadcrumbs-item v-if="index !== items.length - 1">
              {{ item.title }}
            </v-breadcrumbs-item>
            <v-breadcrumbs-item
              v-else
              class="last-breadcrumb-item text-caption"
            >
              {{ item.title }}
            </v-breadcrumbs-item>
          </template></v-breadcrumbs
        >
        <h1 class="text-no-wrap">{{ Props.product?.name }}</h1>
        <h3>{{ Props.product?.price }} USD</h3>
        <p>
          {{ Props.product?.details }}
        </p>
        <Cart />
      </div>
      <div class="mt-4 swap position-absolute">
        <v-btn variant="text" size="xx-small" class=""
          ><v-icon size="small">mdi-arrow-left</v-icon></v-btn
        >
        <v-btn variant="text" class="" size="xx-small"
          ><v-icon>mdi-view-grid-outline</v-icon></v-btn
        >
        <v-btn size="xx-small" variant="text" class=""
          ><v-icon size="small">mdi-arrow-right</v-icon></v-btn
        >
      </div>
    </div>
  </v-col>
</template>
<script setup lang="ts">
import type { SpecialProduct } from "~/types/SpecialProduct";
interface props {
  product: SpecialProduct | undefined;
}
const Props = defineProps<props>();
onMounted(() => {
  console.log(Props.product.prev);
});
const items = ref<string[]>([
  "home",
  `${Props.product?.category}`,
  `${Props.product?.name}`,
]);
</script>
<style scoped>
.last-breadcrumb-item {
  display: none;
}
.swap {
  right: 0;
  z-index: 55555;
}

/* Show the last breadcrumb item on large screens (e.g., 1024px and up) */
@media (min-width: 768px) {
  .last-breadcrumb-item {
    display: inline-block;
    opacity: 0.5;
  }
}
@media (max-width: 768px) {
 
  .text-no-wrap {
    white-space: wrap !important;
  }
}
</style>
