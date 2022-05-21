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

    <BasePreloader v-if="isCartLoading" />
    <BaseErrorLoading v-else-if="hasErrorCartLoading" descr="Не удалось загрузить товары из корзины" @load-again="loadCart" />

    <section v-else class="cart">
      <form action="#" class="cart__form form" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <CartItem v-for="item in products" :key="item.id" :item="item" />
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы посчитаем стоимость доставки на следующем этапе
          </p>
          <p class="cart__price">Итого: <span>{{ totalPrice | formatNumber }} ₽</span></p>

          <router-link
            :disabled="!products.length"
            :to="{name: 'order'}"
            class="cart__button button button--primary"
            tag="button"
            type="submit"
          >
            Оформить заказ
          </router-link>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import CartItem from '@/components/CartItem.vue';
import { calcDeclination, formatNumber } from '@/helpers';
import BasePreloader from '@/components/Base/BasePreloader.vue';
import BaseErrorLoading from '@/components/Base/BaseErrorLoading.vue';

export default {
  components: { BaseErrorLoading, BasePreloader, CartItem },
  filters: { formatNumber },
  computed: {
    ...mapGetters({
      products: 'cartDetailProducts',
      totalPrice: 'cartTotalPrice',
      totalAmount: 'cartTotalAmount',
    }),
    ...mapState({
      isCartLoading: 'isCartLoading',
      hasErrorCartLoading: 'hasErrorCartLoading',
    }),
    amountDeclension() {
      return calcDeclination(this.totalAmount, ['товар', 'товара', 'товаров']);
    },
  },
  methods: {
    ...mapActions(['loadCart']),
  },
};
</script>

<style scoped>
.content {
  position: relative;
}
</style>
