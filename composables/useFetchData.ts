import type { product } from "~/types/product";
export function useFetchData() {
  // act as getting data from api url
  

  const products: product[] = [
    {
      id: 1,
      name: "BULK GAINER MANGO 4kg",
      price: 500,
      img: "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
      category: "rush",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: true,
      offer: "-7%",
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 2,
      name: "ISOLATE MOKKA 60SERV",
      price: 1400,
      img: "/_nuxt/assets/imges/products/Picsart_24-02-21_01-59-10-412-150x225.png",
      category: "mokka",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: null,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 3,
      name: "BULK GAINER MANGO 4kg",
      price: 986,
      img: "/_nuxt/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png",
      category: "bulk",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: null,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 4,
      name: "RUSH PUMP LEMON MINT 30 ",
      price: 850,
      img: "/_nuxt/assets/imges/products/Picsart_24-02-21_02-01-26-953-150x225.png",
      category: "rush",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: "-11%",
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 5,
      name: "BULK GAINER ICE CREAM ",
      price: 1500,
      img: "/_nuxt/assets/imges/products/Picsart_24-02-23_21-22-40-677-150x193.png",
      category: "string",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: null,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 6,
      name: "RUSH PUMP LEMON MINT 30",
      price: 1000,
      img: "/_nuxt/assets/imges/products/Picsart_24-04-26_05-03-50-535-150x225.png",
      category: "whey brotain",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: null,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 7,
      name: "ARGININE AKG 60 SERVING",
      price: 1000,
      img: "/_nuxt/assets/imges/products/Picsart_24-04-26_04-57-48-902-150x225.png",
      category: "whey bortain",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: true,
      offer: null,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 8,
      name: "BULK GAINER STRAWPERRY",
      price: 520,
      img: "/_nuxt/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png",
      category: "wehy broatain",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: null,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
  ];
  const data = ref<product[]>(products);

  return data.value;
}
