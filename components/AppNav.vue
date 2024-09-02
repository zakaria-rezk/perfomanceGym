<template>
  <v-layout>
    <v-container
      class="text-white position-fixed nav"
      style="z-index: 10000"
      :style="{backgroundColor:prop.bgColor}"
      fluid
      :class="{ Cscroll: onTop }"
      height=""
    >
      <ModalSearch
        @CloseSearchModal="closeModal"
        v-if="modela"
        :height="computedTopValue"
      />
      <v-row class="d-flex">
        <v-col cols="1" class="d-md-none pl-5">
          <button
            @click="
              navNumber = 2;
              drawer = !drawer;
            "
          >
            <v-icon>mdi-cart-plus</v-icon>
          </button>
        </v-col>
        <v-col
          class="ml-md-5 ml-6 text-center col-md-4 img"
          :class="{ scroll: onTop }"
        >
          <nuxt-link to="/"
            ><img
              src="/public/437523928_403353212455742_52635376963353824_n.jpg"
              width="160"
              height="110"
              alt=""
          /></nuxt-link>
        </v-col>
        <v-col cols="1" class="d-md-none pr-9">
          <button
            @click="
              navNumber = 0;
              drawer = !drawer;
            "
          >
            <v-icon>mdi-menu</v-icon>
          </button></v-col
        >
        <v-col class="d-none d-md-flex my-n1"
          ><v-btn variant="text" class="text-white"
            ><nuxt-link to="/" class="mx-n2 text-white text-decoration-none"
              >Home</nuxt-link
            ></v-btn
          >
          <div @mouseenter="openMenu" @mouseleave="closeMenu">
            <v-btn variant="text" class="mx-n2">Categrious</v-btn>
            <v-list v-if="Menu" rounded class="position-absolute bg-black">
              <v-list-item
                v-for="item in RouterItems"
                :key="item"
                class="my-n2 w-200 rounded-xl"
                style="width: 220px"
              >
                <nuxt-link
                  @click="closeMenu"
                  :to="{
                    name: 'ProductCategory-category',
                    params: { category: item },
                  }"
                  class="text-decoration-none text-white text-caption"
                  >{{ item }}
                </nuxt-link>
              </v-list-item>
            </v-list>
          </div>
          <v-btn variant="text" class="mx-n5">Contact US</v-btn></v-col
        >
        <v-col class="d-none d-md-flex justify-end mr-16">
          <v-btn
            @click="
              navNumber = 2;
              drawer = !drawer;
            "
            variant="text"
            size="small"
          >
            <v-icon size="x-large">mdi-cart-plus</v-icon></v-btn
          >

          <v-btn variant="text" class="" size="small">
            <v-icon size="x-large">mdi-heart-outline</v-icon></v-btn
          >

          <v-btn
            v-if="!modela"
            variant="text"
            size="small"
            @click="modela = !modela"
          >
            <v-icon size="x-large">mdi-magnify</v-icon>
          </v-btn>

          <v-btn v-else variant="text" size="small" @click="closeModal"
            ><v-icon height="24px" size="x-large">mdi-close</v-icon></v-btn
          >

          <v-btn
            variant="text"
            class="mx-n4 my-n1 text-caption"
            @click="
              navNumber = 1;
              drawer = !drawer;
            "
            ><span>LOGIN / REGISTER</span></v-btn
          ></v-col
        >
      </v-row>
      <v-navigation-drawer
        temporary
        class="bg-black"
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'left' : undefined"
        width="300"
      >
        <component :is="drawerNav" />
      </v-navigation-drawer>
    </v-container>
  </v-layout>
</template>
<script setup lang="ts">

const prop =defineProps({
  bgColor:{
    type:String,
    default:"transparent"

  }
})
const navNumber = ref<number>(0);
const drawer = ref<boolean>(false);
const modela = ref<boolean>(false);
const computedTopValue = ref<string>();
const onTop = ref<boolean>(false);
const Menu = ref<boolean>(false);
const RouterItems = ref<string[]>([
  "Whey Protain",
  "Weight Gainer&Carbs",
  "Creatine",
  "Pre Workout",
  "Recovery",
  "Accessories",
]);
const drawerNav = computed(() => {
  switch (navNumber.value) {
    case 1:
      return resolveComponent("MobileNavAuth");
    case 2:
      return resolveComponent("MobileNavCart");
    default:
      return resolveComponent("MobileNavMenu");
  }
});
const changeNavBar = () => {
  drawer.value = !drawer.value;
};
const openMenu = () => {
  Menu.value = true;
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  const searchModal = document.querySelector(".search");
  if (!searchModal) return;
  searchModal.classList.add("closeModal");
  setTimeout(() => {
    modela.value = false;
  }, 300);
};
provide("changeNavBar", {
  drawer,
  changeNavBar,
});
const closeMenu = () => {
  Menu.value = false;
};
const handleScroll = (): void => {
  if (window.pageYOffset === 0) {
    onTop.value = false;
    computedTopValue.value = "120px";
  } else {
    onTop.value = true;
    computedTopValue.value = "64px";
  }
};
onBeforeMount(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
<!-- SDFD -->
<style scoped>
.v-navigation-drawer__scrim {
  height: 100vh;
}
.nav{
  padding:40px 0;
 height: 115px;
}
.Cscroll {
  height: 64px;
  background-color: rgb(0, 0, 0) !important;
  position: fixed;
  transition: 1s;
 padding:20px 0;
}
img {
  border-radius: 30px;
  object-fit: fill;
  margin-top:-35px ;
}
.scroll img {
  width: 80px;
  height: 62px;
  margin-top: -20px;
}
</style>
