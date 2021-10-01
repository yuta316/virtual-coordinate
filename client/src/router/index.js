import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/Home'),
    children: [
      {
        path: 'closet',
        component: () => import('@/components/closet/index'),
        name: 'closet'
      },
      {
        path: 'clothes',
        component: () => import('@/components/closet/list'),
        props: true,
        name: 'clothes',
      },
      {
        path: 'coordination',
        component: () => import('@/components/coordination/index'),
        name: 'coordination'
    },
    {
      path: 'mypage',
      component: () => import('@/components/mypage/index'),
      name: 'mypage'
  },
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/components/pages/Auth')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
