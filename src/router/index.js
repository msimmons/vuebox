import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import IdDisplay from '@/components/IdDisplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/:id',
      component: IdDisplay,
      props: (route) => ({ id: route.params.id, option: route.query.option })
    }
  ]
})
