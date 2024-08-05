<template>
  <div>
    <v-container class="overflow-hidden"> 
      <v-row >
        <v-col cols="5" class="text-right text-uppercase ">
          <p class="fakeTitle text-uppercase text-h2">{{ props.title }}</p>
        </v-col>
        <v-col class="text-right">
          <p class="text-gray text-uppercase opacity-50 text-h6">
            pro performance
          </p>
          <p class="text-uppercase">{{ props.SectionContent }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string;
  SectionContent: string;
}
const props = defineProps<Props>();
</script>
<style scoped>
.fakeTitle {
  transform: scale(2);
  opacity: 0.05;
}
</style>
