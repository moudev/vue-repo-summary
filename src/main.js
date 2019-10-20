import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'

axios.defaults.headers.common.Authorization = `token ${process.env.VUE_APP_GITHUB_KEY}`;

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
