import type { SpecialProduct } from "~/types/SpecialProduct";
export function useGymAccessoires() {
  // act as getting data from api url

  const products: SpecialProduct[] = [
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
  ];
  const data = ref<SpecialProduct[]>(products);

  return data.value;
}
