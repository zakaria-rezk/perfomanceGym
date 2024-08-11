import { defineStore } from "pinia";
import type { product } from "~/types/Product";
export const useUserStore = defineStore("user", {
  state: () =>
    ({
      PreWorkout: [
        {
          id: 1,
          name: "BULK GAINER MANGO 4kg",
          price: 500,
          img: "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
          category: "rush",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: true,
          OnSale: true,
          InStock: true,
          offer: "-7%",
          icons: {
            quickview: false,
            compare: false,
            wishlist: false,
          },
        },
        {
          id: 1,
          name: "BULK GAINER MANGO 4kg",
          price: 500,
          img: "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
          category: "rush",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: true,
          OnSale: true,
          InStock: true,
          offer: "-7%",
          icons: {
            quickview: false,
            compare: false,
            wishlist: false,
          },
        },
        {
          id: 1,
          name: "BULK GAINER MANGO 4kg",
          price: 500,
          img: "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
          category: "rush",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: true,
          OnSale: true,
          InStock: true,
          offer: "-7%",
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
          img: "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
          category: "rush",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: true,
          OnSale: true,
          InStock: true,
          offer: "-7%",
          icons: {
            quickview: false,
            compare: false,
            wishlist: false,
          },
        },
      ],
      WheyPortain: [
        {
          id: 6,
          name: "RUSH PUMP LEMON MINT 30",
          price: 1000,
          img: "/_nuxt/assets/imges/products/Picsart_24-04-26_05-03-50-535-150x225.png",
          category: "whey brotain",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          OnSale: true,
          InStock: true,
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
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          OnSale: true,
          InStock: true,
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
          price: 500,
          img: "/_nuxt/assets/imges/products/Picsart_24-04-26_05-03-50-535-150x225.png",
          category: "whey brotain",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          OnSale: true,
          InStock: true,
          offer: null,
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
          name: "BULK GAINER MANGO 4kg",
          price: 350,
          img: "/_nuxt/assets/imges/products/Picsart_24-01-26_07-57-49-568-150x225.png",
          category: "bulk",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          OnSale: true,
          InStock: true,
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
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          OnSale: true,
          InStock: true,
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
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          OnSale: true,
          InStock: true,
          offer: null,
          icons: {
            quickview: false,
            compare: false,
            wishlist: false,
          },
        },
      ],
      Shaker: [
        {
          id: 3,
          name: "BULK GAINER MANGO 4kg",
          price: 986,
          img: "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
          category: "bulk",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
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
          img: "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
          category: "bulk",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
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
          price: 150,
          img: "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
          category: "bulk",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          offer: null,
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
          price: 100,
          img: "/_nuxt/assets/imges/GymAccessories/Picsart_23-02-11_20-20-42-190-300x300.png",
          category: "mokka",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          offer: null,
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
          img: "/_nuxt/assets/imges/GymAccessories/Picsart_23-02-11_20-20-42-190-300x300.png",
          category: "mokka",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          offer: null,
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
          img: "/_nuxt/assets/imges/GymAccessories/Picsart_23-02-11_20-20-42-190-300x300.png",
          category: "mokka",
          details:
            "Lorem ipsum is placeholder text commonly used in the graphic.",
          isHot: false,
          offer: null,
          icons: {
            quickview: false,
            compare: false,
            wishlist: false,
          },
        },
      ],
    } as product),
  getters: {},
  actions: {},
});
