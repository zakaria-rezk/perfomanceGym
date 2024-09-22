<template>
  <teleport to="body">
    <div class="container" ref="container">
      <v-container class="content rounded-xl position-relative w-75">
        <v-row>
          <v-col cols="6">
            <img
              src="../static/images/products/WeightGainerCarbs/Picsart_23-02-10_08-46-30-149.png"
              class="img"
            />
          </v-col>
          <v-col cols="6">
            <div class="text-right">
              <v-btn variant="plain" size="xx-l" ref="emitBtn"
                ><v-icon>mdi-close</v-icon></v-btn
              >
            </div>
            <div>
              <p class="my-4 text-h5">{{ Props.product.name }}</p>
              <p class="text-red text-h4">{{ Props.product.price }} USD</p>
              <Cart :product="Props.product" />
              <v-divider class="my-5"></v-divider>
              <p class="text-left">Category: {{ Props.product.category }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </teleport>
</template>
<script setup lang="ts">
import type { SpecialProduct } from "~/types/SpecialProduct";

const container = ref<HTMLDivElement>();
interface props {
  product: SpecialProduct;
}

const emit = defineEmits<{
  (event: "closeModal"): void;
}>();

const Props = defineProps<props>();
const handleClickOutSide = (event: Event) => {
  if (!event.target) return;
  if (
    event.target === container.value ||
    event.target.classList.contains("mdi-close")
  ) {
    emit("closeModal");
  }
};
onBeforeMount(() => {
  document.addEventListener("click", handleClickOutSide);
  document.documentElement.style.overflowY = "hidden";
});

onBeforeUnmount(() => {
  document.documentElement.style.overflowY = "scroll";
  document.removeEventListener("click", handleClickOutSide);
});
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 10000;
  background-color: rgba(42, 42, 44, 0.8);
  overflow-y: scroll;
}
.content {
  bottom: 10px;
  background-color: rgb(255, 255, 255);
  top: 64px;
  height: 100%;
  transition: all 0.3s;
  transform: translateX(50px);

  animation: showmodal 0.3s ease-in-out forwards;
}
.img {
  width: 100%;
  height: 600px;
  object-fit: contain;
}
@keyframes showmodal {
  form {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
