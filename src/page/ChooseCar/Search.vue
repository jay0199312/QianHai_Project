<style scoped lang="scss">

  .ever-search{
    position: absolute;
    top:50vh;
    width:100%;
    /*z-index: -1;*/
    display: block;
  .mint-cell{
    background: #f5f5f5;
    color: #999;
  }
  .list{
    color: #333;
  }
  .delallhis{
    padding:10px;
  }
  }

</style>
<template>
  <div class="page-search">
    <div class="header-search">
      <mt-search v-model="value">
        <myCarKindlist v-for="item in result">
          <span slot="title">{{item.title}}</span>
          <span slot="carPrize">{{item.carPrize}}</span>
          <label class="tag-warm" slot="label" v-for="lab in item.labels">{{lab}}</label>
        </myCarKindlist>
      </mt-search>
    </div>
    <div class="ever-search">
      <mt-cell title="历史搜索"></mt-cell>
      <mt-cell class="list" v-for='item of historySearch' :title="item"></mt-cell>
      <mt-cell class="list" v-show="!historySearch.length" title="暂无历史记录"></mt-cell>
      <div class="delallhis">
        <mt-button size="large" @click.native="cleanHistory">清空历史记录</mt-button>
      </div>

    </div>

  </div>
</template>

<script>
  import listCarKind from '../../components/carKindList.vue'
  import myCarKindlist from '../../components/carKindList.vue'
  export default{
    name:'page-search',
    methods: {
      cleanHistory () {
        this.historySearch="";
      }
    },
    computed: {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      },
     // lables(){
//        const string = "aaa,bbb,cc,ded,fff,ggg";   //原始数据
//        const array = string.split(",");           //转化为数组
//        const value = array[Math.round(Math.random()*(array.length-1))];  //随机抽取一个值const
//        return
     // }
    },
    components:{
      myCarKindlist
    },
    data(){
      return{
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
          }
        ],
        historySearch:[
          '雪铁龙','奥迪a9','学弗兰','玛莎拉蒂'
        ]
      }


    }
  }
</script>

