import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@babel/polyfill';
import 'mutationobserver-shim';
import './plugins/bootstrap-vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/js/brands.min.js';
import '@fortawesome/fontawesome-free/js/solid.min.js';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mounted: () => AOS.init(),
  render: (h) => h(App),
}).$mount('#app');
