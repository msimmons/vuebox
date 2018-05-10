// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import useMock from './service'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

if (useMock) {
  console.log('Using mock adapter')
}

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created: function () {
    this.$on('logged-out', () => { this.$router.push('/') })
  }
})
