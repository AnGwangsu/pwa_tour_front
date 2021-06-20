import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import router from './routes/index'
import Dayjs from 'vue-dayjs-plugin'

Vue.config.productionTip = false

Vue.use(Dayjs)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
