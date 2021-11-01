<template>
  <div id="product-list">
    <div class="row justify-content-between">
      <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
    </div>
  </div>
</template>

<script>
  import * as Product from '@/apis/Product.js';
  import ProductCard from './Child/ProductCard.vue';

  export default {
    name: 'ProductList',
    components: {
      ProductCard,
    },
    data() {
      return {
        products: [],
      };
    },
    async created() {
      this.products = await Product.getAllProduct();
      console.log(this.products);
    },
  };
</script>

<style></style>
