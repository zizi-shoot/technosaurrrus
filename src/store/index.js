import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_URL } from '@/config';
import { wait } from '@/helpers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
    userAccessKey: null,
    cartProductsData: [],
    isCartLoading: false,
    hasErrorCartLoading: false,
  },
  mutations: {
    addProductToCart(state, { productId, amount }) {
      const item = state.cartProducts.find((cartItem) => cartItem.productId === productId);

      if (item) {
        item.amount += amount;
        return;
      }

      state.cartProducts.push({ productId, amount });
    },

    updateCartProductAmount(state, { productId, amount }) {
      const item = state.cartProducts.find((cartItem) => cartItem.productId === productId);

      if (item) item.amount = amount;
    },

    deleteCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId);
    },

    updateUserAccessKey(state, accessKey) {
      state.userAccessKey = accessKey;
    },

    updateCartProductsData(state, data) {
      state.cartProductsData = data;
    },

    syncCartProducts(state) {
      state.cartProducts = state.cartProductsData.map(({ product, quantity }) => ({
        productId: product.id,
        amount: quantity,
      }));
    },

    updateIsCartLoading(state, value) {
      state.isCartLoading = value;
    },

    updateHasErrorCartLoading(state, value) {
      state.hasErrorCartLoading = value;
    },
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => {
        const { product } = state.cartProductsData.find((el) => el.product.id === item.productId);

        return {
          ...item,
          product: {
            ...product,
            image: product.image.file.url,
          },
        };
      });
    },

    cartTotalPrice(state, { cartDetailProducts }) {
      return cartDetailProducts.reduce((acc, item) => acc + item.product.price * item.amount, 0);
    },

    cartTotalAmount({ cartProducts }) {
      return cartProducts.reduce((acc, item) => acc + item.amount, 0);
    },
  },
  actions: {
    async loadCart(context) {
      context.commit('updateIsCartLoading', true);
      context.commit('updateHasErrorCartLoading', false);

      await wait(1000);

      try {
        const { data: { user, items } } = await axios.get(`${API_URL}/baskets`, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        });

        if (!context.state.userAccessKey) {
          localStorage.setItem('userAccessKey', user.accessKey);
          context.commit('updateUserAccessKey', user.accessKey);
        }

        context.commit('updateCartProductsData', items);
        context.commit('syncCartProducts');
      } catch (error) {
        context.commit('updateHasErrorCartLoading', true);
      } finally {
        context.commit('updateIsCartLoading', false);
      }
    },
  },
});
