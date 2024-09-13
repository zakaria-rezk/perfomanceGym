<template>
  <div>
    <v-card class="mx-2 bg-grey-lighten-3 my-5"
      ><h1 class="text-center my-5">Your Order</h1>
      <div class="rounded eveletion-5 bg-grey-lighten-5">
        <div class="proWrap">
          <p class="name">name</p>
          <p class="price">price</p>
        </div>
        <v-divider></v-divider>
        <div class="proWrap">
          <p class="name">name</p>
          <p class="price">price</p>
        </div>
        <v-divider></v-divider>
        <div class="proWrap">
          <p class="name">name</p>
          <p class="price">price</p>
        </div>
        <v-divider></v-divider>
        <div class="proWrap">
          <p class="name">name</p>
          <p class="price">price</p>
        </div>
        <v-divider></v-divider>
      </div>
      <div class="radio">
        <v-radio-group class="my-5">
          <v-radio label="Paypal" value="paypal"></v-radio>
          <v-radio label="Stripe" value="strip"></v-radio>
        </v-radio-group>
      </div>
    </v-card>
  </div>
</template>
<style scoped>
.proWrap {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 1rem;
}
</style>
