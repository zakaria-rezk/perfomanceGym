<template>
  <teleport to="body">
    <div
      class="search position-fixed bg-black"
      :style="{ top: props.height }"
      ref="searchModal"
    >
      <div>
        <input
          type="text"
          placeholder="Search For Product"
          class="input text-white"
        />
        <v-btn
          size="large"
          variant="plain"
          class="position-relative ss"
          @click="closeModal"
          ><v-icon size="x-large">mdi-close ></v-icon></v-btn
        >
        <hr color="gray" class="mt-n12" />
      </div>
    </div>
  </teleport>
</template>
<script setup lang="ts">


interface Props {
  height: string;
}
const props = defineProps({
  height: {
    type: String,
    default: "120px",
  },
}) as Props;

const emit = defineEmits<{
  (event: 'CloseSearchModal'): void;
 
}>();
const searchModal = ref<HTMLDivElement | null>(null);

const closeModal = () => {
  if (searchModal.value) {
    searchModal.value.classList.add("closeModal");
  }
  setTimeout(() => {
    emit("CloseSearchModal");
  }, 300);
};
//stop scrlloing when the searhc bar opend
onBeforeMount(() => {
  document.documentElement.style.overflowY = "hidden";
  console.log("stop");
});
//restart scrlloing when the searhc bar opend
onBeforeUnmount(() => {
  document.documentElement.style.overflowY = "scroll";
  console.log("start");
});
</script>
<style scoped>
.ss {
  bottom: 72px;
}
.input {
  width: 100%;
  border: none;
  outline: none;
  height: 100px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 2rem;
}
.input::placeholder {
  color: rgb(255, 255, 255);
}
.search {
  position: relative;
  height: 100vh;
  width: 100%;

  z-index: 10000;
  animation: slide-downup 0.5s ease-out forwards;

  overflow: scroll !important;
  opacity: 1;
}
.closeModal {
  animation: slide-topdown 0.5s ease-out forwards;
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
    opacity: 1;
    transform: translateY(0%);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>
