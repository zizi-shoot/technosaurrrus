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
            <li class="cart__item product">
              <div class="product__pic">
                <img
                  alt="Название товара"
                  height="120"
                  src="img/phone-square-3.jpg"
                  srcset="img/phone-square-3@2x.jpg 2x"
                  width="120">
              </div>
              <h3 class="product__title">
                Смартфон Xiaomi Redmi Note 7 Pro 6/128GB
              </h3>
              <p class="product__info">
                Объем: <span>128GB</span>
              </p>
              <span class="product__code">
                Артикул: 1501230
              </span>

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

              <b class="product__price">
                18 990 ₽
              </b>

              <button aria-label="Удалить товар из корзины" class="product__del button-del" type="button">
                <svg fill="currentColor" height="20" width="20">
                  <use xlink:href="#icon-close"></use>
                </svg>
              </button>
            </li>

            <li class="cart__item product">
              <div class="product__pic">
                <img alt="Название товара" height="120" src="img/pic-square-2.jpg" srcset="img/pic-square-2@2x.jpg 2x"
                     width="120">
              </div>
              <h3 class="product__title">
                Гироскутер Razor Hovertrax 2.0
              </h3>
              <p class="product__info product__info--color">
                Цвет:
                <span>
                  <i style="background-color: #73b6ea"></i>
                  Нежно-голубой
                </span>
              </p>
              <span class="product__code">
                Артикул: 1501230
              </span>

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

              <b class="product__price">
                4 990 ₽
              </b>

              <button aria-label="Удалить товар из корзины" class="product__del button-del" type="button">
                <svg fill="currentColor" height="20" width="20">
                  <use xlink:href="#icon-close"></use>
                </svg>
              </button>
            </li>

            <li class="cart__item product">
              <div class="product__pic">
                <img alt="Название товара" height="120" src="img/pic-square-3.jpg" srcset="img/pic-square-3@2x.jpg 2x"
                     width="120">
              </div>
              <h3 class="product__title">
                Электрический дрифт-карт Razor Lil’ Crazy
              </h3>
              <p class="product__info product__info--color">
                Цвет:
                <span>
                  <i style="background-color: #ff6b00"></i>
                  Оранжевый
                </span>
              </p>
              <span class="product__code">
                Артикул: 1501230
              </span>

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

              <b class="product__price">
                8 990 ₽
              </b>

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
          <p class="cart__price">
            Итого: <span>32 970 ₽</span>
          </p>

          <button class="cart__button button button--primary" type="submit">
            Оформить заказ
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
