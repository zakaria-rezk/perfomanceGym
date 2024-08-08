<template>
  <figure ref="figure position-relative" :class="{'hot':hot}">
   
    <img class="rounded-xl img" :class="{'default':object, }" :src="props.src" :alt="props.alt" />
  </figure>
</template>
<script setup lang="ts">

const props = defineProps<Props>() as Props;
interface Props {
  src: string;
  alt: string;
  object:boolean,
  hot:boolean
  
}

const figure = ref<HTMLDivElement>();
</script>
<style scoped>
.img {
  object-fit: fill;
  border-radius: 30px !important;
  width: 100%;
  height: 200px;

}
.default{
  object-fit: none !important;
  height: 300px ;
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
