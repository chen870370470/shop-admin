import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/applayout.vue'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../views/home/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  // 路由规则
  routes
})
export default router
