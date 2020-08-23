import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Times from '../pages/times/index.vue'
import Division from '../pages/division/index.vue'

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Home' },
    },
    {
      path: '/times',
      name: 'Times',
      component: Times,
      meta: { title: 'Times' },
    },
    {
      path: '/division',
      name: 'Division',
      component: Division,
      meta: { title: 'Division' },
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

export { router }
