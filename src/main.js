import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import './main.css';
import { routes } from './routes';

import { extend } from 'vee-validate';

import { required } from 'vee-validate/dist/rules';
extend('required', {
  ...required,
  message: 'Campo obrigatório'
});

import { max } from 'vee-validate/dist/rules';
extend('max', {
  ...max,
  message: (campo, regra) => `Necessário ter no máximo ${regra.length} caracteres`
});

extend('password', {
  message: 'A senha deve conter ao menos 1 número, 1 letra maiúscula e 1 letra minúscula.',
  validate: password => {
    const contemNumero = /[0-9]/.test(password);
    const contemMaiuscula = /[A-Z]/.test(password);
    const contemMinuscula = /[a-z]/.test(password);
    return contemNumero && contemMaiuscula && contemMinuscula;
  }
});

const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active',
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
