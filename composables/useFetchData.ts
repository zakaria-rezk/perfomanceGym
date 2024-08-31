import type { SpecialProduct } from "~/types/SpecialProduct";
export function useFetchData() {
  // act as getting data from api url

  const PopurlaProducts: SpecialProduct[] = [
    {
      id: 1,
      name: "BULK GAINER MANGO 1kg",
      price: 500,
      imgs: [
        "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
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
    },
    {
      id: 6,
      name: "RUSH PUMP LEMON MINT 10",
      price: 100,
      imgs: [
        "/_nuxt/assets/imges/products/Picsart_24-04-26_05-03-50-535-150x225.png",
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
      id: 3,
      name: "BULK GAINER MANGO 5kg",
      price: 350,
      imgs: [
        "/_nuxt/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png",
      ],
      category: "Creatine",
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
      id: 2,
      name: "ISOLATE MOKKA 60SERV",
      price: 1400,
      imgs: [
        "/_nuxt/assets/imges/GymAccessories/Picsart_23-02-11_20-20-42-190-300x300.png",
      ],
      category: "Recovery",
      details:
        "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: null,
      OnSale: false,
      InStock: true,
      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 2,
      name: "ISOLATE MOKKA 60SERV2",
      price: 1800,
      imgs: [
        "/_nuxt/assets/imges/GymAccessories/Picsart_23-02-11_20-20-42-190-300x300.png",
      ],
      category: "Recovery",
      details:
        "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: null,
      OnSale: false,
      InStock: true,
      quickview: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
    {
      id: 1,
      name: "BULK GAINER MANGO ",
      price: 1500,
      imgs: [
        "/_nuxt/assets/imges/products/Picsart_24-04-26_05-04-39-687.png",
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
    {
      id: 7,
      name: "RUSH PUMP LEMON MINT 20",
      price: 1000,
      imgs: [
        "/_nuxt/assets/imges/products/Picsart_24-04-26_05-03-50-535-150x225.png",
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
      id: 8,
      name: "RUSH PUMP LEMON MINT 30",
      price: 300,
      imgs: [
        "/_nuxt/assets/imges/products/Picsart_24-04-26_05-03-50-535-150x225.png",
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


  ];
  const data = ref<SpecialProduct[]>(PopurlaProducts);

  return data.value;
}
