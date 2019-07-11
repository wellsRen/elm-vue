import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import index from '@/components/index/index'
import find from '@/components/find/find'
import order from '@/components/order/order'
import me from '@/components/me/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/find',
      name: 'find',
      component: find 
    },
    {
      path: '/order',
      name: 'order',
      component: order 
    },
    {
      path: '/me',
      name: 'me',
      component: me 
    }
  ]
})
