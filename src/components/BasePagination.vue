<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        aria-label="Предыдущая страница"
        class="pagination__link pagination__link--arrow"
        :class="{'pagination__link--disabled': page === 1}"
        href="#"
        @click.prevent="page !== 1 && paginate(page - 1)"
      >
        <svg fill="currentColor" height="14" width="8">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li v-for="pageNumber in pages" :key="pageNumber" class="pagination__item">
      <a
        :class="{'pagination__link--current' : pageNumber === page}"
        class="pagination__link"
        href="#"
        @click.prevent="paginate(pageNumber)"
      >
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a
        aria-label="Следующая страница"
        class="pagination__link pagination__link--arrow"
        :class="{'pagination__link--disabled': page === pages}"
        href="#"
        @click.prevent="page !== pages && paginate(page + 1)"
      >
        <svg fill="currentColor" height="14" width="8">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'perPage', 'count'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
  },
};
</script>

<style scoped>

</style>
