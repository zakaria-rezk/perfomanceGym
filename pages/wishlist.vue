<template>
  <div>
    <pageTitle
      ><div
        class="position-absolute W-100 d-none d-lg-flex list bg-transparent list text-center text-h6"
      >
        <nuxt-link
          to="/"
          class="text-decoration-none text-grey-lighten-2 d-flex px-1"
          >Home <span class="mx-2"> / </span></nuxt-link
        >
        <p class="text-grey-lighten-1">{{ route.name }}</p>
      </div>
    </pageTitle>
    <v-container>
      <v-row class="text-center">
        <v-col v-if="!data"
          ><v-icon
            class="w-100 custom-icon text-grey-lighten-2"
            size="xxx-large"
            >mdi-heart-outline</v-icon
          >
          <p class="text-uppercase text-h1">.this wishlist is empty</p>
          <p class="text-h4 text-grey-lighten-1">
            You don't have any products in the wishlist yet.
          </p>
          <p class="text-h6 text-grey-lighten-1">
            You will find a lot of interesting products on our "Shop" page.
          </p>
          <v-btn
            class="bg-red mx-5 my-5 text-uppercase"
            size="large"
            rounded
            @click="router.push('/ProductCategory/SHOP')"
            >Go to shop</v-btn
          ></v-col
        >
        <v-col v-else>
          <div class="position-relative">
            <p class="text-uppercase text-h6 text-{md}-h4">your wishlist product</p>
            <v-divider ></v-divider>
            <div
              class="d-flex justify-end bg-grey-lighten-3 bar"
              v-if="bar"
              ref="barcontainer"
            >
              <v-btn variant="text">Select all ✅</v-btn>
              <v-btn variant="text">Remove ❌</v-btn>
            </div>
            <Product
              :smCOLS="6"
              :mdCOLS="4"
              :products="data"
              :wishlist="true"
              class="my-10"
              @select="select"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import type { SpecialProduct } from "~/types/SpecialProduct";
const bar = ref<boolean>();
const barcontainer = ref<HTMLDivElement>();
const data = useFetchData();
const route = useRoute();
const router = useRouter();
const select = () => {
  bar.value = false;

  data.forEach((pro: SpecialProduct) => {
    if (pro.selected) {
      bar.value = true;

      return;
    }
  });
};
onMounted(() => {
  data.forEach((element: SpecialProduct) => {
    element.selected = false;
  });
});
</script>
<style scoped>
.bar {
  animation: bar 0.5s ease forwards;
  transform: translateY(10px);
  transition: all 0.5s;
  height: 100%;
}
.icon {
  position: absolute;
  top: -50px;
}
.custom-icon {
  font-size: 250px !important;
}
.list {
  top: 70%;

  left: 50%;

  transform: translate(-80%, -50%);
}
@keyframes bar {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(10px);
    opacity: 1;
  }
}
</style>
