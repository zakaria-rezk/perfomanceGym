import { ref } from 'vue';


type Product = {
  id: number;
  title: string;
  bransh: boolean;
  img: string;
  alt: string;
};


type ProductCategories = Product[];


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

// Create a ref to store the product categories
const products = ref<Product[]>(productCategories);

// Export a function to use the product categories
export function useProductCategories() {
  return {
    products,
  };
}