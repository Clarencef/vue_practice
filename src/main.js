// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import App from './app'
import Users from './components/Users'
import Test from './components/test'
import Crud from './components/crud'
import TwitterVue from './components/TwitterVue'
import VuexStore from './vuex/store'
import './assets/styles/main.scss'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store(VuexStore)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Users
    }, {
      path: '/test',
      component: Test
    }, {
      path: '/crud',
      component: Crud
    }, {
      path: '/twitter',
      component: TwitterVue
    }
  ]
})

/* eslint-disable no-new */
const root = new Vue({
  store,
  router,
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', () => {
  root.$mount('#app')
})

