<template>
  <div class="form__counter">
    <button :disabled="amount <= 1" aria-label="Убрать один товар" type="button" @click="changeAmount(1, 'minus')">
      <svg fill="currentColor" height="12" width="12">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>
    <!--eslint-disable-next-line-->
    <input :value="amount" type="text" @change="changeAmount(+$event.target.value)">

    <button aria-label="Добавить один товар" type="button" @click="changeAmount(1, 'plus')">
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
    changeAmount(value, operator) {
      if (!operator) this.$emit('update:amount', this.amount + value);
      if (operator === 'plus') this.$emit('update:amount', this.amount + value);
      if (operator === 'minus') this.$emit('update:amount', this.amount + value);
    },
  },
};
</script>

<style scoped>

</style>
