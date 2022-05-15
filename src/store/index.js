import Vue from 'vue';
import Vuex from 'vuex';
import { products } from '@/data/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
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
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => ({
        ...item,
        product: products.find((product) => product.id === item.productId),
      }));
    },

    cartTotalPrice(state, { cartDetailProducts }) {
      return cartDetailProducts.reduce((acc, item) => acc + item.product.price * item.amount, 0);
    },
    cartTotalAmount({ cartProducts }) {
      return cartProducts.reduce((acc, item) => acc + item.amount, 0);
    },
  },
});
