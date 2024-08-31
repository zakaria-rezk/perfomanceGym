import { defineStore } from "pinia";
import type { product } from "~/types/Product";
export const useUserStore = defineStore("user", {
  state: (): product => ({
    product: {
      PreWorkout: [
        {
          id: 1,
          name: "BULK GAINER MANGO 1kg",
          price: 500,
          imgs: [
            "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
            "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
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
          id: 1,
          name: "BULK GAINER MANGO 2kg",
          price: 600,
          imgs: [
            "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
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
          id: 1,
          name: "BULK GAINER MANGO 3kg",
          price: 700,
          imgs: [
            "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
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
          id: 1,
          name: "BULK GAINER MANGO 4kg",
          price: 250,
          imgs: [
            "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
            "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
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
      ],
      WheyProtain: [
        {
          id: 6,
          name: "RUSH PUMP LEMON MINT 10",
          price: 100,
          imgs: [
            "/_nuxt/assets/imges/products/Picsart_24-04-26_05-03-50-535-150x225.png",
            "/_nuxt/assets/imges/products/Picsart_24-04-26_05-03-50-535-150x225.png",
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
          id: 6,
          name: "RUSH PUMP LEMON MINT 20",
          price: 1000,
          imgs: [
            "/_nuxt/assets/imges/products/Picsart_24-04-26_05-03-50-535-150x225.png",
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
          id: 6,
          name: "RUSH PUMP LEMON MINT 30",
          price: 300,
          imgs: [
            "/_nuxt/assets/imges/products/Picsart_24-04-26_05-03-50-535-150x225.png",
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
      ],
      Creatine: [
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
          id: 3,
          name: "BULK GAINER MANGO 6kg",
          price: 986,
          imgs: [
            "/_nuxt/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png",
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
          id: 3,
          name: "BULK GAINER MANGO 7kg",
          price: 900,
          imgs: [
            "/_nuxt/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png",
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
      ],
      Accessories: [
        {
          id: 3,
          name: "BULK GAINER MANGO 8kg",
          price: 1206,
          imgs: [
            "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
            "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
          ],
          category: "Accessories",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          offer: null,
          OnSale: true,
          InStock: true,
          quickview: false,
          icons: {
            quickview: false,
            compare: false,
            wishlist: false,
          },
        },
        {
          id: 3,
          name: "BULK GAINER MANGO 9kg",
          price: 1200,
          imgs: [
            "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
            "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
          ],
          category: "Accessories",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          offer: null,
          OnSale: true,
          InStock: true,
          quickview: false,
          icons: {
            quickview: false,
            compare: false,
            wishlist: false,
          },
        },
        {
          id: 3,
          name: "BULK GAINER MANGO 10kg",
          price: 2500,
          imgs: [
            "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
            "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
            "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
          ],
          category: "Accessories",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          offer: null,
          OnSale: true,
          InStock: true,
          quickview: false,
          icons: {
            quickview: false,
            compare: false,
            wishlist: false,
          },
        },
      ],
      Recovery: [
        {
          id: 2,
          name: "ISOLATE MOKKA 60SERV",
          price: 1400,
          imgs: [
            "/_nuxt/assets/imges/GymAccessories/Picsart_23-02-11_20-20-42-190-300x300.png",
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
          name: "ISOLATE MOKKA 60SERV3",
          price: 1700,
          imgs: [
            "/_nuxt/assets/imges/GymAccessories/Picsart_23-02-11_20-20-42-190-300x300.png",
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
      ],
      WeightGainerCarbs: [
        {
          id: 1,
          name: "BULK GAINER MANGO ",
          price: 1500,
          imgs: [
            "/_nuxt/assets/imges/products/Picsart_24-04-26_05-04-39-687.png",
            "/_nuxt/assets/imges/products/Picsart_24-04-26_05-04-39-687.png",
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
      ],
    },
  }),
  getters: {},
  actions: {},
});
