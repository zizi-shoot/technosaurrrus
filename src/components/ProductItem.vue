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
      <li v-for="color in product.colors" :key="color.id" class="colors__item">
        <label class="colors__label">
          <input v-model="colorValue" :value="color.id" class="colors__radio sr-only" type="radio">
          <span :style="{backgroundColor: color.code}" class="colors__value"></span>
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
      colorValue: this.product.colors[0].id,
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
