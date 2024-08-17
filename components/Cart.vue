<template>
  <div class="d-flex justify-start counter-div my-5">
   
    <div class="d-flex text counter ">
      <button @click="counter++" class="text-center btn btn-r">
        <v-icon size="15">mdi-plus</v-icon></button
      ><input class="input text-center" type="number" :value="counter" />

      <button
        @click="counter--"
        class="text-center btn btn-l"
        :disabled="counter === 1"
      >
        <v-icon size="15">mdi-minus</v-icon>
      </button>
    </div>
    <v-btn class="bg-red mx-5" size="large" rounded>Add to cart</v-btn>
  </div>
</template>
<script setup lang="ts">
const counter = ref<number>(1);
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
</style>
