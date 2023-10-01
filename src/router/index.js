import { createRouter, createWebHistory, Router } from 'vue-router'
import store from '../store'

// Vue.use(router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/conversor',
    name: 'conversor',
    component: () => import('../views/ConversorView.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/profile',
    name: 'perfil',
    component: () => import('../views/ProfileView.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/signup',
    name: 'registrar',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/signin',
    name: 'iniciar sesion',
    component: () => import('../views/SignInView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  const rutaPotegida = to.matched.some(record => record.meta.requireAuth)

  if (rutaPotegida && store.state.token === '') {
    next({ name: 'signin' })
  } else {
    next()
  }

})


export default router
