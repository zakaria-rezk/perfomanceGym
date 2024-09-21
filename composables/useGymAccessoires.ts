import type { SpecialProduct } from "~/types/SpecialProduct";
export function useGymAccessoires() {
  // act as getting data from api url

  const products: SpecialProduct[] = [
    {
      id: 1,
      name: "HANDLITING",
      price: 150,
      imgs: [
        "https://master--precious-medovik-187566.netlify.app/imges/4126XBijESL._AC_SL1500_-313x300.jpg",
        "https://master--precious-medovik-187566.netlify.app/_nuxt/static/imges/51FqvoM4LgL._AC_SL1500_.jpg",
      ],
      category: "Accessories",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: false,
      OnSale: true,
      InStock: true,
      quickview: false,
      compare: false,
      selected: false,
      wishlist: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
        cart: false,
      },
      cartQuanity: 0,
      next: { name: "CASEIN PROTEIN STRWPERRY", category: "WheyProtain" },
      prev: {
        name: "CITRULLINE MALATE 60 SERVING",
        category: "PreWorkout",
      },
    },
    {
      id: 2,
      name: "LIFTING LETING",
      price: 250,
      imgs: ["/imges/Picsart_23-02-11_20-20-42-190-860x860.png"],
      category: "Accessories",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: false,
      OnSale: true,
      InStock: true,
      quickview: false,
      compare: false,
      selected: false,
      wishlist: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
        cart: false,
      },
      cartQuanity: 0,
      next: {
        name: "WHEY STROPERRY CHEESE CAKE 1kg",
        category: "WheyProtain",
      },
      prev: { name: "BULK GAINER MANGO", category: "WeightGainerCarbs" },
    },
    {
      id: 3,
      name: "SHAKER 70ML",
      price: 200,
      imgs: [
        "https://master--precious-medovik-187566.netlify.app/_nuxt/imges/Picsart_24-01-26_08-44-09-221-1024x1536.png",
        "https://master--precious-medovik-187566.netlify.app/_nuxt/static/imges/Picsart_24-01-26_08-45-13-217-1024x1536.png",
      ],
      category: "Accessories",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: false,
      OnSale: true,
      InStock: true,
      quickview: false,
      compare: false,
      selected: false,
      wishlist: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
        cart: false,
      },
      cartQuanity: 0,
      next: {
        name: "BULK GAINER VANILLA 4KG",
        category: "WeightGainerCarbs",
      },
      prev: {
        name: "WHEY STROPERRY CHEESE CAKE 1kg",
        category: "WheyProtain",
      },
    },
  ];
  const data = ref<SpecialProduct[]>(products);

  return data.value;
}
