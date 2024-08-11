<template>
  <div class="d-none d-lg-flex">
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-spacer></v-spacer>
    <div class="d-flex mx-2" justify="start">
      <p class="mt-4 mx-2">Show:</p>
      <v-btn
        v-for="item in itemsPerPage"
        :key="item"
        variant="plain"
        class="mx-1"
        width="25"
        size="sm"
        >{{ item }}</v-btn
      >
    </div>
    <div class="d-flex mx-5" justify="start">
      <v-btn size="sm" variant="plain">
        <v-icon>mdi-view-grid-outline</v-icon></v-btn
      >
      <v-btn class="mx-1" size="sm" variant="plain">
        <v-icon size="large">mdi-view-module-outline</v-icon></v-btn
      >
      <v-btn class="mx-1" size="md" variant="plain">
        <v-icon size="large">mdi-view-comfy</v-icon></v-btn
      >
    </div>
    <div class="d-flex select" justify="start" width="500">
      <v-select
        class="mt-3"
        density="compact"
        label="Sort"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="outlined"
      ></v-select>
    </div>
  </div>
</template>
<script setup lang="ts">
const itemsPerPage = ref<number[]>([9, 12, 18, 24]);
interface props {
  routeParams: string;
}
const Props = defineProps<props>() as props;
const items = ref<string[]>(["ProductCategory", Props.routeParams]);
</script>
<style scoped>
.select {
  width: 120px;
  height: 50px !important;
}
</style>
