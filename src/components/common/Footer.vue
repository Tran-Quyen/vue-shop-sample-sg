<template>
  <footer id="footer" class="footer mt-5">
    <p class="copyright text-center">@copyright 2021 - Design by Quyen Dang</p>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>

<style lang="scss" >
@import '@/_variable.scss';
  .footer {
    background-color: #000;
    font-size: 18px;
    color: #fff;
    height: $footer-height;
    line-height: $footer-height;
    z-index: 999999;

    p {
      margin-bottom: 0;
    }
  }
</style>
