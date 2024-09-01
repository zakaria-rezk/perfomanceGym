import type { SpecialProduct } from "~/types/SpecialProduct";
export function useFetchData() {
  // act as getting data from api url

  const PopurlaProducts: SpecialProduct[] = [
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
      offer: null,

      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 2,
      name: "CASEIN PROTEIN CHOCOLATE",
      price: 1000,
      imgs: [
        "/_nuxt/assets/imges/products/WheyPortain/IMG_20240126_061031.png",
        "/_nuxt/assets/imges/products/WheyPortain/IMG_20240208_160203.png",
        "/_nuxt/assets/imges/products/WheyPortain/1-e1676102590559-1192x1536.png",
      ],
      category: "WheyProtain",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      OnSale: true,
      InStock: true,
      offer: null,

      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 3,
      name: "WHEY OREO 1kg",
      price: 1000,
      imgs: [
        "/_nuxt/assets/imges/products/WheyPortain/IMG_20240126_055056-700x1013.png",
        "/_nuxt/assets/imges/products/WheyPortain/IMG_20230306_021505-860x982.png",
        "/_nuxt/assets/imges/products/WheyPortain/1-e1676102590559-1192x1536.png",
      ],
      category: "WheyProtain",
      details:
        "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      OnSale: true,
      InStock: true,
      offer: null,

      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 1,
      name: "ARGININE AKG 60 SERVING",
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
    },
    {
      id: 4,
      name: "RUSH PUMP WATERMELON 30 SERVING",
      price: 500,
      imgs: [
        "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-26_04-57-48-902-430x645.png",
        "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-26_04-59-55-769-430x645.png",
        "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-26_04-59-55-769-430x645.png",
        "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-26_04-59-55-769-430x645.png",
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
      offer: null,

      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 1,
      name: "CREATINE MONOHYDRATE 30 SERVING",
      price: 350,
      imgs: [
        "/_nuxt/assets/imges/products/Creatine/Picsart_24-08-12_09-46-11-258.png",
      ],
      category: "Creatine",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      OnSale: true,
      InStock: true,
      offer: null,

      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },

    {
      id: 1,
      name: "PRO CARB STRAWPERRY",
      price: 1500,
      imgs: [
        "/_nuxt/assets/imges/products/WeightGainerCarbs/Picsart_24-03-26_17-07-10-921.png",
        "/_nuxt/assets/imges/products/WeightGainerCarbs/Picsart_24-01-26_07-57-49-568-150x225.png",
        "/_nuxt/assets/imges/products/WeightGainerCarbs/IMG_20240126_072909-860x1052.png",
        "/_nuxt/assets/imges/products/WeightGainerCarbs/IMG_20240126_072909.png",
      ],
      category: "WeightGainerCarbs",
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
    },
  ];
  const data = ref<SpecialProduct[]>(PopurlaProducts);

  return data.value;
}
