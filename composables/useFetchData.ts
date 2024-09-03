import type { SpecialProduct } from "~/types/SpecialProduct";
export function useFetchData() {
  // act as getting data from api url

  const PopurlaProducts: SpecialProduct[] = [
    {
      id: 1,
      name: "CARPOTINE STRAWPERRY 1.5kg",
      price: 1500,
      imgs: [
        "/_nuxt/assets/imges/products/WeightGainerCarbs/Picsart_24-03-26_17-07-10-921.png",

        "/_nuxt/assets/imges/products/WeightGainerCarbs/IMG_20240126_072909-860x1052.png",
        "/_nuxt/assets/imges/products/WeightGainerCarbs/IMG_20240126_072909.png",
      ],
      category: "WeightGainerCarbs",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: true,
      OnSale: true,
      InStock: true,
      offer: "-11%",
      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
      next: { name: "CASEIN PROTEIN CHOCOLATE", category: "WheyProtain" },
      prev: { name: "CARPOTINE MANGO", category: "WeightGainerCarbs" },
    },
    {
      id: 8,
      name: "BULK GAINER MANGO",
      price: 1500,
      imgs: [
        "/_nuxt/assets/imges/products/WeightGainerCarbs/Picsart_24-01-26_07-57-49-568.png",
        "/_nuxt/assets/imges/products/WeightGainerCarbs/IMG_20240126_074807.png",
        "/_nuxt/assets/imges/products/WeightGainerCarbs/IMG_20240126_072936-768x1014.png",
        "/_nuxt/assets/imges/products/WeightGainerCarbs/IMG_20240126_072936-768x1014.png",
      ],
      category: "WeightGainerCarbs",
      details:
        "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: true,
      OnSale: true,
      InStock: true,
      offer: "-15%",
      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
      next: { name: "LIFTING LETING", category: "Accessories" },
      prev: { name: "WHEY PROTIEN OREO 1.5k", category: "WheyProtain" },
    },
    {
      id: 1,
      name: "WHEY PROTIEN OREO 1.5k",
      price: 100,
      imgs: [
        "/_nuxt/assets/imges/products/WheyPortain/Picsart_24-01-26_06-54-21-965.png",
        "/_nuxt/assets/imges/products/WheyPortain/IMG_20240221_020330-768x947.png",
      ],
      category: "WheyProtain",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      OnSale: true,
      InStock: true,
      offer: false,
      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
      next: { name: "BULK GAINER MANGO", category: "WeightGainerCarbs" },
      prev: {
        name: "BULK GAINER VANILLA 4KG",
        category: "WeightGainerCarbs",
      },
    },
    {
      id: 2,
      name: "CASEIN PROTEIN STRWPERRY",
      price: 1000,
      imgs: [
        "/_nuxt/assets/imges/products/WheyPortain/IMG_20240126_055846.png",
        "/_nuxt/assets/imges/products/WheyPortain/IMG_20240208_160203.png",
        "/_nuxt/assets/imges/products/WheyPortain/1-e1676102590559-1192x1536.png",
      ],
      category: "WheyProtain",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      OnSale: true,
      InStock: true,
      offer: "-50%",

      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
      next: {
        name: "CARBO GAINER STRAWPERRY 1kg",
        category: "WeightGainerCarbs",
      },
      prev: {
        name: "HANDLITING",
        category: "Accessories",
      },
    },
    {
      id: 1,
      name: "CITRULLINE MALATE 60 SERVING",
      price: 500,
      imgs: [
        "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-02-23_21-50-20-117-621x800 (1).png",
        "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-26_05-04-39-687-860x1290.png",
        "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-26_05-04-39-687-860x1290.png",
      ],
      category: "PreWorkout",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: true,
      OnSale: true,
      InStock: true,
      offer: "-7%",
      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
      next: { name: "HANDLITING", category: "Accessories" },
      prev: {
        name: "RUSH PUMP WATERMELON 30 SERVING",
        category: "PreWorkout",
      },
    },
    {
      id: 1,
      name: "HANDLITING",
      price: 1206,
      imgs: [
        "/_nuxt/assets/imges/products/Accessories/4126XBijESL._AC_SL1500_-313x300.jpg",
        "/_nuxt/assets/imges/products/Accessories/51FqvoM4LgL._AC_SL1500_.jpg",
      ],
      category: "Accessories",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: false,
      OnSale: true,
      InStock: true,
      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
      next: { name: "CASEIN PROTEIN STRWPERRY", category: "WheyProtain" },
      prev: {
        name: "CITRULLINE MALATE 60 SERVING",
        category: "PreWorkout",
      },
    },
    {
      id: 2,
      name: "BETA-ALANINE 60 SERVING",
      price: 500,
      imgs: [
        "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-02-23_22-09-52-372.png",
        "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-25_03-10-14-212-1.png",
      ],
      category: "PreWorkout",
      details:
        "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: true,
      OnSale: true,
      InStock: true,
      offer: "-7%",
      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
      next: {
        name: "RUSH PUMP LEMON MINT 30 SERVING",
        category: "PreWorkout",
      },
      prev: {
        name: "CITRULLINE MALATE 60 SERVING",
        category: "PreWorkout",
      },
    },

    {
      id: 1,
      name: "CREATINE MONOHYDRATE 60 SERVING",
      price: 350,
      imgs: [
        "/_nuxt/assets/imges/products/Creatine/Picsart_24-08-12_09-45-27-894.png",
      ],
      category: "Creatine",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      OnSale: true,
      InStock: true,
      offer: false,

      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
      next: {
        name: "WHEY PROTIEN STRWPERRY 1.5kg",
        category: "WheyProtain",
      },
      prev: {
        name: "CARBO GAINER STRAWPERRY 1kg",
        category: "WeightGainerCarbs",
      },
    },
  ];
  const data = ref<SpecialProduct[]>(PopurlaProducts);

  return data.value;
}
