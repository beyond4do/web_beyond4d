// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMq from 'vue-mq'

Vue.config.productionTip = false

// eslint-disable-next-line
import '@/assets/sass/main.scss'

Vue.use(VueMq, {
  breakpoints: {
    sp: 767,
    pc: Infinity
  },
  defaultBreakpoint: 'sp'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
