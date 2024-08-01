<template>
  <div>
    <Headline title="sign in" />
    <v-divider></v-divider>
    <v-label class="ml-3 mt-2"
      >Enter your email addresss <span class="text-red ml-1">*</span></v-label
    >
    <v-text-field
      class="bg-white rounded-xl ma-3 pl-2 text-center font-weight-light"
      :style="{ height: '40px' }"
      variant="plain"
      density="compact"
    ></v-text-field>
    <v-divider></v-divider>
    <v-label class="ml-3 mt-2"
      >Enter your password <span class="text-red ml-1">*</span></v-label
    >
    <v-text-field
      v-model="password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append="togglePasswordVisibility"
      class="bg-white rounded-xl ma-3 px-2 text-center font-weight-light"
      :style="{ height: '40px' }"
      variant="plain"
      density="compact"
    ></v-text-field>
    <v-divider></v-divider>
    <v-btn
      class="bg-white rounded-xl ma-3 pl-2 text-center font-weight-light bg-red flex-grow-1"
      width="90%"
      >Log-in</v-btn
    >
    <v-divider></v-divider>
    <div class="d-flex">
      <p class="mt-2 ml-4 text-red text-caption">?Lost your password</p>
      <v-spacer></v-spacer>
      <div class="d-flex">
        <v-label class="mt-n8 text-caption mr-n2">Remeber me</v-label>
        <v-checkbox
          v-model="rememberMe"
          class="text-caption mt-n2"
        ></v-checkbox>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="account d-flex align-center flex-column w-100 mt-10">
      <v-icon size="xxx-large">mdi-account-alert-outline</v-icon>
      <p>No account yet</p>
      <a href="#" class="text-red">Create an account</a>
    </div>
  </div>
</template>
<script setup>
import Headline from './Headline.vue';
const rememberMe = ref(false);
const showPassword = ref(false);
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
const password = ref();
</script>
