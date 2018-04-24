import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Signup from '@/pages/Signup'
import SignupVerify from '@/pages/SignupVerify'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
// import store from '@/store'

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
      component: Dashboard
    },
    {
      path: '*',
      name: 'CatchAll',
      redirect: '/'
    }
  ]
})

/*
function checkAuth (to, from, next) {
  if (!store.state.auth.authenticated) {
    next('/')
  } else {
    next()
  }
}
*/

export default router
