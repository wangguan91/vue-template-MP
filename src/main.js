import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引用路由模块
import router from './router'
Vue.$$router = router

// 引入store
import store from './store'

// 引入全局组件
import components from './components/index'
Vue.use(components)

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入样式文件
import '@/assets/styles/reset.css'
import '@/assets/styles/iconfont.css'

new Vue({
  router, // 路由
  store, // store
  render: h => h(App),
}).$mount('#app')
