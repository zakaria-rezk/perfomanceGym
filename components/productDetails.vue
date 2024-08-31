<template>
  <v-col cols="12" md="6">
    <div class="d-flex justify-space-around">
      <div class="text-black w-75">
        <v-breadcrumbs :items="items" class=".v-breadcrumbs-item">
          <template v-slot:item="{ item, index }">
            <v-breadcrumbs-item v-if="index !== items.length - 1">
              {{ item.title }}
            </v-breadcrumbs-item>
            <v-breadcrumbs-item v-else class="last-breadcrumb-item">
              {{ item.title }}
            </v-breadcrumbs-item>
          </template></v-breadcrumbs
        >
        <h1>sdfdsfdsaf</h1>
        <h3>1500 sud</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quasi
          voluptatibus, labore dolores maxime veniam eius nobis? Facere optio
          vel, quidem recusandae adipisci commodi nostrum voluptate perspiciatis
          repellat, explicabo quos!
        </p>
        <Cart />
      </div>
      <div class="mt-4">
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
const items = ref<string[]>(["home", "wheyPortain", "mokka"]);
</script>
<style scoped>
.last-breadcrumb-item {
  display: none;
}

/* Show the last breadcrumb item on large screens (e.g., 1024px and up) */
@media (min-width: 768px) {
  .last-breadcrumb-item {
    display: inline-block;
    opacity: 0.5;
  }
}
</style>
