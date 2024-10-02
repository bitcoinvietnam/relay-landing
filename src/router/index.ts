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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SpecsView,
      meta: { title: 'Specification' }
    },
    {
      path: '/tos',
      name: 'tos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TosView,
      meta: { title: 'Terms of Service' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'BV Relay'
  document.title = (to.meta.title as string) || defaultTitle
  next()
})

export default router
