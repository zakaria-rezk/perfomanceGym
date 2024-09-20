<template>
  <div>
    <pageTitle></pageTitle>
    <v-container>
      <v-row>
        <v-col> <div class="rounded-xl map" id="map"></div></v-col>
        <v-col cols="12" md="6">
          <p class="text-h5 ma-5">
            <a
              href="https://wa.me/201221555986"
              target="_blank"
              class="text-decoration-none"
            >
              <v-icon size="large" class="text-orange-accent-4"
                >mdi-phone</v-icon
              >
              +201221555986
            </a>
          </p>
          <p class="text-h5 ma-5">
            <a
              href="https://wa.me/201221555986"
              target="_blank"
              class="text-decoration-none"
            >
              <v-icon class="text-orange-accent-4" size="large"
                >mdi-phone</v-icon
              >
              +201221555986
            </a>
          </p>
          <p class="text-h5 ma-5">
            <a
              href="https://www.linkedin.com/in/zakaria-rezk-1a8412215/"
              target="_blank"
              class="text-decoration-none"
            >
              <v-icon class="text-orange-accent-4" size="large"
                >mdi-linkedin</v-icon
              >
              Zakaria Rezk
            </a>
          </p>
        </v-col></v-row
      >
    </v-container>
  </div>
</template>

<script setup lang="ts">
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Create a ref to hold the map instance
const map = ref<L.Map | null>(null);

// Function to initialize the map
const initMap = () => {
  // Initialize the map and set its view
  map.value = L.map("map").setView([29.9987104, 31.1547549], 13);

  // Add a tile layer to the map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 10,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map.value);

  // Add a marker
  L.marker([26.0654385, 32.2943052])
    .addTo(map.value)
    .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
    .openPopup();
};

// Handle map resize
const handleResize = () => {
  if (map.value) {
    map.value.invalidateSize();
  }
};

// Lifecycle hooks
onMounted(() => {
  initMap();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style>
.map {
  height: 300px; /* Set the height of the map */
  /* Set the width of the map */
}
</style>
