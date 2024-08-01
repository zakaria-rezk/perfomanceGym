<template>
  <v-layout>
    <v-container
      class="text-white position-fixed bg-transparent"
      style="z-index: 10000"
      fluid
      :class="{ Cscroll: onTop }"
      height=""
    >
      <searchModal
        @CloseSearchModal="closeModal"
        v-if="modela"
        :height="computedTopValue"
      />
      <v-row class="d-flex">
        <v-col cols="1" class="d-md-none">
          <button @click="changeNavBar('shopping')">
            <v-icon>mdi-cart-plus</v-icon>
          </button>
        </v-col>
        <v-col
          class="ml-md-5 ml-6 text-center col-md-4 img"
          :class="{ scroll: onTop }"
        >
          <v-btn variant="text"
            ><img
              src="/public/437523928_403353212455742_52635376963353824_n.jpg"
              width="160"
              height="110"
              alt=""
          /></v-btn>
        </v-col>
        <v-col cols="1" class="d-md-none pr-8">
          <button @click="changeNavBar('default')">
            <v-icon>mdi-menu</v-icon>
          </button></v-col
        >
        <v-col class="d-none d-md-flex"
          ><v-btn variant="text" class="mx-n2">Home</v-btn>
          <div @mouseenter="openMenu" @mouseleave="closeMenu">
            <v-btn variant="text" class="mx-n2">Categrious</v-btn>
            <v-list v-if="Menu" rounded class="w-200 position-absolute">
              <v-list-item>
                <p>dsfdsfds</p>
              </v-list-item>
              <v-list-item>
                <p>dsfdsfds</p>
              </v-list-item>
              <v-list-item>
                <p>dsfdsfds</p>
              </v-list-item>
            </v-list>
          </div>
          <v-btn variant="text" class="mx-n5">Contact US</v-btn></v-col
        >
        <v-col class="d-none d-md-flex justify-end mr-16">
          <v-btn @click="changeNavBar('shopping')" variant="text" size="small">
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
            class="mx-n4 text-caption"
            @click="changeNavBar('auth')"
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
        ><defaultNav v-if="currentNav === 'default'" />
        <authNav v-else-if="currentNav === 'auth'" />
        <pasketNav v-else-if="currentNav === 'shopping'"
      /></v-navigation-drawer>
    </v-container>
  </v-layout>
</template>

<script setup lang="ts">
'import searchModal from "./modals/searchModal.vue";'
'import defaultNav from "./mobileNavs/defaultNav.vue";'
'import pasketNav from "./mobileNavs/pasketNav.vue"'
'import authNav from "./mobileNavs/authNav.vue";'
'import { ref, onBeforeMount, provide } from "vue";'
type navBar = "default" | "auth" | "shopping" | "";
const currentNav = ref<navBar>("default");
const drawer = ref<boolean>(false);
const modela = ref<boolean>(false);
const computedTopValue = ref<string>();

const onTop = ref<boolean>(false);
const Menu = ref<boolean>(false);

const changeNavBar = (nav: navBar) => {
  drawer.value = !drawer.value;
  currentNav.value = nav;
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
  document.documentElement.overflowX = "hidden";
});
onUnmounted(() => {
  window.removeEventListener("scroll");
});
</script>
<!-- SDFD -->
<style scoped>
.v-navigation-drawer__scrim {
  height: 100vh;
}
.Cscroll {
  height: 64px;
  background-color: rgb(0, 0, 0) !important;
  position: fixed;
  transition: 1s;
}
img {
  border-radius: 30px;
  object-fit: fill;
}
.scroll img {
  width: 80px;
  height: 62px;
  margin-top: -15px;
}
</style>
