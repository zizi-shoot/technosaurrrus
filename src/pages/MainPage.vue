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
        <div v-if="isProductLoading" class="loading">
          <svg
            height="128px"
            preserveAspectRatio="xMidYMid"
            style="margin: auto; background-image: none; display: block; shape-rendering: auto;"
            viewBox="0 0 100 100"
            width="128px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" fill="none" r="28" stroke="#9efe02"
                    stroke-dasharray="43.982297150257104 43.982297150257104" stroke-linecap="round" stroke-width="7">
              <animateTransform attributeName="transform" dur="0.9900990099009901s" keyTimes="0;1" repeatCount="indefinite"
                                type="rotate" values="0 50 50;360 50 50"></animateTransform>
            </circle>
            <circle cx="50" cy="50" fill="none" r="20" stroke="#272727"
                    stroke-dasharray="31.41592653589793 31.41592653589793" stroke-dashoffset="31.41592653589793"
                    stroke-linecap="round"
                    stroke-width="7">
              <animateTransform attributeName="transform" dur="0.9900990099009901s" keyTimes="0;1" repeatCount="indefinite"
                                type="rotate" values="0 50 50;-360 50 50"></animateTransform>
            </circle>
          </svg>
        </div>
        <div v-if="hasErrorLoading" class="error">
          <span class="error__descr">Произошла ошибка при загрузке товаров!</span>
          <button class="button button--primary" type="button" @click="loadProducts">Попробовать еще раз</button>
        </div>
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
import axios from 'axios';
import { API_URL } from '@/config';

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
      }, 0);
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

.loading,
.error {
  position: absolute;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255 255 255 / 70%);
}

.error__descr {
  font-weight: 500;
  color: #f00;
}

.button--primary:hover {
  background-color: #272727;
}

</style>
