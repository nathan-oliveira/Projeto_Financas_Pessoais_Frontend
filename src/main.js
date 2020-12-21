import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import {
  BarChart,
  PieChart
} from 'dr-vue-echarts';

import PaginaCarregando from '@/components/layouts/PaginaCarregando.vue';
import MensagemErro from '@/components/layouts/MensagemErro.vue';
import MensagemSuccess from "@/components/layouts/MensagemSuccess.vue";

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(BarChart);
Vue.use(PieChart);
Vue.use(VueSweetalert2);

Vue.component('PaginaCarregando', PaginaCarregando);
Vue.component('MensagemErro', MensagemErro);
Vue.component('MensagemSuccess', MensagemSuccess);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
