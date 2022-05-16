<template>
  <li class="catalog__item">
    <router-link :to="{ name: 'product', params: { id: product.id } }" class="catalog__pic">
      <img :alt="product.title" :src="product.image">
    </router-link>
    <h3 class="catalog__title">
      <a href="#">{{ product.title }}</a>
    </h3>
    <span class="catalog__price">{{ product.price | formatNumber }} ₽</span>
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
import { formatNumber } from '@/helpers';

export default {
  data() {
    return {
      color: '#73b6ea',
    };
  },
  props: ['product'],
  filters: {
    formatNumber,
  },
};
</script>

<style scoped>

</style>
