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
      path: '/create-event',
      name: 'create-event',
      component: () => import('../views/CreateNewEventView.vue')
    },
    {
      path: '/created-events',
      name: 'created-events',
      component: () => import('../views/CreatedEventsView.vue')
    },
    {
      path: '/past-events',
      name: 'past-events',
      component: () => import('../views/PastEventsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginFormView.vue')
    },
    {
      path: '/holi',
      name: 'holi',
      component: () => import('../views/HoliHoli.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404View.vue')
    },
    {
      path: '/event-detail',
      name: 'event-detail',
      component: () => import('../views/EventDetailView.vue')
    }
  ]
})

export default router
