import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
        path: '/hello',
        name: 'hello',
        component: HelloWorld
      },
  ]
})