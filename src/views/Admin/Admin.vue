<template>
  <div id="admin">
    <SideBar></SideBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import SideBar from '@/components/common/SideBar';
  export default {
    name: 'Admin',
    components: {
      SideBar,
    },
  };
</script>

<style lang="scss" scoped></style>
