import Vue from 'vue'
import Router from 'vue-router'
import Engine from '@/components/engine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'engine',
      component: Engine
    }
  ]
})
