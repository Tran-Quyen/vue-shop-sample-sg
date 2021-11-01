<template>
  <div id="product-detail" class="product-detail">
    <div class="row">
      <div class="col-md-4">
        <img :src="product.image" :alt="product.title" class="product-detail__image" />
      </div>

      <div class="col-md-8 position-relative">
        <h3>{{ product.title }}</h3>
        <div class="row justify-content-between mt-4" style="margin: 0">
          <p class="product-detail__category text-uppercase">Category: {{ product.category }}</p>

          <p class="product-detail__price">{{ product.price }}$</p>
        </div>
        <p class="product-detail__description">
          {{ product.description }}
        </p>

        <div class="product-detail__actions row justify-content-between" style="margin: 0 15px;">
          <a class="btn btn-primary btn-lg" href="/">Back</a>
          <button class="btn btn-success btn-lg">Buy Product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as Product from '@/apis/Product.js';

  export default {
    name: 'ProductDetail',
    data() {
      return {
        product: {},
      };
    },
    async created() {
      const { id } = this.$route.params;
      this.product = await Product.getProductById(id);
      console.log(this.product);
    },
  };
</script>

<style lang="scss" scoped>
  .product-detail {
    &__image {
      width: 100%;
      display: block;
      object-fit: contain;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
    }
    &__category {
    }
    &__price {
      color: green;
      font-size: 20px;
    }
    &__description {
      min-height: 200px;
    }
    &__actions {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
</style>
