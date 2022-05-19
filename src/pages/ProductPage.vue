<template>
  <main class="content container">
    <BasePreloader v-if="isProductLoading" />
    <BaseErrorLoading v-else-if="hasErrorLoading" descr="Не удалось загрузить товар" @load-again="loadProduct" />
    <div v-else>
      <div class="content__top">
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item">
            <router-link :to="{ name: 'main' }" class="breadcrumbs__link">Каталог</router-link>
          </li>
          <li class="breadcrumbs__item">
            <router-link :to="{ name: 'main' }" class="breadcrumbs__link">{{ category.title }}</router-link>
          </li>
          <li class="breadcrumbs__item">
            <span class="breadcrumbs__link">{{ product.title }}</span>
          </li>
        </ul>
      </div>

      <section class="item">
        <div class="item__pics pics">
          <div class="pics__wrapper">
            <img :alt="product.title" :src="product.image" height="570" width="570">
          </div>
        </div>

        <div class="item__info">
          <span class="item__code">Артикул: {{ product.id }}</span>
          <h2 class="item__title">
            {{ product.title }}
          </h2>
          <div class="item__form">
            <form class="form" @submit.prevent="addToCart">
              <b class="item__price">
                {{ product.price | formatNumber }} ₽
              </b>

              <fieldset class="form__block">
                <legend class="form__legend">Цвет:</legend>
                <ul class="colors">
                  <li class="colors__item">
                    <label class="colors__label">
                      <input checked="" class="colors__radio sr-only" name="color-item" type="radio" value="blue">
                      <span class="colors__value" style="background-color: #73b6ea;">
                    </span>
                    </label>
                  </li>
                  <li class="colors__item">
                    <label class="colors__label">
                      <input class="colors__radio sr-only" name="color-item" type="radio" value="yellow">
                      <span class="colors__value" style="background-color: #ffbe15;">
                    </span>
                    </label>
                  </li>
                  <li class="colors__item">
                    <label class="colors__label">
                      <input class="colors__radio sr-only" name="color-item" type="radio" value="gray">
                      <span class="colors__value" style="background-color: #939393;">
                  </span></label>
                  </li>
                </ul>
              </fieldset>

              <fieldset class="form__block">
                <legend class="form__legend">Объем в ГБ:</legend>

                <ul class="sizes sizes--primary">
                  <li class="sizes__item">
                    <label class="sizes__label">
                      <input class="sizes__radio sr-only" name="sizes-item" type="radio" value="32">
                      <span class="sizes__value">
                      32gb
                    </span>
                    </label>
                  </li>
                  <li class="sizes__item">
                    <label class="sizes__label">
                      <input class="sizes__radio sr-only" name="sizes-item" type="radio" value="64">
                      <span class="sizes__value">
                      64gb
                    </span>
                    </label>
                  </li>
                  <li class="sizes__item">
                    <label class="sizes__label">
                      <input checked="" class="sizes__radio sr-only" name="sizes-item" type="radio" value="128">
                      <span class="sizes__value">
                      128gb
                    </span>
                    </label>
                  </li>
                </ul>
              </fieldset>

              <div class="item__row">
                <BaseCounter :amount.sync="productAmount" />
                <button class="button button--primary" type="submit">В корзину</button>
              </div>
            </form>
          </div>
        </div>

        <div class="item__desc">
          <ul class="tabs">
            <li class="tabs__item">
              <a class="tabs__link tabs__link--current">
                Описание
              </a>
            </li>
            <li class="tabs__item">
              <a class="tabs__link" href="#">
                Характеристики
              </a>
            </li>
            <li class="tabs__item">
              <a class="tabs__link" href="#">
                Гарантия
              </a>
            </li>
            <li class="tabs__item">
              <a class="tabs__link" href="#">
                Оплата и доставка
              </a>
            </li>
          </ul>

          <div class="item__content">
            <p>
              Навигация GPS, ГЛОНАСС, BEIDOU Galileo и QZSS<br>
              Синхронизация со смартфоном<br>
              Связь по Bluetooth Smart, ANT+ и Wi-Fi<br>
              Поддержка сторонних приложений<br>
            </p>

            <a href="#">
              Все характеристики
            </a>

            <h3>Что это?</h3>

            <p>Wahoo ELEMNT BOLT GPS – это велокомпьютер, который позволяет оптимизировать свои велотренировки, сделав их максимально эффективными. Wahoo ELEMNT BOLT GPS синхронизируется с датчиками по ANT+, объединяя полученную с них информацию. Данные отображаются на дисплее, а также сохраняются на смартфоне. При этом на мобильное устройство можно установить как фирменное приложение, так и различные приложения сторонних разработчиков. Велокомпьютер точно отслеживает местоположение, принимая сигнал с целого комплекса спутников. Эта информация позволяет смотреть уже преодоленные маршруты и планировать новые велопрогулки.</p>

            <h3>Дизайн</h3>

            <p>Велокомпьютер Wahoo ELEMNT BOLT очень компактный. Размеры устройства составляют всего 74,6 x 47,3 x 22,1 мм. что не превышает габариты смартфона. Корпус гаджета выполнен из черного пластика. На обращенной к пользователю стороне расположен дисплей диагональю 56 мм. На дисплей выводятся координаты и скорость, а также полученная со смартфона и синхронизированных датчиков информация: интенсивность, скорость вращения педалей, пульс и т.д. (датчики не входят в комплект поставки). Корпус велокомпьютера имеет степень защиты от влаги IPX7. Это означает, что устройство не боится пыли, а также выдерживает кратковременное (до 30 минут) погружение в воду на глубину не более 1 метра.</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { formatNumber } from '@/helpers';
import BaseCounter from '@/components/BaseCounter.vue';
import axios from 'axios';
import { API_URL } from '@/config';
import BasePreloader from '@/components/BasePreloader.vue';
import BaseErrorLoading from '@/components/BaseErrorLoading.vue';

export default {
  components: { BaseErrorLoading, BasePreloader, BaseCounter },
  data() {
    return {
      productAmount: 1,
      productData: null,
      isProductLoading: false,
      hasErrorLoading: false,
    };
  },
  computed: {
    product() {
      return {
        ...this.productData,
        image: this.productData.image.file.url,
      };
    },
    category() {
      return this.productData.category;
    },
  },
  methods: {
    addToCart() {
      this.$store.commit(
        'addProductToCart',
        { productId: this.product.id, amount: this.productAmount },
      );
    },
    async loadProduct() {
      this.isProductLoading = true;
      this.hasErrorLoading = false;

      try {
        const { data } = await axios.get(`${API_URL}/products/${this.$route.params.id}`);
        this.productData = data;
      } catch (error) {
        this.hasErrorLoading = true;
      } finally {
        this.isProductLoading = false;
      }
    },
  },
  filters: {
    formatNumber,
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.loadProduct();
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.content {
  position: relative;
}
</style>
