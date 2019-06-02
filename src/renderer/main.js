import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import ArgonDashboard from './plugins/argon-dashboard'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

Vue.use(ArgonDashboard)
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
