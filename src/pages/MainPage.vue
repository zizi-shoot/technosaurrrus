<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>
    <div class="content__catalog">
      <ProductFilter
        :category-id.sync="filterCategoryId"
        :color.sync="filterColor"
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
      />
      <section class="catalog">
        <ProductList :products="products" />
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage" />
      </section>
    </div>
  </main>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import ProductList from '@/components/ProductList.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import { products } from '@/data/products';
import axios from 'axios';

export default {
  data() {
    return {
      page: 1,
      productsPerPage: 6,
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColor: 'none',
      productsData: null,
    };
  },
  components: {
    ProductList,
    BasePagination,
    ProductFilter,
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price >= this.filterPriceFrom);
      }

      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price <= this.filterPriceTo);
      }

      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter((product) => product.categoryId === this.filterCategoryId);
      }

      if (this.filterColor !== 'none') {
        filteredProducts = filteredProducts.filter((product) => product.color === this.filterColor);
      }

      return filteredProducts;
    },
    products() {
      return this.productsData
        ? this.productsData.items.map((product) => ({
          ...product,
          image: product.image.file.url,
        }))
        : [];
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0;
    },
  },
  methods: {
    async loadProducts() {
      const { data } = await axios.get(`https://vue-study.skillbox.cc/api/products?page=${this.page}&limit=${this.productsPerPage}`);

      this.productsData = data;
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>

<style scoped>

</style>
