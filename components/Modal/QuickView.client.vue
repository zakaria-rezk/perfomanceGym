<template>
  <teleport to="body">
    <div class="container" ref="container">
      <v-container class="content rounded-xl position-relative w-75">
        <v-row>
          <v-col cols="6">
            <v-btn variant="plain" size="xx-l"  ref="emitBtn"
              ><v-icon >mdi-close</v-icon></v-btn
            >
            <div class="text-right">
              <p class="my-4 text-h5">{{ Props.ProName }}</p>
              <p class="text-red text-h4">{{ Props.ProPrice }} USD</p>
              <div class="d-flex justify-end counter-div">
                <v-btn class="bg-red" size="xx-large">Add to cart</v-btn>
                <div class="d-flex text counter mx-5">
                  <button @click="counter++" class="text-center btn btn-r">
                    <v-icon size="15">mdi-plus</v-icon></button
                  ><input
                    class="input text-center"
                    type="number"
                    :value="counter"
                  />

                  <button
                    @click="counter--"
                    class="text-center btn btn-l"
                    :disabled="counter === 1"
                  >
                    <v-icon size="15">mdi-minus</v-icon>
                  </button>
                </div>
              </div>
              <v-divider class="my-5"></v-divider>
              <p class="text-left">Category: {{ Props.ProCategory }}</p>
            </div>
          </v-col>
          <v-col cols="6">
            <img :src="Props.imgSrc" class="img" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </teleport>
</template>
<script setup lang="ts">
const container = ref<HTMLDivElement>();
interface props {
  imgSrc: string;
  ProName: string;
  ProPrice: number;
  ProCategory: string;
}
const counter = ref<number>(1);
const emit = defineEmits<{
  (event: "closeModal"): void;
}>();

const Props = defineProps<props>();
const handleClickOutSide = (event: Event) => {
  if(!event.target) return
  if(event.target === container.value || event.target.classList.contains('mdi-close')){
  emit('closeModal')
  }

 
};
onBeforeMount(() => {
  document.addEventListener("click", handleClickOutSide);
  document.documentElement.style.overflowY = "hidden";
});

onBeforeUnmount(() => {
  document.documentElement.style.overflowY = "scroll";
  document.removeEventListener("click", handleClickOutSide);
});
</script>
<style scoped>
.counter-div {
  height: 50px;
}
.btn {
  width: 30px;
}
.btn-r:hover {
  background-color: brown;
  border-radius: 25px 0 0 25px;
}
.btn-l:hover {
  background-color: brown;
  border-radius: 0 25px 25px 0;
}
.counter {
  border: 1px solid gray;
  border-radius: 25px;
  width: 80px;
  height: 42px;
}
input {
  width: 25px;
  border: 1px solid gray;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 10000;
  background-color: rgba(42, 42, 44, 0.8);
  overflow-y: scroll;
  
}
.content {
  bottom: 10px;
  background-color: rgb(255, 255, 255);
  top: 64px;
  height: 100%;
  transition: all 0.3s;
  transform: translateX(50px);
  
  animation: showmodal 0.3s ease-in-out forwards;
}
.img {
  width: 100%;
  height: 600px;
  object-fit: contain;
}
@keyframes showmodal {
  form {
    opacity: 0;
    
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
