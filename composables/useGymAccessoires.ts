import type { SpecialProduct } from "~/types/SpecialProduct";
export function useGymAccessoires() {
  // act as getting data from api url

  const products: SpecialProduct[] = [
    {
      id: 3,
      name: "BULK GAINER MANGO 8kg",
      price: 1206,
      imgs: [
        "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
        "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
      ],
      category: "Accessories",
      details: "Lorem ipsum is placeholder text commonly used in the graphic.",
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
      name: "BULK GAINER MANGO 2kg",
      price: 600,
      imgs: [
        "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
        "/_nuxt/assets/imges/products/Picsart_24-01-26_07-47-00-836-150x225.png",
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
      id: 3,
      name: "BULK GAINER MANGO 4kg",
      price: 986,

      imgs: [
        "/_nuxt/assets/imges/GymAccessories/Picsart_24-01-26_08-44-09-221-200x300.png",
      ],
      category: "PreWorkout",
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
