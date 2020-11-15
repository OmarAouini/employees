import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(buefy);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
