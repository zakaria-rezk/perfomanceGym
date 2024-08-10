<template>
  <div>
    <p class="text-uppercase my-5">filter by price</p>
    <v-range-slider
      color="red"
      v-model="value"
      strict
     
    ></v-range-slider>
    <div class="d-flex mb-10">
      <p>Price {{ priceMin }} from to {{ priceMax }} $</p>
      <v-btn class="mx-4 my-n1">search</v-btn>
    </div>
    <v-divider></v-divider>
    <h2 class="mt-2">Status Stock</h2>
    <div class="d-flex mt-n4">
      <v-label class="text-caption">On Stock </v-label>
      <v-checkbox
        v-model="onStock"
        class="mt-4 mx-n1"
        style="transform: scale(0.8)"
        color="red"
      ></v-checkbox>
    </div>
    <div class="d-flex mt-n5">
      <v-label class="d-block text-caption">On Sale </v-label>
      <v-checkbox
        v-model="onSale"
        class="mt-n5 mx-1"
        style="transform: scale(0.8)"
        color="red"
      ></v-checkbox>
    </div>
  </div>
</template>
<script setup lang="ts">
const value = ref<number[]>([25, 100]);
const onStock = ref<boolean>(false);
const onSale = ref<boolean>(false);
const priceMin = computed(() => Math.floor(value.value[0]));
const priceMax = computed(() => Math.floor(value.value[1]));
watch(value, (newValue: number[], oldValue: number[]) => {
  console.log(newValue);
  console.log(oldValue);
});
</script>
