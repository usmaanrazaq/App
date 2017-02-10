import  Vue from 'vue';

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueCookie from 'vue-cookie';
Vue.use(VueCookie);

import routes from '../routes/routes.js'
import app from '../src/App.vue';

var router = new VueRouter({
  routes: routes
})


new Vue({
  router,
  render: (h) => h(app)
}).$mount('#app');

