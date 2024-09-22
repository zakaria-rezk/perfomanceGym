<template>
  <div class="error-page">
    <h1 v-if="error.statusCode">{{ error.statusCode }}</h1>
    <h2>{{ error.message || "An error occurred" }}</h2>
    <nuxt-link to="/" class="back-home">Go back to Home</nuxt-link>
  </div>
</template>

<script setup>
// Access the error object from the Nuxt app
const { error } = useNuxtApp();
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
h1 {
  font-size: 6rem;
  margin: 0;
  color: #ff4c4c;
}
h2 {
  font-size: 2rem;
  color: #333;
}
.back-home {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>
