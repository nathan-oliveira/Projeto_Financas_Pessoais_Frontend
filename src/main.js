import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import PaginaCarregando from '@/components/layouts/PaginaCarregando.vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.component('PaginaCarregando', PaginaCarregando);
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
