<template>
  <div
    class="card card-product my-3"
    data-aos="fade-in"
    data-aos-easing="ease-out"
    data-aos-duration="1500"
  >
    <div data-aos="flip-left" data-aos-easing="ease-out" data-aos-duration="1500">
      <a :href="`./product/${product.id}`">
        <img class="card-img-top card-product__image" :src="product.image" alt="" />
      </a>

      <div class="card-body">
        <h5 class="card-title card-product__title">{{ product.title }}</h5>
        <p class="card-text card-product__category">Category: {{ product.category }}</p>
        <p class="card-text text-justify card-product__desc">
          {{ product.description }}
        </p>

        <div class="row justify-content-between mx-auto" style="width: 100%">
          <p class="price">{{ product.price }}$</p>
          <a :href="`./product/${product.id}`" class="btn btn-primary">More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: ['product'],
  };
</script>

<style lang="scss" scoped>
  .card-product {
    $gap: 15px;
    width: calc((100% - 3 * #{$gap}) / 4);

    &__image {
      height: 300px;
      padding: 15px 10px;
    }

    &__title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__category {
      font-weight: 600;
    }

    &__desc {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
</style>
