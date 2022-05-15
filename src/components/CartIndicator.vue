<template>
  <router-link :to="{ name: 'cart' }" aria-label="Корзина с товарами" class="header__cart">
    <svg fill="currentColor" height="21" width="30">
      <use xlink:href="#icon-cart"></use>
    </svg>
    <span aria-label="Количество товаров" class="header__count">{{ $store.state.cartProducts.length }}</span>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
