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
      <v-list
        class="routelist text-white bg-transparent d-lg-none"
        style="z-index: 100"
      >
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
              @click="search"
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
          <FilterProducts
            :minPrice="minPrice?.price"
            :maxPrice="maxPrice?.price"
          />
        </v-col>
        <v-col cols="9" class="position-relative">
          <ControlPage
            :routeParams="route.params.category"
            class="mb-10"
            @controlPageCol="handleCole"
          />
          <v-progress-circular
            indeterminate
            color="red"
            class="ma position-absolute"
            size="100"
            v-if="loading"
          ></v-progress-circular>

          <Product
            :mdCOLS="mdCOLS"
            :products="state.product[`${proCategory}`]"
            v-else
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const mdCOLS = ref<number>(4);
const handleCole = (payload: number) => {
  mdCOLS.value = payload;
};
import type { SpecialProduct } from "~/types/SpecialProduct";
import { useUserStore } from "~/sotres/Product";

const state = useUserStore();
const minPrice = ref<SpecialProduct>();
const maxPrice = ref<SpecialProduct>();
const route = useRoute();
const router = useRouter();
const category = ref(route.params.category);
const loading = ref<boolean>(false);
const search = () => {
  minPrice.value = state.product[`${proCategory.value}`].reduce(
    (min: SpecialProduct, product: SpecialProduct) => {
      return product.price < min.price ? product : min;
    }
  );
  maxPrice.value = state.product[`${proCategory.value}`].reduce(
    (min: SpecialProduct, product: SpecialProduct) => {
      return product.price > min.price ? product : min;
    }
  );
  console.log(minPrice.value?.price);
  console.log(maxPrice.value?.price);
};
const proCategory = computed(() => {
  return category.value.replace(/[&\s]/g, "");
});

onMounted(() => {
  // router.push({
  //   query: {
  //     ...route.query,
  //   },
  // });
  search();
});
const RouterItems = ref<string[]>([
  "Whey Protain",
  "Weight Gainer&Carbs",
  "Creatine",
  "Pre Workout",
  "Recovery",
  "Accessories",
]);
</script>
<style scoped>
.ma {
  left: 50%;
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
