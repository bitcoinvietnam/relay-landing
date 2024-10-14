import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpecsView from '../views/SpecsView.vue'
import TosView from '../views/TosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'BV Relay' }
    },
    {
      path: '/specs',
      name: 'specs',
      component: SpecsView,
      meta: { title: 'Specification' }
    },
    {
      path: '/tos',
      name: 'tos',
      component: TosView,
      meta: { title: 'Terms of Service' }
    },
    // Catch-all route (must be placed last)
    {
      path: '/:catchAll(.*)', // Regex to match all undefined routes
      name: 'NotFound',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'BV Relay'
  document.title = (to.meta.title as string) || defaultTitle
  next()
})

export default router
