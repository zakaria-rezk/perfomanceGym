import type { SpecialProduct } from "~/types/SpecialProduct";
export function useGymAccessoires() {
  // act as getting data from api url

  const products: SpecialProduct[] = [
    {
      id: 1,
      name: "BULK GAINER MANGO 4kg",
      price: 500,
      imgs: [
        "/_nuxt/assets/imges/GymAccessories/4126XBijESL._AC_SL1500_-313x300.jpg",
      ],
      category: "rush",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: true,
      offer: "-7%",
      quickview: false,
      InStock: false,
      OnSale: false,
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
      category: "mokka",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      offer: null,
      quickview: false,
      InStock: false,
      OnSale: false,
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

      imgs: [
        "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
      ],
      category: "bulk",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
      isHot: false,
      quickview: false,
      InStock: false,
      offer: null,
      OnSale: false,
      icons: {
        quickview: false,
        compare: false,
        wishlist: false,
      },
    },
  ];
  const data = ref<SpecialProduct[]>(products);

  return data.value;
}
