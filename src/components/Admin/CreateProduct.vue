<template>
  <div id="create-product">
    <h2 class="text-center">Create Product</h2>

    <div class="row">
      <form class="col-md-6 col-12 mx-auto py-4">
        <div class="form-group d-flex align-items-center">
          <label for="title" style="flex: 1">Title: </label>
          <input v-model="form.title" type="text" class="form-control" style="flex: 5" id="title" />
        </div>

        <div class="form-group d-flex align-items-center">
          <label for="image" style="flex: 1">Image: </label>
          <input v-model="form.image" type="text" class="form-control" style="flex: 5" id="image" />
        </div>

        <div class="form-group d-flex align-items-center">
          <label for="price" style="flex: 1">Price: </label>
          <input
            v-model="form.price"
            type="number"
            step="5"
            class="form-control"
            style="flex: 5"
            id="price"
          />
        </div>

        <div class="form-group d-flex align-items-center">
          <label for="category" style="flex: 1">Category: </label>
          <input
            v-model="form.category"
            type="text"
            class="form-control"
            style="flex: 5"
            id="category"
          />
        </div>

        <div class="form-group">
          <label for="description">Description: </label>
          <textarea
            v-model="form.description"
            class="form-control"
            id="description"
            rows="8"
          ></textarea>
        </div>

        <button type="button" class="btn btn-primary d-block mx-auto" @click="createProduct">
          Add New Product
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import * as Product from '@/apis/Product.js';
  export default {
    name: 'AdminCreateProduct',
    data() {
      return {
        productList: [],
        form: {
          id: null,
          title: '',
          price: 10,
          description: '',
          category: '',
          image: '',
        },
      };
    },
    async created() {
      this.productList = await Product.getAllProduct();
    },
    methods: {
      // Create Read Update Delete => HTTPs Method: POST GET PUT/PATCH DELETE
      async createProduct() {
        const id = this.productList[this.productList.length - 1].id + 1;
        this.form = { ...this.form, id };
        const result = await Product.createNewProduct(this.form);
        if (result) {
          alert('Add new product successfully!');

          this.productList = await Product.getAllProduct();
          this.form = {
            id: null,
            title: '',
            price: 10,
            description: '',
            category: '',
            image: '',
          };
        }
      },
    },
  };
</script>

<style lang="scss" scoped></style>
