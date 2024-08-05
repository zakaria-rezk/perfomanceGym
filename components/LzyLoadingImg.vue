<template>
  <figure ref="figure">
   
    <img class="rounded-xl img" :src="props.src" :alt="props.alt" />
  </figure>
</template>
<script setup lang="ts">

const props = defineProps<Props>() as Props;
interface Props {
  src: string;
  alt: string;
  observer: any;
}
onMounted(async () => {
  await nextTick();

 
  props.observer.observe(figure.value);
});
const figure = ref<HTMLDivElement>();
</script>
<style scoped>
.img {
  object-fit: fill;
  border-radius: 30px !important;
  width: 100%;
  height: 200px;
}
</style>
