import Vue from 'vue';
import App from './App.vue';
import router from './router';
import stores from './store/index';
import vuetify from './plugins/vuetify';
import './styles/global.scss'

Vue.config.productionTip = false;

new Vue({
  router,
  stores,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
