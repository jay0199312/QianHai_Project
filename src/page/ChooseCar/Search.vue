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
        <my-carlist>browser-sync start --server --files "**/*.css, **/*.html"

        </my-carlist>
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
      }
    },
    data(){
      return{
        value:'',
        result:[
          {
            title:'hanlanda',
            value:'75w'
          },{
            title:'宝马',
            value:'75w'
          },{
            title:'悍马',
            value:'75w'
          },{
            title:'保时捷',
            value:'75w'
          },{
            title:'玛莎拉蒂',
            value:'75w'
          },{
            title:'路虎',
            value:'75w'
          },{
            title:'法拉利',
            value:'75w'
          },{
            title:'雪铁龙',
            value:'75w'
          },{
            title:'奥迪a9',
            value:'75w'
          }
        ],
        historySearch:[
          '雪铁龙','奥迪a9','学弗兰','玛莎拉蒂'
        ]
      }


    }
  }
</script>

