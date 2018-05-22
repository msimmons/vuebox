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
      component: Home,
      meta: { isOpen: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { isOpen: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: { isOpen: true }
    },
    {
      path: '/signup-verify',
      name: 'SignupVerify',
      component: SignupVerify,
      meta: { isOpen: true }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
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

router.beforeEach((to, from, next) => {
  if (needsAuth(to, from)) {
    next('/')
  } else {
    next()
  }
})

function needsAuth (to, from) {
  return !to.meta.isOpen && !store.state.auth.authenticated && process.env.USE_AUTH
}

export default router
