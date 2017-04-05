import Vue from 'vue'
import VueRouter from 'vue-router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//css
import 'mint-ui/lib/style.css'
import 'assets/css/animate.min.css'

import store from './store/store'

import VueResource from 'vue-resource';

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

//订单信息
import OrderDetail from './page/OrderDetail/orderdetail.vue'

//支付
import Pay from './page/Pay/pay.vue'

// import testAjax from './page/testAjax.vue'
//import testAlipay from './page/testAlipay.vue'
// import carKind from './components/carKind.vue'

import GoodsDetail from './page/GoodsDetail/GoodsDetail.vue'

//主页和我的模块
import homePage from './page/UserModule/home-page.vue'
import myPage from './page/UserModule/my-page.vue';
import myOrder from './page/UserModule/my-order.vue';
import myReservation from './page/UserModule/my-reservation.vue';
import myCar from './page/UserModule/my-car.vue';
import carMessage from './page/UserModule/car-message.vue';
import mySetting from './page/UserModule/my-setting.vue';
import orderInformation from './page/UserModule/order-information.vue';
import myCollection from './page/UserModule/my-collection.vue'
import changeName from './page/UserModule/change-name.vue'
import exhibition from './page/UserModule/exhibition.vue'
import loadmore from './page/UserModule/loadmore.vue'
import messageCenter from './page/UserModule/message-center.vue'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(MintUI);


const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:homePage,meta:{show:true}},
    {path:'/homePage',component:homePage,meta:{show:true}},
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

    {path:'/GoodsDetail',component:GoodsDetail},

    {path:'/OrderDetail',component:OrderDetail},

    {path:'/Pay',component:Pay},

    { path: '/myPage', component: myPage,meta:{show:true}},
    { path: '/myOrder', component: myOrder },
    { path: '/myCar', component: myCar },
    { path: '/carMessage', component: carMessage},
    { path: '/myReservation', component: myReservation },
    { path: '/mySetting', component: mySetting },
    { path: '/orderInformation', component: orderInformation },
    { path: '/myCollection', component: myCollection },
    { path: '/changeName', component: changeName },
    { path: '/exhibition', component: exhibition },
    { path: '/loadmore', component: loadmore },
    { path: '/messageCenter', component:messageCenter},

    {path:'*',component:homePage,meta:{show:true}}
  ]
});

new Vue({
  el:'#app',
  router,
  store,
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
    <footbar v-if="$route.meta.show"></footbar>
    <transition :name="aaa" mode="out-in">
       <router-view ></router-view>
    </transition>
    </div>
  `
});
