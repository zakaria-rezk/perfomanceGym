<template>
  <div class="w-100 bg-blue rounded-xl pa-2">
    <p class="text-md-h3 text-h6 text-upper-case">{{ Props.text }}</p>
  </div>
</template>
<script lang="ts" setup>
interface props {
  text: string;
}
const Props = defineProps<props>();
</script>
