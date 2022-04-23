<template>
  <div>
    <section class="catalog">
      <ProductList :products="products"/>
      <ul class="catalog__pagination pagination">
        <li class="pagination__item">
          <a aria-label="Предыдущая страница" class="pagination__link pagination__link--arrow pagination__link--disabled">
            <svg fill="currentColor" height="14" width="8">
              <use xlink:href="#icon-arrow-left"></use>
            </svg>
          </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link pagination__link--current">
            1
          </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#">
            2
          </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#">
            3
          </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#">
            4
          </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#">
            ...
          </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#">
            10
          </a>
        </li>
        <li class="pagination__item">
          <a aria-label="Следующая страница" class="pagination__link pagination__link--arrow" href="#">
            <svg fill="currentColor" height="14" width="8">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { products } from './data/products';
import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  data() {
    return {
      products,
    };
  },
  components: {
    ProductList,
  },
};
</script>
