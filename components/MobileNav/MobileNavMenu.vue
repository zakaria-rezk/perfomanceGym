<template>
  <v-list class="list text-white">
   
      <v-list-item
        ><v-list-item-action>
          <v-text-field
            light
            @keyup.enter="search"
            label="Search for products"
            v-model="searchQuery"
            append-outer-icon="mdi-magnify"
            ><v-btn @click="search" class="input"
              ><v-icon color="white">mdi-magnify</v-icon></v-btn
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
        <v-list-item-action class="listitem">
          <button class="btn" to="home">home</button>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-action class="listitem">
          <p>Categrious</p>

          <v-spacer></v-spacer>
          <button @click="showCategrious" ref="arrowBtn">
            <v-icon>mdi-chevron-right</v-icon>
          </button>
        </v-list-item-action>
        <v-list v-if="categrious" class="lsisst">
          <v-list-item class="lsist">
            <p class="l-p">elia rezk</p>
            <v-divider></v-divider>
            <p>elia rezk</p>
            <v-divider></v-divider>
            <p>elia rezk</p>
            <v-divider></v-divider>
            <p>elia rezk</p>
            <v-divider></v-divider>
          </v-list-item>
        </v-list>
      </v-list-item>
      <v-list-item>
        <v-list-item-action class="listitem">
          <button class="btn" to="home">Wishlist</button>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-action class="listitem">
          <button class="btn" to="home">Compare</button>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-action class="listitem">
          <button class="btn" to="home">Login/Register</button>
        </v-list-item-action>
      </v-list-item>
  
  </v-list>
</template>
<script setup lang="ts">
const categrious = ref<boolean>(false);
const arrowBtn = ref<HTMLDivElement | null>(null);
const showCategrious = () => {
  if (!arrowBtn.value) return;
  categrious.value = !categrious.value;
  arrowBtn.value.classList.toggle("rotate");
};
const searchQuery = ref<string | null>(null);
const search = () => {
  searchQuery.value = "";
};
</script>
<style scoped>
.l-p {
  margin: 2px 0;
}
.rotate {
  transform: rotate(-90deg);
  transition: all 0.3s ease-in-out;
  background-color: #ef6c00;
}
.lsist {
  transition: all 0.3s ease-in-out;
  animation: slide-topdown 0.5s none;
}
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

.listitem::before {
  content: "";
  position: absolute;
  bottom: 10px;
  height: 1px;
  width: 100%;
  background-color: rgb(80, 80, 82);
}
@keyframes slide-topdown {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
