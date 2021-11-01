<template>
  <div class="home">
    <ProductList></ProductList>
  </div>
</template>

<script>
  import ProductList from '@/components/Home/ProductList.vue';

  export default {
    name: 'Home',
    components: {
      ProductList,
    },

  };
</script>

<style lang="scss" scoped></style>
