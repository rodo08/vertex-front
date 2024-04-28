import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterFormView.vue')
    },
    {
      path: '/personal-information',
      name: 'personal-information',
      component: () => import('../views/PersonalInfoView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/created-events',
      name: 'created-events',
      component: () => import('../views/CreatedEventsView.vue')
    }
  ]
})

export default router
