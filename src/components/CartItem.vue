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
      <BasePreloader class="button-del__loader" v-if="isProductDeleting" />
      <svg v-else fill="currentColor" height="20" width="20">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>

<script>
import { formatNumber } from '@/helpers';
import { mapActions } from 'vuex';
import BaseCounter from '@/components/Base/BaseCounter.vue';
import BasePreloader from '@/components/Base/BasePreloader.vue';

export default {
  components: { BasePreloader, BaseCounter },
  props: ['item'],
  filters: { formatNumber },
  data() {
    return {
      isProductDeleting: false,
    };
  },
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },

      set(value) {
        this.updateCartProductAmount({ productId: this.item.productId, amount: value });
      },
    },
  },
  methods: {
    ...mapActions(['updateCartProductAmount', 'deleteCartProduct']),

    deleteProduct(productId) {
      this.isProductDeleting = true;

      this.deleteCartProduct(productId)
        .then(() => {
          this.isProductDeleting = false;
        });
    },
  },
};
</script>

<style scoped>
.button-del {
  position: relative;
  cursor: pointer;
}

.button-del__loader >>> svg {
  width: 100%;
  height: 100%;
}

</style>
