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
            @filterProducts="filterProducts"
            :minPrice="minPriceProduct?.price"
            :maxPrice="maxPriceProudct?.price"
            class="d-none d-md-inline"
          />
        </v-col>
        <v-col cols="12" md="9" class="position-relative">
          <ControlPage
            :routeParams="route.params.category"
            class="mb-10"
            @controlPageCol="handleCol"
          />

          <v-progress-circular
            indeterminate
            color="red"
            class="ma position-absolute"
            size="100"
            v-if="loading"
          ></v-progress-circular>
          <keep-alive v-else>
            <Product
              :mdCOLS="mdCOLS"
              :products="Products"
              :smCOLS="smCOLS"
              v-if="Products"
            />
            <div v-else class="w-100 bg-blue rounded-xl pa-2">
              <p class="text-h3 text-upper-case">No products found</p>
            </div>
          </keep-alive>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const validRow = [3, 4, 6];
const mdCOLS = ref<number>(
  validRow.includes(+(route.query.per_row as string))
    ? +(route.query.per_row as string)
    : 4
);
const smCOLS = ref<number>(6);
const handleCol = (payload: number) => {
  mdCOLS.value = payload;
};
import type { SpecialProduct } from "~/types/SpecialProduct";
import { useUserStore } from "~/sotres/Product";
const data = ref<SpecialProduct[]>();
const Products = ref<SpecialProduct[]>();
const state = useUserStore();
const shop = useShopData();
const minPriceProduct = ref<SpecialProduct>();
const maxPriceProudct = ref<SpecialProduct>();
const category = ref(route.params.category);
const loading = ref<boolean>(true);
const loadingSpinner = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
const getMinAndMaxPrice = () => {
  loadingSpinner();

  if (!data.value || data.value.length === 0) return;
  Products.value = data.value;

  minPriceProduct.value = data.value.reduce(
    (min: SpecialProduct, product: SpecialProduct) => {
      return product.price < min.price ? product : min;
    }
  );
  maxPriceProudct.value = data.value?.reduce(
    (min: SpecialProduct, product: SpecialProduct) => {
      return product.price > min.price ? product : min;
    }
  );
};
const filterProducts = (payload: {
  minPrice: number;
  maxPrice: number;
  onSale: boolean;
}) => {
  loadingSpinner();
  console.log(payload.onSale);
  Products.value = data.value;
  const minPrice = payload.minPrice || +(route.query.minprice || 0);
  const maxPrice = payload.maxPrice || +(route.query.maxprice || 2500);

  Products.value = Products.value?.filter((pro: SpecialProduct) => {
    if (payload.onSale) {
      return pro.price >= minPrice && pro.price <= maxPrice && pro.offer;
    } else return pro.price >= minPrice && pro.price <= maxPrice;
  });
};
const filterByStock = (payload: boolean) => {
  Products.value = data.value;
  loadingSpinner();
  if (!Products.value || !payload) return;

  Products.value = Products.value?.filter(
    (pro: SpecialProduct) => pro.InStock === true
  );
};
const filterBySale = (payload: boolean) => {
  Products.value = data.value;
  c;

  if (!route.query.minprice && !route.query.maxprice) getMinAndMaxPrice();

  loadingSpinner();
  if (!Products.value || !payload) return;

  Products.value = Products.value?.filter((pro: SpecialProduct) => {
    return (
      pro.offer &&
      pro.price >= +(route.query.minprice || 0) &&
      pro.price <= +(route.query.maxprice || 500000)
    );
  });
};
const proCategory = computed(() => {
  return category.value.replace(/[&\s]/g, "");
});

onMounted(() => {
  data.value =
    route.params.category === "SHOP"
      ? shop
      : state.product[`${proCategory.value}`];
  getMinAndMaxPrice();
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
