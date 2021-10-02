import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSession from 'vue-session'

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

Vue.use(VueSession)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
