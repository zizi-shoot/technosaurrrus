<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img
        :alt="item.product.title"
        :src="item.product.image"
        height="120"
        width="120"
      >
    </div>
    <h3 class="product__title">{{ item.product.title }}</h3>
    <span class="product__code">Артикул: {{ item.product.id }}</span>

    <BaseCounter :amount.sync="amount" class="product__counter" />

    <b class="product__price">{{ (item.product.price * item.amount) | formatNumber }} ₽</b>

    <button
      aria-label="Удалить товар из корзины"
      class="product__del button-del"
      type="button"
      @click="deleteProduct(item.productId)"
    >
      <svg fill="currentColor" height="20" width="20">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>

<script>
import { formatNumber } from '@/helpers';
import { mapMutations } from 'vuex';
import BaseCounter from '@/components/BaseCounter.vue';

export default {
  components: { BaseCounter },
  props: ['item'],
  filters: { formatNumber },
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },

      set(value) {
        this.$store.commit(
          'updateCartProductAmount',
          { productId: this.item.productId, amount: value },
        );
      },
    },
  },
  methods: {
    ...mapMutations({
      deleteProduct: 'deleteCartProduct',
    }),
  },
};
</script>

<style scoped>

</style>
