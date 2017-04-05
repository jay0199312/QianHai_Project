<style scoped lang="scss">
.cell{
  background: #fff;
  padding:10px;
  line-height:1.2rem;
}
  .nav{
    margin-top:10px;
    background: #ffffff;
    border-bottom:1px solid #ededed;
    padding-left:.5rem;
    label{
      display: inline-block;
      padding:.4rem .3rem .2rem .3rem;
      &.on{
         border-bottom:3px solid #007aff;
         color: #007aff;
       }
    }
  }
</style>
<template>
  <div class="page-search-result">
    <mt-header title="选车">
        <mt-button icon="back" slot="left" @click.native="$store.commit('back')"></mt-button>
    </mt-header>
    <div class="cell">
      <mt-button plain size="small" type="primary" v-show="choosenCondition.max"><!--价格：-->{{choosenCondition.min}}-{{choosenCondition.max}}万</mt-button>
      <mt-button plain size="small" type="primary" v-show="choosenCondition.carbody"><!--车款：-->{{choosenCondition.carbody}}</mt-button>
      <mt-button plain size="small" type="primary" v-show="choosenCondition.drive"><!--驱动：-->{{choosenCondition.drive}}</mt-button>
      <mt-button plain size="small" type="primary" v-show="choosenCondition.country"><!--出产国家：-->{{choosenCondition.country}}</mt-button>
      <router-link to="/ChooseCarIndex"><mt-button plain size="small" type="primary" >更多</mt-button></router-link>
    </div>
    <div class="nav">
      <label v-for="(item,index) in tabs" @click="changeSelected(index)" :class="{on:item.on}" >{{item.name}}</label>

    </div>
    <div class="tebs">
      <myCarKindlist
        v-for="item in result.cars"
        :src="item.thumb"
        :labels="item.label.split(',')"
        :link_id="item.id">
        <span slot="title">{{item.name}}</span>
        <span slot="carPrice">{{item.price}}</span>
      </myCarKindlist>
    </div>
  </div>
</template>

<script type="text/babel">
  import myCarKindlist from '../../components/carKindList.vue'
  import { MessageBox } from 'mint-ui'
  export default{
    name:'page-search-result',
    components:{
      myCarKindlist
    },
    data(){
      return{
        active: 'tab-container1',
        value:'',
        tabs:[
          {on:true,name:"综合"},
          {on:false,name:"热门"},
          {on:false,name:"价格"}
        ],
        result:[],
        choosenCondition:[]
      }
    },
    created(){
      //this.result = this.$store.state.searchResult;
      const r = sessionStorage.getItem("searchResult");
      const c = sessionStorage.getItem("choosenCondition");
      if(r&&c){
        this.result = JSON.parse(r);
        this.choosenCondition = JSON.parse(c);
      }else{
        MessageBox.alert('搜索结果为空').then(action => {
          this.$router.push('/ChooseCarIndex')
        });
      }
      //console.log(this.result)
    },
    methods:{
      changeSelected(index){//点击切换筛选条件
        for(var i=0;i<this.tabs.length;i++){
          this.tabs[i].on=false;
        }
        this.tabs[index].on=true;
        switch (index) {
          case 1:
            this.result.cars.sort(this.sortBy("click"));
            break;
          case 2:
            this.result.cars.sort(this.sortBy("price"));
            break;
          default:
            this.result.cars.sort(this.sortBy("sort"));
            break;
        }
      },
      sortBy(field) {
        return function(a,b){
          return a[field] - b[field];
        }
      }
    }
  }
</script>

