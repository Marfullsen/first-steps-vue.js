var app = new Vue({
  el:'#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ],
    sizes: [
      {
        sizeId: 1,
        sizeName: "S"
      },
      {
        sizeId: 2,
        sizeName: "M"
      },
      {
        sizeId: 3,
        sizeName: "L"
      },
      {
        sizeId: 4,
        sizeName: "XL"
      }
    ]
  }
})