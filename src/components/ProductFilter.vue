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
          <li class="colors__item">
            <label class="colors__label">
              <input v-model="currentColor" checked="" class="colors__radio sr-only" type="radio" value="blue">
              <span class="colors__value" style="background-color: #73b6ea;">
                  </span>
            </label>
          </li>
          <li class="colors__item">
            <label class="colors__label">
              <input v-model="currentColor" class="colors__radio sr-only" type="radio" value="multi">
              <span class="colors__value"
                    style="background: linear-gradient(130deg, rgba(255,0,0,1) 15%, rgba(0,255,0,1) 50%, rgba(0,0,255,1) 85%);"
              ></span>
            </label>
          </li>
          <li class="colors__item">
            <label class="colors__label">
              <input v-model="currentColor" class="colors__radio sr-only" type="radio" value="green">
              <span class="colors__value" style="background-color: #8be000;">
                </span></label>
          </li>
          <li class="colors__item">
            <label class="colors__label">
              <input v-model="currentColor" class="colors__radio sr-only" type="radio" value="red">
              <span class="colors__value" style="background-color: #f00;">
                </span></label>
          </li>
          <li class="colors__item">
            <label class="colors__label">
              <input v-model="currentColor" class="colors__radio sr-only" type="radio" value="white">
              <span class="colors__value" style="background-color: #fff;">
                </span></label>
          </li>
          <li class="colors__item">
            <label class="colors__label">
              <input v-model="currentColor" class="colors__radio sr-only" type="radio" value="black">
              <span class="colors__value" style="background-color: #000;">
                </span></label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Объем в ГБ</legend>
        <ul class="check-list">
          <li class="check-list__item">
            <label class="check-list__label">
              <input checked="" class="check-list__check sr-only" name="volume" type="checkbox" value="8">
              <span class="check-list__desc">
                    8
                    <span>(313)</span>
                  </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" name="volume" type="checkbox" value="16">
              <span class="check-list__desc">
                    16
                    <span>(461)</span>
                  </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" name="volume" type="checkbox" value="32">
              <span class="check-list__desc">
                    32
                    <span>(313)</span>
                  </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" name="volume" type="checkbox" value="64">
              <span class="check-list__desc">
                    64
                    <span>(313)</span>
                  </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" name="volume" type="checkbox" value="128">
              <span class="check-list__desc">
                    128
                    <span>(313)</span>
                  </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" name="volume" type="checkbox" value="264">
              <span class="check-list__desc">
                    264
                    <span>(313)</span>
                  </span>
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
import { categories } from '@/data/categories';

export default {
  data() {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
      currentColor: 'none',
    };
  },
  props: ['priceFrom', 'priceTo', 'categoryId', 'color'],
  computed: {
    categories() {
      return categories;
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
  },
};
</script>

<style scoped>

</style>
