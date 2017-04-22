import VueRouter from 'vue-router'

import Users from './components/Users'
import Test from './components/test'
import Crud from './components/crud'
import TwitterVue from './components/TwitterVue'

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

export default router
