<template>
  <BaseFormField :error="error" :title="title">
    <!-- eslint-disable-next-line -->
    <textarea v-model="dataValue" :placeholder="placeholder" class="form__input form__input--area" />
  </BaseFormField>
</template>

<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  mixins: [formFieldMixin],
};
</script>

<style scoped>

</style>
