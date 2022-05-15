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
      <span class="content__info">
        3 товара
      </span>
    </div>

    <section class="cart">
      <form action="#" class="cart__form form" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <li v-for="item in products" :key="item.id" class="cart__item product">
              <div class="product__pic">
                <img
                  :alt="item.product.title"
                  :src="item.product.image"
                  height="120"
                  width="120">
              </div>
              <h3 class="product__title">{{ item.product.title }}</h3>
              <span class="product__code">{{ item.product.id }}</span>

              <div class="product__counter form__counter">
                <button aria-label="Убрать один товар" type="button">
                  <svg fill="currentColor" height="10" width="10">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>
                <!--eslint-disable-next-line-->
                <input name="count" type="text" value="1">

                <button aria-label="Добавить один товар" type="button">
                  <svg fill="currentColor" height="10" width="10">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <b class="product__price">{{ (item.product.price * item.amount) | formatNumber }}</b>

              <button aria-label="Удалить товар из корзины" class="product__del button-del" type="button">
                <svg fill="currentColor" height="20" width="20">
                  <use xlink:href="#icon-close"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">Итого: <span>{{ totalPrice }}</span></p>

          <button class="cart__button button button--primary" type="submit">
            Оформить заказ
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { formatNumber } from '@/helpers/formatNumber';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      products: 'cartDetailProducts',
      totalPrice: 'cartTotalPrice',
    }),
  },
  filters: {
    formatNumber,
  },
};
</script>

<style scoped>

</style>
