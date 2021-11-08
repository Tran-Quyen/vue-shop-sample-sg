<template>
  <div class="sidebar">
    <div class="area"></div>
    <nav class="main-menu">
      <ul>
        <li>
          <a href="/admin">
            <i class="fa fa-home fa-2x"></i>
            <span class="nav-text"> Product List </span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-laptop fa-2x"></i>
            <span class="nav-text"> Stars Components </span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-list fa-2x"></i>
            <span class="nav-text"> Forms </span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-folder-open fa-2x"></i>
            <span class="nav-text"> Pages </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-bar-chart-o fa-2x"></i>
            <span class="nav-text"> Graphs and Statistics </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-font fa-2x"></i>
            <span class="nav-text"> Quotes </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-table fa-2x"></i>
            <span class="nav-text"> Tables </span>
          </a>
        </li>
      </ul>
      <ul class="logout">
        <li>
          <a href="#">
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text"> Logout </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
  };
</script>

<style lang="scss">
  @import url('//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css');
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:300');
  .main-menu {
    background: #212121;
    border-right: 1px solid #e5e5e5;
    position: fixed;
    top: calc(#{$header-height} - 1px);
    bottom: 0;
    height: calc(100% - #{$header-height});
    left: 0;
    width: 50px;
    overflow: hidden;
    transition: width 0.05s linear;
    transform: translateZ(0), scale(1, 1);
    z-index: 1;

    &:hover,
    nav.main-menu.expanded {
      width: 250px !important;
      overflow: visible;
    }

    & > ul {
      margin: 7px 0;
    }
    li {
      position: relative;
      display: block;
      width: 250px;
      & > a {
        position: relative;
        border-collapse: collapse;
        border-spacing: 0;
        color: #999;
        font-family: arial;
        font-size: 14px;
        text-decoration: none;
        transform: translateZ(0) scale(1, 1);
        transition: all 0.1s linear;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
      }
    }

    .nav-icon {
      position: relative;
      display: table-cell;
      width: 60px;
      height: 36px;
      text-align: center;
      vertical-align: middle;
      font-size: 18px;
    }

    .nav-text {
      position: relative;
      display: table-cell;
      vertical-align: middle;
      width: 190px;
      font-family: 'Titillium Web', sans-serif;
    }

    ul.logout {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  .no-touch .scrollable.hover {
    overflow-y: hidden;
  }

  .no-touch .scrollable.hover:hover {
    overflow-y: auto;
    overflow: visible;
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  nav {
    user-select: none;
  }

  nav ul,
  nav li {
    outline: 0;
    margin: 0;
    padding: 0;
  }
  .main-menu li:hover > a,
  nav.main-menu li.active > a,
  .dropdown-menu > li > a:hover,
  .dropdown-menu > li > a:focus,
  .dropdown-menu > .active > a,
  .dropdown-menu > .active > a:hover,
  .dropdown-menu > .active > a:focus,
  .no-touch .dashboard-page nav.dashboard-menu ul li:hover a,
  .dashboard-page nav.dashboard-menu ul li.active a {
    color: #fff;
    background-color: #5fa2db;
  }
  .area {
    float: left;
    background: #e2e2e2;
    width: 100%;
    height: 100%;
  }
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 300;
    src: local('Titillium WebLight'), local('TitilliumWeb-Light'),
      url('http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff')
        format('woff');
  }
</style>
