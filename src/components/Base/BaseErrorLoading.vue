<template>
  <div class="error">
    <span class="error__descr">{{ descr }}</span>
    <button class="button button--primary" type="button" @click="loadAgain">Попробовать еще раз</button>
  </div>
</template>

<script>
export default {
  props: ['descr'],
  methods: {
    loadAgain() {
      this.$emit('load-again');
    },
  },
};
</script>

<style scoped>
.error {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255 255 255 / 70%);
}

.error__descr {
  font-weight: 500;
  color: #f00;
}

.button--primary:hover {
  background-color: #272727;
}

</style>
