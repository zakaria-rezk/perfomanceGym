<template>
  <div>
    <div class="text-center container d-flex position-relative">
      <img
        src="/assets/imges/sport-page-title.jpg"
        width="100%"
        height="60vh"
        alt=""
      />
      <p
        class="text-md-h2 text-h3 position-absolute title text-white my-4 w-100"
      >
        {{ route.params.category }}
      </p>

      <v-list
        rounded
        class="position-absolute W-100 d-none d-lg-flex list bg-transparent"
      >
        <v-list-item
          v-for="item in RouterItems"
          :key="item"
          class="my-n2 w-200 rounded-xl pa-5"
        >
          <nuxt-link
            :to="item"
            class="text-white text-h6 text-decoration-none py-5"
            >{{ item }}
          </nuxt-link>
        </v-list-item>
      </v-list>
      <v-list class="routelist text-white bg-transparent d-lg-none">
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item class="bg-transparent w-100" v-bind="props"
              ><v-list-item-title class="bg-transparent"
                >Categrouis</v-list-item-title
              >
            </v-list-item>
          </template>
          <v-list-item
            v-for="item in RouterItems"
            :key="item"
            class="my-n2 py-n4 bg-grey-darken-3"
          >
            <nuxt-link
              :to="item"
              class="text-white text-md-h6 text-subtitle-1 text-decoration-none"
              >{{ item }}
            </nuxt-link></v-list-item
          ></v-list-group
        ></v-list
      >
    </div>
    <v-container>
      <v-row>
        <v-col cols="3" class="bg-">
          <FilterProducts />
        </v-col>
        <v-col cols="9">
          <div class="d-flex">
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
            <div class="d-flex select" justify="start" width="100">
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const items = ref<string[]>(["ProductCategory", route.params.category]);
const itemsPerPage = ref<number[]>([9, 12, 18, 24]);
const RouterItems = ref<string[]>([
  "whey protein",
  "Weight gainer & carbs",
  "Creatine",
  "Pre workout",
  "Recovery",
  "Accessories",
]);

onMounted(() => {
  router.push({
    query: {
      ...route.query,
      on_sale: "true",
    },
  });
  console.log(route.query.id);
});
</script>
<style scoped>
.select {
  width: 120px;
  height: 50px !important;
}
.w- {
  height: 900px;
}
.routelist {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%);
}
.router-link-active {
  text-indent: 10px;

  text-decoration: underline #e65100 solid 1px !important;
}
img {
  width: 100%;
  height: 60vh;
  object-fit: fill;
}
.list {
  width: 950px;
  overflow: hidden;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 680px) {
  img {
    object-fit: cover;
  }
}
</style>
