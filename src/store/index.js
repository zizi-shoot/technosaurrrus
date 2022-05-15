import Vue from 'vue';
import Vuex from 'vuex';

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
  },
});
