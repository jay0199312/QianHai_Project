import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home ={
  template:`
    <div>
        <h2>home</h2>
        <p>this is home</p>
    </div>
  `
};
const parent ={
  template:`
    <div>
        <h2>parent</h2>
        <p>this is parent</p>
    </div>
  `
};
const pageError={
  template:`
    <div>
        <h2>页面不存在</h2>
        
    </div>
  `
};

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:Home},
    {path:'/parent',component:parent},
    {path:'*',component:pageError}
  ]
});

new Vue({
  router,
  data(){
    return {
      aaa:'fade1'
    }
  },
  template:`
    <div id="app">
        <h2>这是动画</h2>
        <ul>
            <li><router-link to="/">/home</router-link></li>
            <li><router-link to="/parent">/parent</router-link></li>
            <li><router-link to="/dasdf">/error</router-link></li>
        </ul>
        <transition :name="aaa" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
  `,
  watch:{
    '$route'(to,from){
     if(from.path == '/parent'){
       this.aaa = 'fade1'
     }else{
       this.aaa = 'fade2'
     }
    }
  },
  methods:{
    back:function () {
      router.go(-1)
    },
    forward:function () {
      router.go(1)
    },
    home:function () {
      router.push('/')
    }
  }

}).$mount('#app')
