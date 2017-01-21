import Vue from 'vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
//css
import 'mint-ui/lib/style.css'
import 'assets/css/animate.min.css'

//js
import Zepto from './zepto.min'
import rem from './rem'

//选车主页
import ChooseCarIndex from './page/ChooseCar/Home.vue'
import ChooseCarSearch from './page/ChooseCar/Search.vue'
import ChooseCarSearchResult from './page/ChooseCar/SearchResult.vue'

//车生活
import CarLife from './page/CarLife/CarLife.vue'
//钣喷
import Spray from './page/Spray/SprayIndex.vue'


//违章
import IllegalIndex from './page/HandleIllegal/Illegal.vue'
import IllegalDetail from './page/HandleIllegal/IllegalDetail.vue'
import IllegalPayComfirm from './page/HandleIllegal/IllegalPayComfirm.vue'

//保养
import maintainIndex from './page/maintain/maintain-project.vue'
import maintainStore from './page/maintain/maintain-store.vue'
import maintainTime from './page/maintain/maintain-time.vue'

import testAjax from './page/testAjax.vue'

//import testRange from './components/range/index.vue'
//import Router from './Router'
// import App from './App.vue'

Vue.use(MintUI);
Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    //{path:'/',component:testAjax},
    {path:'/Spray',component:Spray},

    {path:'/',component:CarLife},

    {path:'/ChooseCarIndex',component:ChooseCarIndex},
    {path:'/ChooseCarSearch',component:ChooseCarSearch},
    {path:'/ChooseCarSearchResult',component:ChooseCarSearchResult},

    {path:'/',component:IllegalIndex},
    {path:'/IllegalDetail',component:IllegalDetail},
    {path:'/IllegalPayComfirm',component:IllegalPayComfirm},

    {path:'/maintainIndex',component:maintainIndex},
    {path:'/maintainStore',component:maintainStore},
    {path:'/maintainTime',component:maintainTime},

    {path:'*',component:IllegalPayComfirm}
  ]
});

  new Vue({
    router,
    el: '#app',
    template:`
      <div>
          <router-view></router-view>
      </div>
    `

});
