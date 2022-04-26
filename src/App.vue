<template>
  <div>
    <section class="catalog">
      <ProductList :products="products" />
      <BasePagination :count="countProducts" v-model="page" :per-page="productsPerPage" />
    </section>
  </div>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import ProductList from './components/ProductList.vue';
import { products } from './data/products';

export default {
  name: 'App',
  data() {
    return {
      page: 1,
      productsPerPage: 3,
    };
  },
  components: {
    ProductList,
    BasePagination,
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage;

      return products.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return products.length;
    },
  },
};
</script>
