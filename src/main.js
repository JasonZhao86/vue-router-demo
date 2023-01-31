import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/router'
import App from './App.vue'

Vue.config.productionTip = false
// 全局挂载vue-router插件，在vue中加载vue的插件，都需要调用Vue.use()
Vue.use(VueRouter)

// 路由对象关联到全局Vue实例对象
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
