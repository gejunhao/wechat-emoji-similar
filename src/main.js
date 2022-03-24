import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import EmojisPanel from '../packages'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(EmojisPanel)
new Vue({
  render: (h) => h(App),
}).$mount('#app')
