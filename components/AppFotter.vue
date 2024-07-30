<template>
    <v-app>
      <v-app-bar  app style="background-color:transparent;">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="d-inline-block d-md-none"></v-app-bar-nav-icon>
        <v-toolbar-title class="nav"><img src="/public/437523928_403353212455742_52635376963353824_n.jpg" alt=""></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text class="d-none d-md-inline-block" to="/">Home</v-btn>
        <v-btn text class="d-none d-md-inline-block" to="/about">About</v-btn>
        <v-btn text class="d-none d-md-inline-block" to="/contact">Contact</v-btn>
      </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        app
        temporary
      >
        <v-list nav dense>
          <v-list-item link to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/contact">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
      };
    },
  };
  </script>
  
  <style scoped>
  .nav{
    height: 100px;
  }
  .nav img{
    height: 100px;
    background-size: cover;
    border-radius: 50%;
  }
  </style>