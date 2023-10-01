import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/profile',
    name: 'perfil',
    component: () => import('../views/ProfileView.vue')
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

export default router
