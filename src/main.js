import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import router from './router'
import store from './store'

import App from './app'
import './assets/styles/main.scss'

Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
const root = new Vue({
  store,
  router,
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', () => {
  root.$mount('#app')
})

