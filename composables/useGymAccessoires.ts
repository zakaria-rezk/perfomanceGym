import type { SpecialProduct } from "~/types/SpecialProduct";
export function useGymAccessoires() {
  // act as getting data from api url

  const products: SpecialProduct[] = [
    {
      id: 1,
      name: "HANDLITING",
      price: 150,
      imgs: [
        "/_nuxt/static/images/GymAccessories/Picsart_24-01-26_08-45-13-217-1024x1536.png",
        "51FqvoM4LgL._AC_SL1500_.jpg",
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
      imgs: ["/images/GymAccessories/4126XBijESL._AC_SL1500_-313x300.jpg"],
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
        "/images/GymAccessories/4126XBijESL._AC_SL1500_-313x300.jpg",
        "/images/GymAccessories/4126XBijESL._AC_SL1500_-313x300.jpg",
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
