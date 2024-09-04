<template>
  <div class="d-none d-lg-flex">
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-spacer></v-spacer>
    <div class="d-flex mx-2" justify="start">
      <p class="mt-4 mx-2">Show:</p>
      <v-btn-toggle>
        <v-btn
          v-for="item in itemsPerPage"
          :key="item"
          variant="plain"
          class="mx-1"
          width="25"
          size="sm"
          >{{ item }}</v-btn
        ></v-btn-toggle
      >
    </div>
    <div class="d-flex mx-5" justify="start">
      <v-btn size="sm" variant="plain" @click="colPerPage(6)">
        <v-icon>mdi-view-grid-outline</v-icon></v-btn
      >
      <v-btn class="mx-1" size="sm" variant="plain" @click="colPerPage(4)">
        <v-icon size="large">mdi-view-module-outline</v-icon></v-btn
      >
      <v-btn class="mx-1" size="md" variant="plain" @click="colPerPage(3)">
        <v-icon size="large">mdi-view-comfy</v-icon></v-btn
      >
    </div>
    <div class="d-flex select" justify="start">
      <v-select
        class="mt-3"
        density="compact"
        label="Sort"
        v-model="selectedSort"
        :items="['Popularity', 'Hightest to Low', 'low to Heightest', 'Date']"
        variant="outlined"
      ></v-select>
    </div>
  </div>
</template>
<script setup lang="ts">
const { addQuery } = useRouteQuery();
const route = useRoute();
const selectedSort = ref<string>(route.query.search as string);
watch(selectedSort, (newVale: string = "Date") => {
  addQuery("search", newVale);
});
const fireEmit = (num: number) => {
  emits("controlPageCol", num);
};

const colPerPage = (colSize: number) => {
  fireEmit(colSize);
  addQuery("per_row", colSize);
};
const itemsPerPage = ref<number[]>([9, 12, 18, 24]);
const emits = defineEmits<{
  (event: "controlPageCol", payload: number): void;
}>();
interface props {
  routeParams: string | string[];
}
const Props = defineProps<props>();
const items = ref<string[]>(["Home", Props.routeParams as string]);
</script>
<style scoped>
.select {
  width: 200px;
  height: 50px !important;
}
</style>
