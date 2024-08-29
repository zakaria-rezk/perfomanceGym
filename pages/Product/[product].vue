<template>
  <div>
    <v-container style="margin-top: 115px"
      ><v-row>
        <v-col cols="6" class="d-md-flex justify-end">
          <div class="d-flex flex-column">
            <img
              src="/assets/imges/products/IMG_20240126_074825-150x160.png"
              alt=""
              class="my-2"
            />
            <img
              src="/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png"
              alt=""
            />
          </div>
          <div class="imgContainer">
            <div class="position-relative d-flex align-center">
              <v-btn
                variant="text"
                class="mr-n16 position-relative text-grey arrow arrow-l"
                @click="swapArrowLeft"
                ><v-icon size="30">mdi-arrow-left</v-icon></v-btn
              >
              <div class="overflow-hidden cursor-pointer">
                <img
                  src="/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png"
                  alt=""
                  class="my-2 mx-5 mainimg position-relative"
                  ref="mainImg"
                />
              </div>

              <v-btn
                variant="text"
                class="ml-n16 position-relative text-grey arrow arrow-r"
                @click="swapArrowRight"
                ><v-icon size="30">mdi-arrow-right</v-icon></v-btn
              >
            </div>
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
      </v-row></v-container
    >
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
const mainImg = ref<HTMLImageElement >();
const swapArrowRight = () => {
  if (!mainImg.value) return;
  resetAnimation();
  mainImg.value.classList.add("center2left");

  setTimeout(() => {
    if (!mainImg.value) return;
    mainImg.value.classList.remove("center2left");
    mainImg.value.classList.add("right2center");
    mainImg.value.src =
      "http://localhost:3000/_nuxt/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png";

  }, 1000);
};
const swapArrowLeft = () => {
  if (!mainImg.value) return;
  resetAnimation();
  mainImg.value.classList.add("center2right");

  setTimeout(() => {
    if (!mainImg.value) return;
    mainImg.value.classList.remove("center2right");
    mainImg.value?.classList.add("left2center");


    mainImg.value.src =
      "http://localhost:3000/_nuxt/assets/imges/products/IMG_20240126_074825-150x160.png";
   
  }, 1000);
};
const resetAnimation = () => {
  if(!mainImg.value) return
  mainImg.value.classList.remove(
    "center2right",
    "right2center",
    "left2center",
    "center2left"
  );
  console.log(mainImg.value.classList);
};

const items = ref<string[]>(["home", "wheyPortain", "mokka"]);

onMounted(() => {
  const router = useRouter();

  console.log(router);
});
</script>
<style scoped>
.mainimg {
  z-index: -1;
  height: 90vh;
  max-height: 100vh;
  max-width: 450px;
  background-color: red;
  transition: transform 1s ease-in-out;
}
.imgContainer:hover .arrow {
  display: block;
}
.imgContainer:hover .arrow-l {
  animation: left2center 0.3s ease-in-out;
}
.imgContainer:hover .arrow-r {
  animation: right2center 0.3s ease-in-out;
}
.arrow {
  display: none;
}
.center2right {
  animation: center2right 1s ease-in-out;
}
.right2center {
  animation: right2center 1s ease-in-out;
}
.center2left {
  animation: center2left 1s ease-in-out;
}
.left2center {
  animation: left2center 1s ease-in-out;
}
@keyframes center2left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes right2center {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes center2right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes left2center {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
