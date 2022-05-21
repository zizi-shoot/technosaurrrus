<template>
  <aside class="filter">
    <h2 class="filter__title">Фильтры</h2>

    <form action="#" class="filter__form form" method="get" @submit.prevent="submit">
      <fieldset class="form__block">
        <legend class="form__legend">Цена</legend>
        <label class="form__label form__label--price">
          <input v-model.number="currentPriceFrom" class="form__input" name="min-price" type="text">
          <span class="form__value">От</span>
        </label>
        <label class="form__label form__label--price">
          <input v-model.number="currentPriceTo" class="form__input" name="max-price" type="text">
          <span class="form__value">До</span>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Категория</legend>
        <label class="form__label form__label--select">
          <select v-model.number="currentCategoryId" class="form__select" name="category">
            <option value="0">Все категории</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.title }}</option>
          </select>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Цвет</legend>
        <ul class="colors">
          <li class="colors__item">
            <label class="colors__label">
              <input v-model="currentColor" class="colors__radio sr-only" type="radio" value="none">
              <span class="colors__value" style="background: url('img/empty-filter.png') center/contain;"></span>
            </label>
          </li>
          <li v-for="color in colors" :key="color.id" class="colors__item">
            <label class="colors__label">
              <input v-model="currentColor" :value="color.id" class="colors__radio sr-only" type="radio">
              <span :style="{backgroundColor: color.code}" class="colors__value"></span>
            </label>
          </li>
        </ul>
      </fieldset>

      <button class="filter__submit button button--primary" type="submit">
        Применить
      </button>
      <button class="filter__reset button button--second" type="button" @click="reset">
        Сбросить
      </button>
    </form>
  </aside>
</template>

<script>
import { loadCategoriesData, loadColorsData } from '@/api/products';

export default {
  data() {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
      currentColor: 'none',
      categoriesData: [],
      colorsData: [],
    };
  },
  props: ['priceFrom', 'priceTo', 'categoryId', 'color'],
  computed: {
    categories() {
      return this.categoriesData ? this.categoriesData.items : [];
    },
    colors() {
      return this.colorsData ? this.colorsData.items : [];
    },
  },
  methods: {
    submit() {
      this.$emit('update:priceFrom', this.currentPriceFrom);
      this.$emit('update:priceTo', this.currentPriceTo);
      this.$emit('update:categoryId', this.currentCategoryId);
      this.$emit('update:color', this.currentColor);
    },
    reset() {
      this.$emit('update:priceFrom', 0);
      this.$emit('update:priceTo', 0);
      this.$emit('update:categoryId', 0);
      this.$emit('update:color', 'none');
    },
    async loadCategories() {
      const { data } = await loadCategoriesData();
      this.categoriesData = data;
    },
    async loadColors() {
      const { data } = await loadColorsData();
      this.colorsData = data;
    },
  },
  watch: {
    priceFrom(value) {
      this.currentPriceFrom = value;
    },
    priceTo(value) {
      this.currentPriceTo = value;
    },
    categoryId(value) {
      this.currentCategoryId = value;
    },
    color(value) {
      this.currentColor = value;
    },
  },
  created() {
    this.loadCategories();
    this.loadColors();
  },
};
</script>

<style scoped>

</style>
