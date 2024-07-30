<template>
  <v-list class="list text-white">
    <v-list-item-group>
      <v-list-item
        ><v-list-item-action>
          <v-text-field
            light
            @keyup.enter="sss"
            label="Search for products"
            v-model="searchQuery"
            append-outer-icon="mdi-magnify"
            ><v-bnt @click="sss" class="input"
              ><v-icon color="white">mdi-magnify</v-icon></v-bnt
            ></v-text-field
          ></v-list-item-action
        ></v-list-item
      >
      <v-list-item>
        <div class="d-flex justify-end text-white">
          <div class="mx-4">
            <p>dsfsdfasfsd</p>
            <p>dsfadsfsdaf</p>
          </div>
          <div>
            <img
              src="/public/437523928_403353212455742_52635376963353824_n.jpg"
              width="50px"
              height="50"
              alt=""
            />
          </div>
        </div>
        <hr color="gray" />
      </v-list-item>
      <v-list-item>
        <v-list-item-action  class="listitem">
          <button class="btn" to="home">Hodme</button>
        </v-list-item-action>
       
      </v-list-item>
      <v-list-item>
        <v-list-item-action class="listitem">
          <button class="btn" to="home">Hodme</button>
        </v-list-item-action>
        
      </v-list-item>
      <v-list-item>
        <v-list-item-action class="listitem">
          <button class="btn" to="home">Hodme</button>
        </v-list-item-action>
      </v-list-item>
    
    </v-list-item-group>
  </v-list>
</template>
<script setup>
const searchQuery = ref();
const sss = () => {
  console.log("Ssss");
  console.log(searchQuery.value);
  searchQuery.value = "";
};
</script>
<style scoped>

.input {
  position: relative;
  left: 180px;
  bottom: 7.5px;
}
img {
  border-radius: 10px;
}
.btn:hover {
  color: rgb(188, 107, 49);
}
.hr{
    height: px;
    color: rgb(210, 4, 142) !important;
    background-color: rgb(251, 251, 251) !important;
}
.listitem::before{
    content: "";
    position: absolute;
    bottom: 10px;
    height: 1px;
    width: 100%;
    background-color: rgb(80, 80, 82);
}
</style>
