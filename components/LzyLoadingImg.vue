<template>
  <figure ref="figure position-relative" :class="{ hot: props.hot }">
    <img
      class=" img"
      :class="{ default: props.object }"
      src="../static/images/products/WeightGainerCarbs/Picsart_23-02-10_08-46-30-149.png"
      :alt="props.alt"
    />
  </figure>
</template>
<script setup lang="ts">
const props = defineProps<Props>() as Props;

interface Props {
  src: string;
  alt: string;
  object: boolean;
  hot: boolean;
}

const figure = ref<HTMLDivElement>();
</script>
<style scoped>


.img {
  width: 100%;
  height: 250px;
  border-radius: 30px;
  object-fit: fill;
}
.default {
 
  height: 300px;
}

.hot::before {
  content: "HOT";
  position: absolute;
  color: #fff;
  top: 25px;
  right: 10px;
  background-color: rgb(255, 12, 12);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  padding-top: 13px;
}
</style>
