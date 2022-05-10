<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#" @click.prevent="goToPage( 'product', {id: product.id})">
      <img :alt="product.title" :src="product.image">
    </a>
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
import { goToPage } from '@/helpers/goToPage';
import { formatNumber } from '@/helpers/formatNumber';

export default {
  data() {
    return {
      color: '#73b6ea',
    };
  },
  props: ['product'],
  methods: {
    goToPage,
    separatePrice: formatNumber,
  },
  filters: {
    formatNumber,
  },
};
</script>

<style scoped>

</style>
