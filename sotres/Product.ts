import { defineStore } from "pinia";
import type { product } from "~/types/Product";
export const useUserStore = defineStore("user", {
  state: (): product => ({
    product: {
      WheyProtain: [
        {
          id: 1,
          name: "WHEY PROTIEN OREO 1.5k",
          price: 100,
          imgs: [
            "/_nuxt/assets/imges/products/WheyPortain/Picsart_24-01-26_06-54-21-965.png",
            "/_nuxt/assets/imges/products/WheyPortain/IMG_20240221_020330-768x947.png",
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
          id: 2,
          name: "CASEIN PROTEIN STRWPERRY",
          price: 1000,
          imgs: [
            "/_nuxt/assets/imges/products/WheyPortain/IMG_20240126_055846.png",
            "/_nuxt/assets/imges/products/WheyPortain/IMG_20240208_160203.png",
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
          id: 4,
          name: "CASEIN PROTEIN CHOCOLATE",
          price: 1000,
          imgs: [
            "/_nuxt/assets/imges/products/WheyPortain/IMG_20240126_061031.png",
            "/_nuxt/assets/imges/products/WheyPortain/IMG_20240208_160218-768x1032.png",
            "/_nuxt/assets/imges/products/WheyPortain/IMG_20240208_160218-768x1032.png",
            "/_nuxt/assets/imges/products/WheyPortain/IMG_20240208_160218-768x1032.png",
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
          id: 2,
          name: "WHEY PROTIEN STRWPERRY 1.5kg",
          price: 1000,
          imgs: [
            "/_nuxt/assets/imges/products/WheyPortain/Picsart_24-01-26_07-02-43-283.png",
            "/_nuxt/assets/imges/products/WheyPortain/IMG_20240208_160203.png",
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
          id: 2,
          name: "WHEY STROPERRY CHEESE CAKE 1kg",
          price: 1000,
          imgs: [
            "/_nuxt/assets/imges/products/WheyPortain/IMG_20240126_054636.png",
            "/_nuxt/assets/imges/products/WheyPortain/IMG_20240208_160203.png",
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
      ],
      PreWorkout: [
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
        },
        {
          id: 3,
          name: "RUSH PUMP LEMON MINT 30 SERVING",
          price: 750,
          imgs: [
            "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-26_05-03-50-535.png",
            "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-26_05-04-39-687-860x1290.png",
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
          id: 4,
          name: "RUSH PUMP WATERMELON 30 SERVING",
          price: 500,
          imgs: [
            "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-26_04-57-48-902-430x645.png",
            "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-26_04-59-55-769-430x645.png",
            "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-25_03-10-14-212-1.png",
            "/_nuxt/assets/imges/products/PreWorkout/Picsart_24-04-26_04-59-55-769-430x645.png",
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
      Accessories: [
        {
          id: 1,
          name: "HANDLITING",
          price: 1206,
          imgs: [
            "/_nuxt/assets/imges/products/Accessories/4126XBijESL._AC_SL1500_-313x300.jpg",
            "/_nuxt/assets/imges/products/Accessories/51FqvoM4LgL._AC_SL1500_.jpg",
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
          id: 1,
          name: "LIFTING LETING",
          price: 1206,
          imgs: [
            "/_nuxt/assets/imges/products/Accessories/Picsart_23-02-11_20-20-42-190-860x860.png",
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
          name: "SHAKER 70ML",
          price: 2500,
          imgs: [
            "/_nuxt/assets/imges/products/Accessories/Picsart_24-01-26_08-44-09-221-1024x1536.png",
            "/_nuxt/assets/imges/products/Accessories/Picsart_24-01-26_08-45-13-217-1024x1536.png",
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
      Creatine: [
        {
          id: 1,
          name: "CREATINE MONOHYDRATE 60 SERVING",
          price: 350,
          imgs: [
            "/_nuxt/assets/imges/products/Creatine/Picsart_24-08-12_09-45-27-894.png",
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
          id: 1,
          name: "CREATINE MONOHYDRATE 30 SERVING",
          price: 350,
          imgs: [
            "/_nuxt/assets/imges/products/Creatine/Picsart_24-08-12_09-46-11-258.png",
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

      Recovery: [],
      WeightGainerCarbs: [
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
          id: 2,
          name: "BULK GAINER CHOCOLATE ICE CREAM 4KG",
          price: 1500,
          imgs: [
            "/_nuxt/assets/imges/products/WeightGainerCarbs/Picsart_24-01-26_07-47-00-836.png",
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
          offer: "-7%",
          quickview: false,
          icons: {
            quickview: false,
            compare: false,
            wishlist: false,
          },
        },
        {
          id: 3,
          name: "CARPOTINE MANGO",
          price: 1500,
          imgs: [
            "/_nuxt/assets/imges/products/WeightGainerCarbs/Picsart_24-03-26_17-02-13-476.png",
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
          name: "CARBO GAINER WATERMELON 1kg",
          price: 1500,
          imgs: [
            "/_nuxt/assets/imges/products/WeightGainerCarbs/Picsart_23-02-10_08-46-30-149.png",
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
          id: 5,
          name: "CARBO GAINER STRAWPERRY 1kg",
          price: 1500,
          imgs: [
            "/_nuxt/assets/imges/products/WeightGainerCarbs/Picsart_23-02-08_13-47-57-062.png",
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
          id: 6,
          name: "CARPOTINE CHOCOLATE 1.5kg",
          price: 1500,
          imgs: [
            "/_nuxt/assets/imges/products/WeightGainerCarbs/Picsart_24-03-26_17-00-04-216.png",
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
          name: "BULK GAINER VANILLA 4KG",
          price: 1500,
          imgs: [
            "/_nuxt/assets/imges/products/WeightGainerCarbs/Picsart_24-01-26_08-23-34-882.png",
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
