<style scoped lang="scss">
.cell{
  background: #fff;
  padding:10px;
}
  .nav{
    margin-top:10px;
    background: #ffffff;
    border-bottom:1px solid #ededed;
    padding-left:.5rem;
    label{
      display: inline-block;
      padding:.4rem .3rem .2rem .3rem;
    }
  }
</style>
<template>
  <div class="page-search-result">
    <mt-header title="选车">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="cell">
      <mt-button plain size="small" type="primary">primary</mt-button>
      <mt-button plain size="small" type="primary">primary</mt-button>
      <mt-button plain size="small" type="primary">primary</mt-button>
    </div>
    <div class="nav">
      <label @click.prevent="active = 'tab-container1'" >综合</label>
      <label @click.prevent="active = 'tab-container2'">热门</label>
      <label @click.prevent="active = 'tab-container3'">价格</label>
    </div>
    <div class="tebs">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1">
          <myCarKindlist v-for="item in result">
            <span slot="title">{{item.title}}</span>
            <span slot="carPrize">{{item.carPrize}}</span>
            <label class="tag-warm" slot="label" v-for="lab in item.labels">{{lab}}</label>
          </myCarKindlist>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <myCarKindlist v-for="item in result1">
            <span slot="title">{{item.title}}</span>
            <span slot="carPrize">{{item.carPrize}}</span>
            <label class="tag-warm" slot="label" v-for="lab in item.labels">{{lab}}</label>
          </myCarKindlist>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <myCarKindlist v-for="item in result2">
            <span slot="title">{{item.title}}</span>
            <span slot="carPrize">{{item.carPrize}}</span>
            <label class="tag-warm" slot="label" v-for="lab in item.labels">{{lab}}</label>
          </myCarKindlist>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
  import myCarKindlist from '../../components/carKindList.vue'
  export default{
    name:'page-search-result',
    methods: {
      cleanHistory () {
        this.historySearch="";
      }
    },
    computed: {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    },
    components:{
      myCarKindlist
    },
    data(){
      return{
        active: 'tab-container1',
        value:'',
        result:[
          {
            src:'http://121.40.78.200/pic/shop/article/98769753226215688556746.jpg',
            title:'穿越者2016超级SUV穿越者2016超级SUV',
            carPrize:'35',
            labels:['耐力好','很强','适合车震','泡女神器']
          },{
            labels:['逼格高','很强','适合车震','耐操'],
            src:'http://121.40.78.200/pic/shop/article/98769753226215688556746.jpg',
            title:'悍马豪华尊贵版越野型suv',
            carPrize:'37'
          },{
            labels:['逼格高','霸脚','适合车震','耐操'],
            src:'http://121.40.78.200/pic/shop/article/98769753226215688556746.jpg',
            title:'玛莎拉蒂奢华尊贵版霸脚suv',
            carPrize:'37'
          }
        ],
        result1:[
          {
            src:'http://121.40.78.200/pic/shop/article/98769753226215688556746.jpg',
            title:'穿越者2016超级SUV穿越者2016超级SUV',
            carPrize:'35',
            labels:['耐力好','很强','适合车震','泡女神器']
          },{
            labels:['逼格高','很强','适合车震','耐操'],
            src:'http://121.40.78.200/pic/shop/article/98769753226215688556746.jpg',
            title:'悍马豪华尊贵版越野型suv',
            carPrize:'37'
          }
        ],
        result2:[
          {
            src:'http://121.40.78.200/pic/shop/article/98769753226215688556746.jpg',
            title:'穿越者2016超级SUV穿越者2016超级SUV',
            carPrize:'35',
            labels:['耐力好','很强','适合车震','泡女神器']
          },{
            src:'http://121.40.78.200/pic/shop/article/98769753226215688556746.jpg',
            title:'穿越者2016超级SUV穿越者2016超级SUV',
            carPrize:'35',
            labels:['耐力好','很强','适合车震','泡女神器']
          },{
            labels:['逼格高','很强','适合车震','耐操'],
            src:'http://121.40.78.200/pic/shop/article/98769753226215688556746.jpg',
            title:'悍马豪华尊贵版越野型suv',
            carPrize:'37'
          }
        ]
      }


    }
  }
</script>

