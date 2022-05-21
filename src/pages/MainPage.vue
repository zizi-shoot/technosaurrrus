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
        <BasePreloader v-if="isProductLoading" />
        <BaseErrorLoading v-else-if="hasErrorLoading" descr="Произошла ошибка при загрузке товаров!" @load-again="loadProducts" />
        <ProductList :products="products" />
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage" />
      </section>
    </div>
  </main>
</template>

<script>
import BasePagination from '@/components/Base/BasePagination.vue';
import ProductList from '@/components/ProductList.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import axios from 'axios';
import { API_URL } from '@/config';
import BasePreloader from '@/components/Base/BasePreloader.vue';
import BaseErrorLoading from '@/components/Base/BaseErrorLoading.vue';

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
      isProductLoading: false,
      hasErrorLoading: false,
    };
  },
  components: {
    BaseErrorLoading,
    BasePreloader,
    ProductList,
    BasePagination,
    ProductFilter,
  },
  computed: {
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
    loadProducts() {
      this.isProductLoading = true;
      this.hasErrorLoading = false;
      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(async () => {
        try {
          const { data } = await axios.get(
            `${API_URL}/products`,
            {
              params: {
                page: this.page,
                limit: this.productsPerPage,
                categoryId: this.filterCategoryId,
                minPrice: this.filterPriceFrom,
                maxPrice: this.filterPriceTo,
                colorId: this.filterColor,
              },
            },
          );

          this.productsData = data;
        } catch (error) {
          this.hasErrorLoading = true;
        } finally {
          this.isProductLoading = false;
        }
      }, 1000);
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterPriceFrom() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
    filterCategoryId() {
      this.loadProducts();
    },
    filterColor() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>

<style scoped>
.catalog {
  position: relative;
}
</style>
