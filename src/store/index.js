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
    orderInfo: null,
  },
  mutations: {
    updateCartProductAmount(state, { productId, amount }) {
      const item = state.cartProducts.find((cartItem) => cartItem.productId === productId);

      if (item) item.amount = amount;
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

    resetCart(state) {
      state.cartProducts = [];
      state.cartProductsData = [];
    },

    updateOrderInfo(state, orderInfo) {
      state.orderInfo = orderInfo;
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

      await wait(2000);

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

    async addProductToCart(context, { productId, amount }) {
      await wait(2000);

      const { data: { items } } = await axios.post(`${API_URL}/baskets/products`, {
        productId,
        quantity: amount,
      }, {
        params: {
          userAccessKey: context.state.userAccessKey,
        },
      });

      context.commit('updateCartProductsData', items);
      context.commit('syncCartProducts');
    },

    async updateCartProductAmount(context, { productId, amount }) {
      context.commit('updateCartProductAmount', { productId, amount });

      if (!amount) return;

      await wait(300);

      try {
        const { data: { items } } = await axios.put(`${API_URL}/baskets/products`, {
          productId,
          quantity: amount,
        }, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        });

        context.commit('updateCartProductsData', items);
      } catch (error) {
        context.commit('syncCartProducts');
      }
    },

    async deleteCartProduct(context, productId) {
      await wait(1000);

      const { data: { items } } = await axios.delete(`${API_URL}/baskets/products`, {
        data: {
          productId,
        },
        params: {
          userAccessKey: context.state.userAccessKey,
        },
      });

      context.commit('updateCartProductsData', items);
      context.commit('syncCartProducts');
    },

    async loadOrderInfo(context, orderId) {
      await wait(1000);

      const { data } = await axios.get(`${API_URL}/orders/${orderId}`, {
        params: {
          userAccessKey: context.state.userAccessKey,
        },
      });

      context.commit('updateOrderInfo', data);
    },
  },

});
