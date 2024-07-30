<template>
  <teleport to="body">
    <div class="search position-fixed bg-black" :style="{ top: props.message }">
      sdddfsSDFSDFdfsdfds
    </div>
  </teleport>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  message: {
    type: String,
    default: "120px",
  },
});

// onBeforeMount(() => {
// //   document.documentElement.style.overflowY = "hidden";
//   console.log("stop");
// });
// onUnmounted(() => {
// //   document.documentElement.style.overflowY = "scroll";
//   console.log("start");
// });
</script>
<style scoped>
.search {
  height: 100vh;
  width: 100%;
  background-color: black !important;
  z-index: 10000;
  animation: slide-downup 0.5s ease-out forwards;

  opacity: 1;
}
@keyframes slide-downup {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-topdown {
  from {
    opacity: 0;
    transform: translateY(10%);
  }
  to {
    opacity: 1;
    transform: translateY(100%);
  }
}
</style>
