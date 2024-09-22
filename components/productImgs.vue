<template>
  <v-col cols="12" md="6" class="d-flex justify-center">
    <div
      class="d-flex flex-md-row-reverse flex-column justify-center align-center"
    >
      <div class="imgContainer position-relative">
        <p :class="{ offers: props.offer }" v-if="props.offer">
          {{ props.offer }}
        </p>
        <div class="position-relative d-flex align-center justify-center">
          <v-btn
            :disabled="CurrImgNum === props.imgSrc.length - 1"
            variant="text"
            class="mr-n16 position-relative text-grey arrow arrow-l"
            @click="swap(CurrImgNum + 1)"
            ><v-icon size="30">mdi-arrow-left</v-icon></v-btn
          >
          <div
            class="overflow-hidden position-relative"
            ref="imgContainer"
            :class="{ hot: props.hot }"
          >
            <img
              src="../static/images/products/WeightGainerCarbs/Picsart_23-02-10_08-46-30-149.png"
              alt=""
              class="my-md-2 mx-md-5 mainimg position-relative cursor-move"
              @mousemove="magnfiy"
              ref="mainImg"
            />
          </div>

          <v-btn
            :disabled="CurrImgNum === 0"
            variant="text"
            class="ml-n16 position-relative text-grey arrow arrow-r"
            @click="swap(CurrImgNum - 1)"
            ><v-icon size="30">mdi-arrow-right</v-icon></v-btn
          >
        </div>
      </div>
      <div class="d-flex flex-column">
        <button
          v-for="(img, index) in props.imgSrc"
          :key="index"
          @click="swap(index)"
          :disabled="CurrImgNum === index"
          :class="{ disabled: CurrImgNum === index }"
        >
          <img
            src="../static/images/products/WeightGainerCarbs/Picsart_23-02-10_08-46-30-149.png"
            alt=""
            class="imgTH"
          />
        </button>
      </div>
    </div>
  </v-col>
</template>
<script setup lang="ts">
const imgContainer = ref<HTMLDivElement>();
const mainImg = ref<HTMLImageElement>();
interface Props {
  imgSrc: string[];
  hot: boolean | undefined;
  offer: string | boolean | undefined;
}
const props = defineProps<Props>();
const CurrImgNum = ref<number>(0);
//CHANGE IMG ANIMATION
const swap = (index: number) => {
  if (!mainImg.value) return;
  resetAnimation();
  if (index > CurrImgNum.value) swapArrowLeft(index);
  else if (index < CurrImgNum.value) swapArrowRight(index);
};

const swapArrowRight = (index: number) => {
  if (!mainImg.value) return;
  for (let i = CurrImgNum.value; CurrImgNum.value > index; CurrImgNum.value--) {
    mainImg.value.classList.add("center2left");
    setTimeout(() => {
      if (!mainImg.value) return;
      mainImg.value?.classList.remove("center2left");
      mainImg.value?.classList.add("right2center");
      console.log(CurrImgNum.value);
      // mainImg.value.src = props.imgSrc[CurrImgNum.value];
      CurrImgNum.value = index;
    }, 300 * (CurrImgNum.value - index));
    // mainImg.value.src = props.imgSrc[CurrImgNum.value];
  }
};
const swapArrowLeft = async (index: number) => {
  if (!mainImg.value) return;
  for (let i = CurrImgNum.value; CurrImgNum.value < index; CurrImgNum.value++) {
    mainImg.value.classList.add("center2right");
    setTimeout(() => {
      if (!mainImg.value) return;
      mainImg.value?.classList.remove("center2right");
      mainImg.value?.classList.add("left2center");
      console.log(CurrImgNum.value);
      // mainImg.value.src = props.imgSrc[CurrImgNum.value];
      CurrImgNum.value = index;
    }, 300 * 1);
    // mainImg.value.src = '../static/images/products/WeightGainerCarbs/Picsart_23-02-10_08-46-30-149.png';
    mainImg.value?.classList.remove("left2center");
  }
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
const magnfiy = (e: Event) => {
  if (!imgContainer.value || !mainImg.value) return;
  console.log("maginfy");
  const x = e.pageX - imgContainer.value.getBoundingClientRect().left,
    imgWidth = mainImg.value.width,
    Xperc = (x / imgWidth) * 100 + "%";

  // height
  const y = e.pageY - imgContainer.value.getBoundingClientRect().top,
    imgHeight = mainImg.value.height,
    Yperc = (y / imgHeight) * 100 + "%";

  mainImg.value.style.transformOrigin = Xperc + Yperc;
};
</script>
<style scoped>
@import "~/assets/style/left&rightAnimation.css";
@import "~/assets/style/Hot&Offer.css";
.disabled {
  transition: all 0.5s ease;
  opacity: 0.5;
}
.mainimg {
  object-fit: contain;
  width: 380px;
  min-height: 100vh;

  transition: all 0.3s;
}

.mainimg:hover {
  transform: scale(1.8);
}
.imgTH {
  width: 115px;
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
@media (min-width: 968px) and (max-width: 1280px) {
  .mainimg {
    width: 300px;
  }
}
@media (max-width: 425px) {
  img {
    width: 350px !important;
  }
}
@media (min-width: 425px) and (max-width: 950px) {
  img {
    width: 450px !important;
  }
}
</style>
