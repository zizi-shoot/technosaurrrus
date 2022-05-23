<template>
  <BaseFormField :error="error" :title="title">
    <!-- eslint-disable-next-line -->
    <input v-model="dataValue" :placeholder="placeholder" :type="type" class="form__input">
  </BaseFormField>
</template>

<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  mixins: [formFieldMixin],
  props: {
    type: {
      default: 'text',
    },
  },
};
</script>

<style scoped>

</style>
