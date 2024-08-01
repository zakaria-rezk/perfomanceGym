<template>
  <div class="d-flex mt-5 mb-2 align-center" height="80px">
    <v-btn variant="plain" class="" @click="closeNav.changeNavBar">close<v-icon>mdi-close</v-icon></v-btn>
    <v-spacer></v-spacer>
    <p class="text-subtitle-1 text-uppercase mr-4">{{ props.title }}</p>
  </div>
</template>
<script setup lang="ts">
'import { inject } from "vue";'

interface CloseNav {
  changeNavBar: () => void;
}

const closeNav = inject<CloseNav>('changeNavBar');
interface Props {
  title: string;
}
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
}) as Props;

</script>
