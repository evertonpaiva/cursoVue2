import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate, { Validator } from 'vee-validate';
import msgBR from 'vee-validate/dist/locale/pt_BR';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history' 
});

Vue.use(VeeValidate);
Validator.localize('pt_BR', msgBR);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
