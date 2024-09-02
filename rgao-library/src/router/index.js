import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import LoginView from '@/views/LoginView.vue'
// import AccessDenied from '@/views/AccessDenied.vue'
import FirebaseSignin from '@/views/FirebaseSignin.vue'

const routes = [
  {
    path: '/firelogin',
    name: 'FireLogin',
    component: FirebaseSignin
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: AboutView,
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: LoginView
  // },
  // {
  //   path: '/access-denied',
  //   name: 'AccessDenied',
  //   component: AccessDenied
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  if (to.meta?.requiresAuth && !isAuthenticated) {
    next('/access-denied')
  } else {
    next()
  }
})

export default router
