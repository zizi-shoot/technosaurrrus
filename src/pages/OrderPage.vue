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
      <form action="#" class="cart__form form" method="POST">
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
              type="phone"
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
            <li class="cart__order">
              <h3>Смартфон Xiaomi Redmi Note 7 Pro 6/128GB</h3>
              <b>18 990 ₽</b>
              <span>Артикул: 150030</span>
            </li>
            <li class="cart__order">
              <h3>Гироскутер Razor Hovertrax 2.0ii</h3>
              <b>4 990 ₽</b>
              <span>Артикул: 150030</span>
            </li>
            <li class="cart__order">
              <h3>Электрический дрифт-карт Razor Lil’ Crazy</h3>
              <b>8 990 ₽</b>
              <span>Артикул: 150030</span>
            </li>
          </ul>

          <div class="cart__total">
            <p>Доставка: <b>500 ₽</b></p>
            <p>Итого: <b>3</b> товара на сумму <b>37 970 ₽</b></p>
          </div>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
        <div class="cart__error form__error-block">
          <h4>Заявка не отправлена!</h4>
          <p>
            Похоже произошла ошибка. Попробуйте отправить снова или перезагрузите страницу.
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import BaseFormText from '@/components/Base/BaseFormText.vue';
import BaseFormTextarea from '@/components/Base/BaseFormTextarea.vue';

export default {
  components: { BaseFormTextarea, BaseFormText },
  data() {
    return {
      formData: {},
      formError: {},
    };
  },
};
</script>

<style scoped>

</style>
