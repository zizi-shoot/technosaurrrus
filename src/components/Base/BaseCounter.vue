<template>
  <div class="form__counter">
    <button :disabled="amount <= 1" aria-label="Убрать один товар" type="button" @click="changeAmount(1, 'minus')">
      <svg fill="currentColor" height="12" width="12">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>
    <!--eslint-disable-next-line-->
    <input @change="changeAmount(+$event.target.value)" :value="amount" type="text">

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
    changeAmount(value, operator = null) {
      switch (operator) {
        case 'plus':
          this.$emit('update:amount', this.amount + value);
          break;
        case 'minus':
          this.$emit('update:amount', this.amount - value);
          break;
        default:
          this.$emit('update:amount', value);
      }
    },
  },
};
</script>

<style scoped>

</style>
