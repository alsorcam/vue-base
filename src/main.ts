import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import Buefy from 'buefy';
import './assets/theme/default.scss';
import './assets/styles.scss';

import VueI18n from 'vue-i18n';
import messages from './assets/i18n';

Vue.use(Buefy);
Vue.config.productionTip = false;

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
