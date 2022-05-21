<template>
  <div>
    <ul class="cart__orders">
      <li v-for="product of products" :key="product.id" class="cart__order">
        <h3>{{ product.title }}</h3>
        <b>{{ product.price * product.quantity | formatNumber }} ₽</b>
        <span>Артикул: {{ product.id }}</span>
      </li>
    </ul>
    <div class="cart__total">
      <p>Доставка: <b>500 ₽</b></p>
      <p>
        Итого: <b>{{ totalAmount }}</b> {{ amountDeclension(totalAmount) }} на сумму
        <b>{{ totalPrice | formatNumber }} ₽</b>
      </p>
    </div>
  </div>
</template>
<script>
import { calcDeclination, formatNumber } from '@/helpers';

export default {
  props: ['products', 'totalPrice', 'totalAmount'],
  methods: {
    amountDeclension(value) {
      return calcDeclination(value, ['товар', 'товара', 'товаров']);
    },
  },
  filters: { formatNumber },
};
</script>
