<template>
  <div>
    <pageTitle
      ><div
        class="position-absolute W-100 d-none d-lg-flex list bg-transparent text-center text-h6"
      >
        <nuxt-link
          to="/cart"
          class="text-decoration-none text-grey-lighten-2 d-flex px-1"
          >SHOPPING CART</nuxt-link
        >
        <span class="mx-2 text-grey"> / </span>
        <nuxt-link
          to="/checkout"
          class="text-decoration-none text-grey-lighten-2 d-flex px-1"
          >CHECK OUT <span class="mx-2"> </span
        ></nuxt-link>
      </div>
    </pageTitle>
  </div>
</template>
<style scoped>
.router-link-active,
.router-link-exact-active {
  text-decoration: underline !important;
  text-decoration-color: orange !important;
}
.list {
  top: 70%;
  left: 50%;
  transform: translate(-80%, -50%);
}
</style>
>
