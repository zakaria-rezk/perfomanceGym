<template>
  <div class="d-flex justify-start counter-div my-5">
    <CartCounter :conuter="1" />
    <v-btn class="bg-red mx-5" size="large" rounded>Add to cart</v-btn>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.counter-div {
  height: 50px;
}
</style>
