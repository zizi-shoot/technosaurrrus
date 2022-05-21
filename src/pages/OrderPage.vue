<template>
  <main class="content container">
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
        Корзина
      </h1>
      <span class="content__info">
        3 товара
      </span>
    </div>

    <section class="cart">
      <form action="#" class="cart__form form" @submit.prevent="order">
        <div class="cart__field">
          <div class="cart__data">
            <BaseFormText
              v-model="formData.name"
              :error="formError.name"
              placeholder="Введите ваше полное имя"
              title="ФИО"
            />
            <BaseFormText
              v-model="formData.address"
              :error="formError.address"
              placeholder="Введите ваш адрес"
              title="Адрес доставки"
            />
            <BaseFormText
              v-model="formData.phone"
              :error="formError.phone"
              placeholder="Введите ваш телефон"
              title="Телефон"
              type="tel"
            />
            <BaseFormText
              v-model="formData.email"
              :error="formError.email"
              placeholder="Введи ваш Email"
              title="Email"
              type="email"
            />
            <BaseFormTextarea
              v-model="formData.comment"
              :error="formError.comment"
              placeholder="Ваши пожелания"
              title="Комментарий к заказу"
            />
          </div>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <li v-for="product of orderProducts" :key="product.id" class="cart__order">
              <h3>{{ product.title }}</h3>
              <b>{{ product.price * product.quantity | formatNumber }} ₽</b>
              <span>Артикул: {{ product.id }}</span>
            </li>
          </ul>

          <div class="cart__total">
            <p>Доставка: <b>500 ₽</b></p>
            <p>Итого: <b>{{ totalAmount }}</b> {{ amountDeclension(totalAmount) }} на сумму
              <b>{{ totalPrice | formatNumber }} ₽</b></p>
          </div>

          <button class="cart__button button button--primary" type="submit">
            Оформить заказ
          </button>
        </div>
        <div v-if="formErrorMessage" class="cart__error form__error-block">
          <h4>Заявка не отправлена!</h4>
          <p>{{ formErrorMessage }}</p>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import BaseFormText from '@/components/Base/BaseFormText.vue';
import BaseFormTextarea from '@/components/Base/BaseFormTextarea.vue';
import { API_URL } from '@/config';
import axios from 'axios';
import { mapGetters, mapMutations } from 'vuex';
import { calcDeclination, formatNumber } from '@/helpers';

export default {
  components: { BaseFormTextarea, BaseFormText },
  data() {
    return {
      formData: {},
      formError: {},
      formErrorMessage: '',
    };
  },
  computed: {
    ...mapGetters({
      totalPrice: 'cartTotalPrice',
      totalAmount: 'cartTotalAmount',
    }),
    orderProducts() {
      return this.$store.state.cartProductsData.map(({ quantity, product: { id, title, price } }) => ({
        id,
        title,
        price,
        quantity,
      }));
    },
  },
  filters: {
    formatNumber,
  },
  methods: {
    ...mapMutations(['resetCart']),

    amountDeclension(value) {
      return calcDeclination(value, ['товар', 'товара', 'товаров']);
    },

    async order() {
      try {
        this.formError = {};
        this.formErrorMessage = '';

        await axios.post(`${API_URL}/orders`, { ...this.formData }, {
          params: {
            userAccessKey: this.$store.state.userAccessKey,
          },
        });

        this.resetCart();
      } catch ({ response }) {
        this.formError = response.data.error.request || {};
        this.formErrorMessage = response.data.error.message;
      }
    },
  },
};
</script>

<style scoped>

</style>
