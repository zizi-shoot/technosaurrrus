<template>
  <div class="page-container">
    <header class="header">
      <div class="header__wrapper container">
        <span class="header__info">Каталог</span>
        <a class="header__logo" href="#">
          <img alt="Логотип интернет магазина Технозавррр" height="33" src="img/svg/logo-tech.svg" width="190">
        </a>
        <a class="header__tel" href="tel:8 800 600 90 09">
          8 800 600 90 09
        </a>
        <CartIndicator />
      </div>
    </header>
    <router-view />
    <footer class="footer">
      <div class="footer__wrapper container">
        <ul class="footer__links">
          <li>
            <a class="footer__link" href="#">
              Каталог
            </a>
          </li>
          <li>
            <a class="footer__link" href="tel:88006009009">
              8 800 600 90 09
            </a>
          </li>
          <li>
            <a class="footer__link" href="mailto:hi@technozavrrr.com">
              hi@technozavrrr.com
            </a>
          </li>
          <li>
            <a class="footer__link" href="#">
              Распродажа
            </a>
          </li>
          <li>
            <a class="footer__link footer__link--medium" href="#">
              Заказать звонок
            </a>
          </li>
        </ul>

        <ul class="footer__social social">
          <li class="social__item">
            <a aria-label="Вконтакте" class="social__link" href="#">
              <svg fill="currentColor" height="11" width="20">
                <use xlink:href="#icon-vk"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a aria-label="Инстаграм" class="social__link" href="#">
              <svg fill="currentColor" height="17" width="17">
                <use xlink:href="#icon-insta"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a aria-label="Facebook" class="social__link" href="#">
              <svg fill="currentColor" height="17" width="17">
                <use xlink:href="#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a aria-label="Twitter" class="social__link" href="#">
              <svg fill="currentColor" height="14" width="17">
                <use xlink:href="#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a aria-label="Telegram" class="social__link" href="#">
              <svg fill="currentColor" height="17" width="19">
                <use xlink:href="#icon-telegram"></use>
              </svg>
            </a>
          </li>
        </ul>

        <p class="footer__desc">
          Все права на&nbsp;материалы, находящиеся на&nbsp;сайте, охраняются в&nbsp;соответствии с&nbsp;законодательством&nbsp;РФ,
          в&nbsp;том числе об&nbsp;авторском праве и&nbsp;смежных правах.
        </p>

        <ul class="footer__data">
          <li>
            <a class="footer__link" href="#" rel="noopener" target="_blank" type="application/pdf">
              Политика конфиденциальности
            </a>
          </li>
          <li>
            <a class="footer__link" href="#" rel="noopener" target="_blank" type="application/pdf">
              Публичная оферта
            </a>
          </li>
        </ul>

        <span class="footer__copyright">
        © 2020 Технозавррр
      </span>
      </div>
    </footer>
  </div>
</template>

<script>
import CartIndicator from '@/components/CartIndicator.vue';

export default {
  components: {
    CartIndicator,
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
