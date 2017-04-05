import Vue from 'vue'
import Vuex from 'vuex'
import { MessageBox, } from 'mint-ui'
Vue.use(Vuex);

const state = {
  //测试服务器地址
  ip:"http://192.168.0.187:8080/",
  location:"qhcarmall/index.php/Home/",

  //qhcarmall : "http://192.168.0.187:8080/qhcarmall/index.php/Home/Api",                   //坤
  //qhcarmall1 : "http://192.168.0.183:8080/qhcarmall/car/index.php/Home/order",            //豪
  // qhcarmall : "http://117.78.34.2/M/index.php/home/api",                                   //服务器


  //服务器地址
  /*IP:"http://117.78.34.2/",
  location:"M/index.php/home/",*/

  carnt : "http://192.168.0.180:8088/CARNT",

  //按条件选车选择的条件
  choosenCondition : [],
  //按条件选车查询结果
  searchResult:[],
};
const mutations={
  //全局返回
  back(){
    window.history.go(-1)
  },

  loginConfirm(){
    MessageBox.confirm('请先登录').then(action => {
      console.log(action)
    }).catch(err => {
      return false
    });
  }
};
export default new Vuex.Store({
  state,mutations
})


