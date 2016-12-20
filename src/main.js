import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './page/GoodsDetail/GoodsDetail.vue'
import Zepto from './zepto.min'
import rem from './rem'
// import App from './App.vue'
//import Router from './Router'

Vue.use(MintUI)

new Vue({
  el: '#app',
  render: h => h(App)
});
