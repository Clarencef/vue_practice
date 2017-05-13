import VueRouter from 'vue-router'

import Main from './components/Main'
import Users from './components/Users'
import Test from './components/test'
import Crud from './components/crud'
import TwitterVue from './components/TwitterVue'
import NotePage from './components/NotePage'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Main
    }, {
      path: '/test',
      component: Test
    }, {
      path: '/crud',
      component: Crud
    }, {
      path: '/twitter',
      component: TwitterVue
    }, {
      path: '/note',
      component: NotePage
    }, {
      path: '/user',
      component: Users
    }
  ]
})

export default router
