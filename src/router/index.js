import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/Layout'
Vue.use(VueRouter)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/main',
    name: 'Main',
    component: Layout,
    redirect: '/first',
    children:[
      {
        path: '/first',
        name: 'First',
        component: () => import('@/views/saving/first')
      },
      {
        path: '/second',
        name: 'Second',
        component: () => import('@/views/saving/second')
      },
      {
        path: '/third',
        name: 'Third',
        component: () => import('@/views/saving/third')
      }
    ]
  }
]
export default new VueRouter({
  // mode: history,
  routes: constantRouterMap
})

//动态添加异步路由
export const asyncRouterMap = [
  {}
]