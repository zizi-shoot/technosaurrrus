<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :alt="product.title" :src="product.image">
    </a>
    <h3 class="catalog__title">
      <a href="#">{{ product.title }}</a>
    </h3>
    <span class="catalog__price">{{ gapSeparatedPrice }} ₽</span>
    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label">
          <input v-model="color" class="colors__radio sr-only" type="radio" value="#73b6ea">
          <span class="colors__value" style="background-color: #73b6ea;"></span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input v-model="color" class="colors__radio sr-only" type="radio" value="8be000">
          <span class="colors__value" style="background-color: #8be000;"></span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input v-model="color" class="colors__radio sr-only" type="radio" value="#222">
          <span class="colors__value" style="background-color: #222;"></span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>

export default {
  data() {
    return {
      color: '#73b6ea',
    };
  },
  props: ['product'],
  computed: {
    gapSeparatedPrice() {
      return this.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
  },
};
</script>

<style scoped>

</style>
