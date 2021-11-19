<template>
  <header id="header">
    <!-- Client -->
    <nav
      v-if="checkHeaderPage"
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    >
      <router-link class="navbar-brand" to="/">
        <img :src="require('@/assets/logo.png')" class="logo" alt="" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li
            class="nav-item text-uppercase"
            v-for="(route, index) in routeList"
            :key="index"
          >
            <router-link class="nav-link" :to="route.link">{{
              route.name
            }}</router-link>
          </li>
        </ul>

        <div class="cart">
          <i class="fas fa-shopping-cart"></i>
          <span v-show="true" class="count-item">3</span>
        </div>

        <div class="account">
          <div v-show="!auth.user.isSignin"> <!--flase-->
            <a class="btn btn-md text-white" href="/sign-in">Đăng Nhập</a>
            <a class="btn btn-md text-white" href="/sign-up">Đăng Ký</a>
          </div>

          <div v-show="auth.user.isSignin" @click="toggleLogout">
            <i class="fas fa-user-circle" ></i>
            <!-- css logout -->
            <ul v-if ="!checkClickLogo" style = "display: none">
              <li>Logg</li>
            </ul>
             <ul v-else style = "display: block">
              <li @click="logout">Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Admin -->
    <nav v-else class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <router-link class="navbar-brand" to="/">
        <img :src="require('@/assets/logo.png')" class="logo" alt="" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item text-uppercase">
            <router-link class="nav-link" to="/admin"> Admin </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      checkClickLogo: false,
      checkHeaderPage: true,
      routeList: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
      ],
    };
  },
  computed: mapState(["auth"]),
  created() {
    this.checkHeaderPage = !window.location.href.includes("admin");
    console.log(this.auth.user);
  },
  methods: {
    toggleLogout(){
      this.checkClickLogo = !this.checkClickLogo;
    },
    logout(){
      this.auth.user.isSignin = !this.auth.user.isSignin;
    }
  },
};
</script>

<style lang="scss" scoped>
// @import '@/_variable.scss';
@mixin icon-div {
  display: flex;
  align-items: center;
  margin: 0 15px;
  font-size: 18px;
  color: #fff;
  position: relative;
  cursor: pointer;
}
li{
  list-style-type: none;
}
#header {
  height: $header-height;
  .logo {
    width: 30px;
  }

  .account {
    @include icon-div;

    a {
      transition: opacity 0.25s ease-in;
      will-change: opacity;

      &:hover {
        opacity: 0.7;
      }
    }
  }
  .cart {
    @include icon-div;

    .count-item {
      $size: 25px;
      $position-base: 15px;
      position: absolute;
      display: block;
      top: -$position-base;
      right: -$position-base;
      color: #fff;
      text-align: center;
      background-color: #0984e3;
      width: $size;
      height: $size;
      line-height: $size;
      border-radius: 50%;
    }
  }
}
</style>
