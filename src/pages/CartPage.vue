<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link :to="{ name: 'main'}" class="breadcrumbs__link">Каталог</router-link>
        </li>
        <li class="breadcrumbs__item">
          <span class="breadcrumbs__link">Корзина</span>
        </li>
      </ul>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">{{ `${totalAmount} ${amountDeclension}` }}</span>
    </div>

    <section class="cart">
      <form action="#" class="cart__form form" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <CartItem v-for="item in products" :key="item.id" :item="item" />
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">Итого: <span>{{ totalPrice | formatNumber }} ₽</span></p>

          <button class="cart__button button button--primary" type="submit">
            Оформить заказ
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from '@/components/CartItem.vue';
import { calcDeclination, formatNumber } from '@/helpers';

export default {
  components: { CartItem },
  filters: { formatNumber },
  computed: {
    ...mapGetters({
      products: 'cartDetailProducts',
      totalPrice: 'cartTotalPrice',
      totalAmount: 'cartTotalAmount',
    }),
    amountDeclension() {
      return calcDeclination(this.totalAmount, ['товар', 'товара', 'товаров']);
    },
  },
};
</script>

<style scoped>

</style>
