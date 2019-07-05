import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios.js'
import store from './store'
import 'mint-ui/lib/style.css'
import {Header,Button} from 'mint-ui'

import MintUI from 'mint-ui'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './font/iconfont.css'

Vue.config.productionTip = false

Vue.component(Header.name,Header);
Vue.component("mt-button",Button);
// Vue.prototype.axios=axios;
Vue.use(MintUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
