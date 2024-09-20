<template>
  <div class="text-center container d-flex position-relative">
    <img
      src="/static/imges/sport-page-title.jpg"
      width="100%"
      height="60vh"
      alt=""
    />
    <p class="text-md-h2 text-h3 position-absolute title text-white my-4 w-100">
      {{ route.params.category || route.name }}
      <v-btn @click="router.go(-1)" variant="text">
        <v-icon size="x-large">mdi-arrow-right</v-icon>
      </v-btn>
    </p>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const router = useRouter();
</script>
<style scoped>
.title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  width: 100%;
  height: 60vh;
  object-fit: fill;
}



@media (max-width: 680px) {
  img {
    object-fit: cover;
  }
}
</style>
