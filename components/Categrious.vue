<template>
  <div ref="root">
    <v-container>
      <SectionTitle title="categrious" SectionContent="product categrious" />
      <v-row class="overflow-hidden container">
        <v-col
          v-for="(pro, index) in products"
          :key="pro.id"
          :class="{ brnach: pro.bransh }"
          md="3"
          cols="12"
          @mouseenter="raises(index)"
          @mouseleave="lowers(index)"
          class="col rounded flex-grow-1 overflow-hidden text-uppercase position-relative cursor-pointer"
        >
          <LzyLoadingImg :src="pro.img" :alt="pro.alt" :object="false" v-if="intersecting" :hot="false" />
          <p
            class="position text-white text-h5"
            ref="title"
            :class="{ title: pro.bransh }"
          >
            {{ pro.title }}
          </p></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
const title = ref<HTMLDivElement[]>([]);
  const { products } = useProductCategories();
const raises = (index: number) => {
  if (!title.value || !title.value[index].closest(".brnach")) return;

  title.value[index].style.transform = "translate(-17%,-56px)";
};
const lowers = (index: number) => {
  if (!title.value || !title.value[index].closest(".brnach")) return;

  title.value[index].style.transform = "translate(-17%,-50%)";
};



const observer = ref();
const intersecting = ref<boolean>(false);
const obs = (entries: any) => {
  console.log("done");

  entries.forEach((element: any) => {
    if (!element.isIntersecting) return;
    intersecting.value = element.isIntersecting;
  });
};
const root = ref<HTMLDivElement>();
onMounted(() => {
  console.log(root.value);
  observer.value = new IntersectionObserver(obs, {
    root: null,
    threshold: 0.1,
  });
  observer.value.observe(root.value);
});
const stopObserving = () => {
  if (observer.value && root.value) {
    observer.value.unobserve(root.value);
    observer.value.disconnect();
    console.log("Stopped observing");
  }
};

onUnmounted(() => {
  console.log("unmounted");
});
</script>
<style scoped>
.container {
  position: relative;
}
.brnach::before {
  content: "shop now";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  opacity: 0;
  width: 150px;
  background-color: rgb(241, 239, 243);
  transform: translate(-50%, -50%);
  height: 40px;
  text-align: center;
  border-radius: 10px;
  padding-top: 7px;
}

.position {
  position: relative;
  bottom: 40%;
  transform: translate(-17%, -50%);
  left: 20%;
  font-weight: 900;
  transition: all 1s;
  text-align: center;
}

@keyframes slide-downup {
  from {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -200%);
  }
}
@keyframes slide-topdown {
  from {
    opacity: 1;
    transform: translate(-50%, -200%);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
}

@media (min-width: 768px) {
  .brnach:hover::before {
    display: inline-block !important;
    animation: slide-downup 0.3s ease-in-out forwards;
  }
  .brnach:not(:hover)::before {
    animation: slide-topdown 0.3s ease-in-out forwards;
  }
  .col:hover {
    transform: scale(1.1);
  }
}
</style>
