import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

sync(store, router)

const app = new Vue({
  router,
  store,
  BootstrapVue,
  ...App
})

export { app, router, store }
