<template>
  <div class="form__counter">
    <button :disabled="amount <= 1" aria-label="Убрать один товар" type="button" @click="decreaseAmount">
      <svg fill="currentColor" height="12" width="12">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>
    <!--eslint-disable-next-line-->
    <input v-model.number="amount" type="text">

    <button aria-label="Добавить один товар" type="button" @click="increaseAmount">
      <svg fill="currentColor" height="12" width="12">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ['amount'],
  methods: {
    decreaseAmount() {
      this.$emit('update:amount', this.amount - 1);
    },
    increaseAmount() {
      this.$emit('update:amount', this.amount + 1);
    },
  },
};
</script>

<style scoped>

</style>
