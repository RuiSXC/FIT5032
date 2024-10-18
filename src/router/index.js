import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AccessDenied from '@/views/AccessDenied.vue'
import FirebaseSignin from '@/views/FirebaseSignin.vue'
import FirebaseRegister from '@/views/FirebaseRegister.vue'
import AddBookView from '@/views/AddBookView.vue'
import EditBookView from '@/views/EditBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import GetAllBookAPI from '@/views/GetAllBookAPI.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
// import LoginView from '@/views/LoginView.vue'



const routes = [
  {
    path: '/firelogin',
    name: 'FireLogin',
    component: FirebaseSignin
  },
  {
    path: '/fireregister',
    name: 'FireRegister',
    component: FirebaseRegister
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView,
    meta: { requiresAuth: true }
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView,
    meta: { requiresAuth: true }
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI,
    meta: { requiresAuth: true }
  },
  {
    path: '/GetAllBookAPI',
    name: 'GetAllBookAPI',
    component: GetAllBookAPI,
    meta: { requiresAuth: true }
  },
  {
    path: '/editbook',
    name: 'EditBook',
    component: EditBookView,
    meta: { requiresAuth: true }
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDenied
  }
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: LoginView
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})






router.beforeEach((to, from, next) => {
  if (to.meta?.requiresAuth && localStorage.getItem('user') === null) {
    next('/access-denied')
  } else {
    next()
  }
})



export default router
