<template>
  <main class="content container">
    <BasePreloader v-if="isInfoLoading" />

    <div v-else>
      <div class="content__top">
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item">
            <router-link :to="{ name: 'main' }" class="breadcrumbs__link">
              Каталог
            </router-link>
          </li>
          <li class="breadcrumbs__item">
            <router-link :to="{ name: 'cart' }" class="breadcrumbs__link">
              Корзина
            </router-link>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link">
              Оформление заказа
            </a>
          </li>
        </ul>
        <h1 class="content__title">
          Заказ оформлен <span>№ {{ orderInfo.id }}</span>
        </h1>
      </div>

      <section class="cart">
        <form action="#" class="cart__form form" method="POST">
          <div class="cart__field">
            <p class="cart__message">
              Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу почту придет письмо с&nbsp;деталями заказа.
              Наши менеджеры свяжутся с&nbsp;Вами в&nbsp;течение часа для уточнения деталей доставки.
            </p>

            <ul class="dictionary">
              <li class="dictionary__item">
              <span class="dictionary__key">
                Получатель
              </span>
                <span class="dictionary__value">
                {{ orderInfo.name }}
              </span>
              </li>
              <li class="dictionary__item">
              <span class="dictionary__key">
                Адрес доставки
              </span>
                <span class="dictionary__value">
                {{ orderInfo.address }}
              </span>
              </li>
              <li class="dictionary__item">
              <span class="dictionary__key">
                Телефон
              </span>
                <span class="dictionary__value">
                {{ orderInfo.phone }}
              </span>
              </li>
              <li class="dictionary__item">
              <span class="dictionary__key">
                Email
              </span>
                <span class="dictionary__value">
                {{ orderInfo.email }}
              </span>
              </li>
              <li class="dictionary__item">
              <span class="dictionary__key">
                Способ оплаты
              </span>
                <span class="dictionary__value">
                картой при получении
              </span>
              </li>
            </ul>
          </div>

          <div class="cart__block">
            <OrderList :products="orderProducts" :total-amount="totalAmount" :total-price="totalPrice" />
          </div>
        </form>
      </section>
    </div>
  </main>
</template>

<script>
import OrderList from '@/pages/OrderList.vue';
import { mapActions } from 'vuex';
import BasePreloader from '@/components/Base/BasePreloader.vue';

export default {
  components: { BasePreloader, OrderList },
  data() {
    return {
      orderInfo: null,
      isInfoLoading: false,
    };
  },
  computed: {
    orderProducts() {
      return this.orderInfo.basket.items.map(({ quantity, product: { id, title, price } }) => ({
        id,
        title,
        price,
        quantity,
      }));
    },
    totalPrice() {
      return this.orderInfo.totalPrice;
    },
    totalAmount() {
      return this.orderProducts.reduce((acc, { quantity }) => acc + quantity, 0);
    },
  },
  methods: {
    ...mapActions(['loadOrderInfo']),
  },
  created() {
    this.orderInfo = this.$store.state.orderInfo;
    this.isInfoLoading = true;

    if (this.$store.state.orderInfo?.id === this.$route.params.id) return;

    this.loadOrderInfo(this.$route.params.id)
      .then(() => {
        this.orderInfo = this.$store.state.orderInfo;
        this.isInfoLoading = false;
      });
  },
};
</script>

<style scoped>
.container {
  position: relative;
}
</style>
