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
        :message="computedTopValue"
      />
      <v-row class="d-flex">
        <v-col cols="1" class="d-md-none">
          <button><v-icon>mdi-cart-plus</v-icon></button>
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
          <button @click.stop="drawer = !drawer">
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
          <v-btn variant="text" size="small"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path
                d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"
              /></svg
          ></v-btn>

          <v-btn variant="text" class="" size="small">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path
                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"
              /></svg
          ></v-btn>

          <v-btn
            v-if="!modela"
            variant="text"
            size="small"
            @click="modela = !modela"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path
                d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
              />
            </svg>
          </v-btn>

          <v-btn v-else variant="text" size="small" @click="closeModal"
            ><v-icon height="24px" size="x-large">mdi-close</v-icon></v-btn
          >

          <v-btn variant="text" class="mx-n4 text-caption"
            ><span>LOGIN / REGISTER</span></v-btn
          ></v-col
        >
      </v-row>
      <v-navigation-drawer
      temporary class="bg-black"
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'left' : undefined"
      ><defaultNav /></v-navigation-drawer>
    </v-container>
  </v-layout>
</template>

<script setup>
  import defaultNav from "./mobileNavs/defaultNav.vue";
import { ref, onBeforeMount } from "vue";
import searchModal from "./modals/searchModal.vue";
const drawer = ref(false);
const modela = ref(false);
const computedTopValue = ref();

const onTop = ref(false);
const Menu = ref(false);

const openMenu = () => {
  Menu.value = true;
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  const searchModal = document.querySelector(".search");
  searchModal.classList.add("closeModal");

  setTimeout(() => {
    modela.value = false;
  }, 300);
};
const closeMenu = () => {
  Menu.value = false;
};
const handleScroll = () => {
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
.mobilenav {
  background-color: rgb(5, 5, 5) !important;
  height: 100vh;
  z-index: 10000000 !important;
  width: 200px;
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
