<template>
  <v-col cols="12" md="6" class="d-flex justify-center">
    <div
      class="d-flex flex-md-row-reverse flex-column justify-center align-center"
    >
      <div class="imgContainer">
        <div class="position-relative d-flex align-center justify-center">
          <v-btn
            :disabled="counter === 1"
            variant="text"
            class="mr-n16 position-relative text-grey arrow arrow-l"
            @click="swapArrowLeft"
            ><v-icon size="30">mdi-arrow-left</v-icon></v-btn
          >
          <div class="overflow-hidden position-relative" ref="imgContainer">
            <img
              src="/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png"
              alt=""
              class="my-md-2 mx-md-5 mainimg position-relative cursor-move"
              @mousemove="magnfiy"
              ref="mainImg"
            />
          </div>

          <v-btn
            :disabled="counter === 0"
            variant="text"
            class="ml-n16 position-relative text-grey arrow arrow-r"
            @click="swapArrowRight"
            ><v-icon size="30">mdi-arrow-right</v-icon></v-btn
          >
        </div>
      </div>
      <div class="d-flex flex-column">
        <button
          @click="swapArrowRight"
          :disabled="counter === 0"
          :class="{ disabled: counter === 0 }"
        >
          <img
            src="/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png"
            alt=""
          />
        </button>
        <button
          @click="swapArrowLeft"
          :disabled="counter === 1"
          :class="{ disabled: counter === 1 }"
        >
          <img
            src="/assets/imges/products/IMG_20240126_074825-150x160.png"
            alt=""
            class="my-2"
          />
        </button>
      </div>
    </div>
  </v-col>
</template>
<script setup lang="ts">
const imgContainer = ref<HTMLDivElement>();
const mainImg = ref<HTMLImageElement>();
const magnfiy = (e: Event) => {
  if (!imgContainer.value || !mainImg.value) return;
  const x = e.pageX - imgContainer.value.getBoundingClientRect().left,
    imgWidth = mainImg.value.width,
    Xperc = (x / imgWidth) * 100 + "%";

  // height
  const y = e.pageY - imgContainer.value.getBoundingClientRect().top,
    imgHeight = mainImg.value.height,
    Yperc = (y / imgHeight) * 100 + "%";

  mainImg.value.style.transformOrigin = Xperc + Yperc;
};
//CHANGE IMG ANIMATION
const counter = ref<number>(0);
const swapArrowRight = () => {
  if (!mainImg.value) return;
  counter.value--;
  resetAnimation();
  mainImg.value.classList.add("center2left");

  setTimeout(() => {
    if (!mainImg.value) return;
    mainImg.value.classList.remove("center2left");
    mainImg.value.classList.add("right2center");
    mainImg.value.src =
      "http://localhost:3000/_nuxt/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png";
  }, 300);
};
const swapArrowLeft = () => {
  if (!mainImg.value) return;
  counter.value++;
  resetAnimation();
  mainImg.value.classList.add("center2right");

  setTimeout(() => {
    if (!mainImg.value) return;
    mainImg.value?.classList.remove("center2right");
    mainImg.value?.classList.add("left2center");

    mainImg.value.src =
      "http://localhost:3000/_nuxt/assets/imges/products/IMG_20240126_074825-150x160.png";
  }, 300);
};
const resetAnimation = () => {
  if (!mainImg.value) return;
  mainImg.value.classList.remove(
    "center2right",
    "right2center",
    "left2center",
    "center2left"
  );
};
</script>
<style scoped>
.disabled {
  transition: all 0.5s ease;
  opacity: 0.5;
}
.mainimg {
  object-fit: fill;

  transition: all 0.3s;
}

.mainimg:hover {
  transform: scale(1.8);
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
  z-index: 11;
}
.center2right {
  animation: center2right 0.3s ease-in-out;
}
.right2center {
  animation: right2center 0.3s ease-in-out;
}
.center2left {
  animation: center2left 0.3s ease-in-out;
}
.left2center {
  animation: left2center 0.3s ease-in-out;
}
@media (max-width: 960px) {
  img {
    height: 90vh;
    max-width: 450px;
  }
}
@media (min-width: 1280px) {
  .mainimg {
    height: 90vh;
    max-width: 400px;
  }
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
