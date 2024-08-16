<template>
  <div>
    <p class="text-uppercase my-5">filter by price</p>
    <v-range-slider
      color="red"
      v-model="value"
      :max="props.maxPrice"
      :min="props.minPrice"
      :step="10"
      strict
    ></v-range-slider>
    <div class="d-flex mb-10">
      <p>Price {{ priceMin }} from to {{ priceMax }} $</p>
      <v-btn @click="search" class="mx-4 my-n1">search</v-btn>
    </div>
    <v-divider></v-divider>

    <h2 class="mt-2">Status Stock</h2>
    <div class="d-flex mt-n4">
      <v-label class="text-caption">On Stock </v-label>
      <v-checkbox
        @change="onStockQuery('onstock')"
        v-model="onstock"
        class="mt-4 mx-n1"
        style="transform: scale(0.8)"
        color="red"
      ></v-checkbox>
    </div>
    <div class="d-flex mt-n5">
      <v-label class="d-block text-caption">On Sale </v-label>
      <v-checkbox
        @change="onSaleQuery('onsale')"
        v-model="onsale"
        class="mt-n5 mx-1"
        style="transform: scale(0.8)"
        color="red"
      ></v-checkbox>
    </div>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
const route = useRoute();
interface prop {
  minPrice: number;
  maxPrice: number;
}
const props = defineProps<prop>();
const value = ref<number[]>([
  +(route.query.minprice as string) || 0,
  +(route.query.maxprice as string) || 100,
]);

const onstock = ref<boolean>(route.query.onstock === "true");
const onsale = ref<boolean>(route.query.onsale === "true");
const priceMin = computed(() => Math.floor(value.value[0]));
const priceMax = computed(() => Math.floor(value.value[1]));
onMounted(() => {
  console.log();
  nextTick(() => {
    value.value = [
      +(route.query.minprice as string) || props.minPrice,
      +(route.query.maxprice as string) || props.maxPrice,
    ];
  });
});
const search = () => {
  router.push({
    query: {
      ...route.query,
      minprice: priceMin.value,
      maxprice: priceMax.value,
    },
  });
};

const onStockQuery = (val: string) => {
  if (onstock.value) {
    addQuery(val);
  } else deleteQuery(val);
};
const onSaleQuery = (val: string) => {
  if (onsale.value) {
    addQuery(val);
  } else deleteQuery(val);
};

const deleteQuery = (val: string) => {
  const query = { ...route.query };
  delete query[val];
  router.replace({ query: query });
};

const addQuery = (val: string) => {
  router.push({
    query: {
      ...route.query,
      [val]: true.toString(),
    },
  });
};
</script>
