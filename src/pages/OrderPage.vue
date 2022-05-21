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
        {{ totalAmount }} {{ amountDeclension }}
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
          <OrderList :products="orderProducts" :total-amount="totalAmount" :total-price="totalPrice" />

          <button :disabled="isOrderSending" class="cart__button button button--primary" type="submit">
            <BasePreloader v-if="isOrderSending" class="button__loader" />
            <span v-else>Оформить заказ</span>
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
import { mapGetters, mapMutations } from 'vuex';
import { calcDeclination, formatNumber, wait } from '@/helpers';
import OrderList from '@/pages/OrderList.vue';
import BasePreloader from '@/components/Base/BasePreloader.vue';
import { sendOrder } from '@/api/orders';

export default {
  components: {
    BasePreloader, OrderList, BaseFormTextarea, BaseFormText,
  },
  data() {
    return {
      formData: {},
      formError: {},
      formErrorMessage: '',
      isOrderSending: false,
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
    amountDeclension() {
      return calcDeclination(this.totalAmount, ['товар', 'товара', 'товаров']);
    },
  },
  filters: {
    formatNumber,
  },
  methods: {
    ...mapMutations(['resetCart', 'updateOrderInfo']),

    async order() {
      try {
        this.formError = {};
        this.formErrorMessage = '';
        this.isOrderSending = true;

        await wait(2000);

        const { data } = await sendOrder({ ...this.formData }, { userAccessKey: this.$store.state.userAccessKey });

        this.updateOrderInfo(data);
        this.resetCart();

        await this.$router.push({ name: 'orderInfo', params: { id: data.id } });
      } catch ({ response }) {
        this.formError = response.data.error.request || {};
        this.formErrorMessage = response.data.error.message;
      } finally {
        this.isOrderSending = false;
      }
    },
  },
};
</script>

<style scoped>
.button {
  position: relative;
  height: 69px;
}

.button__loader {
  background-color: transparent;
}
</style>
