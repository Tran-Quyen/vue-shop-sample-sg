<template>
  <div id="app">
    <Header></Header>

    <main class="main container py-4">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/common/Header';
  import Footer from '@/components/common/Footer';

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    },
  };
</script>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: 0.5s linear;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
  .main{
    min-height: calc(100vh - #{$header-height} - #{$footer-height});
  }
</style>
