import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { http } from './lib/http';

Vue.config.productionTip = false;

//  manually register the http client
//  for global injector as a singleton
Vue.use({
  install(Vue) {
    Vue.prototype.$http = http;
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
