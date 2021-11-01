<template>
  <div class="row">
    <div class="col-md-offset-1 col-md-12">
      <div class="panel">
        <div class="panel-heading">
          <div class="row">
            <div class="col-sm-12 col-xs-12">
              <form class="form-horizontal pull-left">
                <div class="form-group">
                  <label>Show : </label>
                  <select class="form-control">
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                  </select>
                </div>
              </form>

              <a href="#" class="btn btn-sm btn-primary pull-right"
                ><i class="fa fa-plus-circle"></i> Add New</a
              >
            </div>
          </div>
        </div>
        <div class="panel-body table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="product.id">
                <td>{{ index + 1 }}</td>
                <td class="col">{{ product.title }}</td>
                <td>{{ product.price }}$</td>
                <td>{{ product.category }}</td>
                <td>
                  <ul class="action-list">
                    <li>
                      <a href="#" class="btn btn-sm btn-success" style="border-radius: 5px"><i class="fa fa-search"></i></a>
                    </li>
                    <li>
                      <a href="#" class="btn btn-primary" style="border-radius: 5px"><i class="fa fa-pencil-alt"></i></a>
                    </li>
                    <li>
                      <a href="#" class="btn btn-danger" style="border-radius: 5px"><i class="fa fa-times"></i></a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="panel-footer">
          <div class="row">
            <div class="col-sm-6 col-xs-6">showing <b>5</b> out of <b>25</b> entries</div>
            <div class="col-sm-6 col-xs-6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as Product from '@/apis/Product.js';

  export default {
    name: 'AdminMain',
    data() {
      return {
        products: [],
      };
    },
    async created() {
      this.products = await Product.getProductPaginate(1, 5);
      console.log(this.products);
    },
  };
</script>

<style lang="scss" scoped>
  .panel {
    font-family: 'Raleway', sans-serif;
    padding: 0;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  }
  .panel .panel-heading {
    background: #535353;
    padding: 15px;
    border-radius: 0;
  }
  .panel .panel-heading .btn {
    color: #fff;
    background-color: #000;
    font-size: 14px;
    font-weight: 600;
    padding: 7px 15px;
    border: none;
    transition: all 0.3s ease 0s;
  }
  .panel .panel-heading .btn:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  .panel .panel-heading .form-horizontal .form-group {
    margin: 0;
  }
  .panel .panel-heading .form-horizontal label {
    color: #fff;
    margin-right: 10px;
  }
  .panel .panel-heading .form-horizontal .form-control {
    display: inline-block;
    width: 80px;
    border: none;
    border-radius: 0;
  }
  .panel .panel-heading .form-horizontal .form-control:focus {
    box-shadow: none;
    border: none;
  }
  .panel .panel-body {
    padding: 0;
    border-radius: 0;
  }
  .panel .panel-body .table thead tr th {
    color: #fff;
    background: #8d8d8d;
    font-size: 17px;
    font-weight: 700;
    padding: 12px;
    border-bottom: none;
  }
  .panel .panel-body .table thead tr th:nth-of-type(1) {
    width: 120px;
  }
  .panel .panel-body .table thead tr th:nth-of-type(3) {
    width: 50%;
  }
  .panel .panel-body .table tbody tr td {
    color: #555;
    background: #fff;
    font-size: 15px;
    font-weight: 500;
    padding: 13px;
    vertical-align: middle;
    border-color: #e7e7e7;
  }
  .panel .panel-body .table tbody tr:nth-child(odd) td {
    background: #f5f5f5;
  }
  .panel .panel-body .table tbody .action-list {
    padding: 0;
    margin: 0;
    list-style: none;
    min-width: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .panel .panel-body .table tbody .action-list li {
    display: inline-block;
  }
  .panel .panel-body .table tbody .action-list li a {
    color: #fff;
    font-size: 13px;
    line-height: 28px;
    height: 28px;
    width: 33px;
    padding: 0;
    border-radius: 0;
    transition: all 0.3s ease 0s;
  }
  .panel .panel-body .table tbody .action-list li a:hover {
    box-shadow: 0 0 5px #ddd;
  }
  .panel .panel-footer {
    color: #fff;
    background: #535353;
    font-size: 16px;
    line-height: 33px;
    padding: 25px 15px;
    border-radius: 0;
  }
  .pagination {
    margin: 0;
  }
  .pagination li a {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 15px;
    font-weight: 700;
    margin: 0 2px;
    border: none;
    border-radius: 0;
    transition: all 0.3s ease 0s;
  }
  .pagination li a:hover,
  .pagination li a:focus,
  .pagination li.active a {
    color: #fff;
    background-color: #000;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }
</style>
