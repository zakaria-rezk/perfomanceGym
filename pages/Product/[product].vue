<template>
  <div>
    <v-container style="margin-top: 115px"
      ><v-row>
        <v-col cols="6" class="d-md-flex justify-end">
          <div class="d-flex flex-column">
            <img
              src="/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png"
              alt=""
              class="my-2"
            />
            <img
              src="/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png"
              alt=""
            />
          </div>
          <div class="position-relative d-flex align-center m-">
            <v-btn variant="text" class="mr-n16"
              ><v-icon>mdi-arrow-left</v-icon></v-btn
            >
            <img
              src="/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png"
              alt=""
              class="my-2 mx-5 mainImg"
            />
            <v-btn variant="text" class="ml-n16"
              ><v-icon>mdi-arrow-right</v-icon></v-btn
            >
          </div> </v-col
        ><v-col cols="6" class="">
          <div class="d-flex justify-space-between">
            <div class="text-black mx-15">
              <v-breadcrumbs :items="items"></v-breadcrumbs>
              <h1>sdfdsfdsaf</h1>
              <h3>1500 sud</h3>
              <Cart />
            </div>
            <div class="mt-4">
              <v-btn variant="text" size="xx-small" class="mx-1"
                ><v-icon size="small">mdi-arrow-left</v-icon></v-btn
              >
              <v-btn variant="text" class="mx-1" size="xx-small"
                ><v-icon>mdi-view-grid-outline</v-icon></v-btn
              >
              <v-btn size="xx-small" variant="text" class="mx-1"
                ><v-icon size="small">mdi-arrow-right</v-icon></v-btn
              >
            </div>
          </div>
        </v-col>
        </v-row
    ></v-container>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
const items = ref<string[]>(["home", "wheyPortain", "mokka"]);

onMounted(() => {
  const router = useRouter();
  console.log(router);
});
</script>
<style scoped>
.mainImg {
  height: 100vh;
}
</style>
