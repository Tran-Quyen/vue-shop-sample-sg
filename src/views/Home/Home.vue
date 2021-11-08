<template>
  <div class="home">
    <ProductList></ProductList>
    <Pagination></Pagination>
  </div>
</template>

<script>
  import ProductList from '@/components/Home/ProductList.vue';
  import Pagination from '@/components/Home/Pagination.vue';

  export default {
    name: 'Home',
    components: {
      ProductList,
      Pagination,
    },
  };
</script>

<style lang="scss" scoped></style>
