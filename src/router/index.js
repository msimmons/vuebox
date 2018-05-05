import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Signup from '@/pages/Signup'
import SignupVerify from '@/pages/SignupVerify'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import Start1 from '@/pages/Start1'
import Start2 from '@/pages/Start2'
import store from '@/store'
import AFlow from './flows/AFlow'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signup-verify',
      name: 'SignupVerify',
      component: SignupVerify
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: beforeEnter,
      meta: { requiresAuth: true }
    },
    {
      path: '/start1',
      name: 'Start1',
      component: Start1
    },
    {
      path: '/start2',
      name: 'Start2',
      component: Start2
    },
    {
      path: '*',
      name: 'CatchAll',
      redirect: '/'
    }
  ]
})

router.addRoutes(AFlow)

function beforeEnter (to, from, next) {
  if (to.meta.requiresAuth) {
    checkAuth(to, from, next)
  }
}

function checkAuth (to, from, next) {
  if (!store.state.auth.authenticated) {
    next('/')
  } else {
    next()
  }
}

export default router
