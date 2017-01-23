import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'

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

import footbar from './components/footBar.vue'

import testAjax from './page/testAjax.vue'
import carKind from './components/carKind.vue'

Vue.use(VueRouter);
Vue.use(MintUI);


const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:carKind},
    {path:'/Spray',component:Spray},

    {path:'/CarLife',component:CarLife,meta:{show:true}},

    {path:'/ChooseCarIndex',component:ChooseCarIndex,meta:{show:true}},
    {path:'/ChooseCarSearch',component:ChooseCarSearch},
    {path:'/ChooseCarSearchResult',component:ChooseCarSearchResult},

    {path:'/IllegalIndex',component:IllegalIndex},
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
  data(){
    return {
      aaa:'fade1',
      selected:2
    }
  },
  components:{
    footbar
  },
  template:`
    <div>
    <footbar v-show="$route.meta.show"></footbar>
    <transition :name="aaa" mode="out-in">
       <router-view ></router-view>
    </transition>
    </div>
  `
}).$mount('#app');
