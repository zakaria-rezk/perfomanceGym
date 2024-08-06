<template>
  <v-container class="position-relative">
    <SectionTitle title="special" SectionContent="FEATURED PRODUCTS" />
    <v-row>
      <v-col
        v-for="pro in productCategories"
        :key="pro.id"
        cols="12"
        md="3"
        class="col"
      >
        <div>
          <LzyLoadingImg :src="pro.img" :alt="pro.alt" />
        </div>
        <div class="text-right">
          <p>sss</p>
          <p>ssss</p>
          <p>sss</p>
        </div>
        <v-btn class="bg-blue w-100"
          ><div>
            <p class="cart">add to cart</p>
            <v-icon class="icon">mdi-cart-outline</v-icon>
          </div></v-btn
        >
        <hr class="w-100">
        <div class="tips">
          <p>sfsdfsdfsdfds</p>
          <p>sfsdfsdfsdfds</p>
          <p>sfsdfsdfsdfds</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.tips {
  margin: 1px;
  position: absolute;
  z-index: 100000;
  display: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  left: 0;
  background-color: rgb(252, 249, 249);
  border-radius: 0 0 10px 10px;
  transition: all 0.5s;
}
.position-relative {
  position: sticky;
}
.col {
  background-color: rgb(252, 252, 252);
  cursor: pointer;
  position: relative;
  transition: all 0.5s;
  z-index: 0;
}
.col:hover {
  position: relative;
  background-color: #fff;
  transform: scaleY(1.1);
  z-index: 100;
}
.col:hover .tips {
  display: block !important;
}
.icon {
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.5s;
}
.cart {
  transform: translateY(10px);
  transition: all 0.5s;
}
button:hover .icon {
  transform: translateY(-50%);
  opacity: 1;
}
button:hover .cart {
  transform: translateY(100%);
  opacity: 0;
}
</style>
<script setup lang="ts">
type product = {
  id: number;
  title: string;
  bransh: boolean;
  img: string;
  alt: string;
};
type ProductCategories = product[];
const productCategories: ProductCategories = [
  {
    id: 1,
    title: "PRE WORKOUT",
    bransh: false,
    img: "/_nuxt/assets/imges/Categrious/1641481364410-860x484.jpeg",
    alt: "Image of Product 1",
  },
  {
    id: 2,
    title: "CREATINE",
    bransh: false,
    img: "/_nuxt/assets/imges/Categrious/young-man-preparing-his-protein-drink-royalty-free-image-618752694-1551094694-700x467.jpeg",
    alt: "Image of Product 2",
  },
  {
    id: 3,
    title: "WEIGHT GAINER & CARBS",
    bransh: true,
    img: "/_nuxt/assets/imges/Categrious/sport-inst-1.jpg",

    alt: "Image of Product 3",
  },
  {
    id: 4,
    title: "WHEY PROTEIN",
    bransh: true,
    img: "/_nuxt/assets/imges/Categrious/on-understanding-optimum-nutrition-gold-standard-100-whey-protein_Image_01.jpeg",

    alt: "Image of Product 4",
  },
  {
    id: 5,
    title: "VITAMINS",
    bransh: false,
    img: "/_nuxt/assets/imges/Categrious/blog-preworkout.jpeg",
    alt: "Image of Product 5",
  },
  {
    id: 6,
    title: "ACCESSORIES",
    bransh: false,
    img: "/_nuxt/assets/imges/Categrious/best-fitness-equipment-brands_header.jpeg",
    alt: "Image of Product 6",
  },
  {
    id: 7,
    title: "WATER SHAKER",
    bransh: true,
    img: "/_nuxt/assets/imges/Categrious/protein-shaker-bottles-1630513844-860x574.jpeg",
    alt: "Image of Product 7",
  },
  {
    id: 8,
    title: "RECOVERY",
    bransh: true,
    img: "/_nuxt/assets/imges/Categrious/Muscular-Lean-And-Fit-Man-Resting-and-Drinking-Supplement-Drink-After-A-Workout-860x476.webp",

    alt: "Image of Product 8",
  },
];
</script>
