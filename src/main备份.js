import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'assets/css/animate.min.css'
import App from './page/HandleIllegal/IllegalPayComfirm.vue'
import Zepto from './zepto.min'
import rem from './rem'
// import App from './App.vue'
import Router from './Router'

Vue.use(MintUI)

new Vue({
  el: '#app',
  render: h => h(App)
});
