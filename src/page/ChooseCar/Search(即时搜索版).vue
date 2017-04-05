<style scoped lang="scss">
  .searchline{
    padding:0.25rem;
    font-size: 18px;
    display:flex;
    display:-webkit-flex;
    display: -webkit-box;
    display: -webkit-flex;
    -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center;
    span{
      display:inline-block;
      &.search_ico{
        padding-right: 0.25rem;
      }

      i{
        font-size: 24px;
      }
    }

    .searchbox{
      flex: 3;
      -webkit-flex: 3;
      -webkit-box-flex: 3;
      background: #fff;
      border-radius: 0.125rem;
      padding: 0.125rem 0.25rem;
      border:1px solid #dfdfdf;
      span{
        line-height: 0.5rem;
        color:#ccc;
        vertical-align: middle;
      }
      input{
        border:0px;
        padding:0.125rem 0;
        width:5.0rem;
        font-size:16px;
      }
    }
    .search{
      text-align: center;
      color:#444;
      padding:0.25rem;
    }
  }
  .ever-search{
    width:100%;
    display: block;

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
      <div class="searchline">
        <span class="search_ico"><i class="mintui mintui-back"></i></span>
        <div class="searchbox">
          <span>
            <i class="mintui mintui-search"></i>
          </span>
          <input type="text" placeholder="车辆搜索" v-model="value">
        </div>
        <span class="search">搜索</span>
      </div>
      <myCarKindlist v-for="item in result.goods" :src="item.thumb">
        <span slot="title">{{item.name}}</span>
        <span slot="carPrice">{{item.price}}</span>
        <label class="tag-default" slot="label" v-for="lab in item.label.split(',')">{{lab}}</label>
      </myCarKindlist>
      <div class="ever-search">
        <mt-cell title="历史搜索"></mt-cell>
        <mt-cell class="list" v-for='item of historySearch' :title="item"></mt-cell>
        <mt-cell class="list" v-show="!historySearch.length" title="暂无搜索记录"></mt-cell>
        <div class="delallhis">
          <mt-button size="large" @click.native="cleanHistory">清空历史记录</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import myCarKindlist from '../../components/carKindList.vue'
  export default{
    name:'page-search',
    methods: {
      cleanHistory () {
        this.historySearch="";
      }
    },
    components:{
      myCarKindlist
    },
    data(){
      return{
        value:'',
        cacheVal:'',
        result:[],
        historySearch:""
      }
    },
    methods:{
      getSearchResult(){

      }
    },
    created(){
      setInterval(()=>{
        //console.log(this.value);
        if(this.value != this.cacheVal){
          //console.log(this.cacheVal);
          if(this.value) {
            //console.log(this.value);
            let keyword = this.$store.state.ip + this.$store.state.location + "api/keyword";
            this.$http.post(keyword, {keyword: this.value}, {emulateJSON: true})
              .then(response => {
                console.log(response.body);
                this.result = response.body;

                this.cacheVal = this.value;
              }, response => {
                // error callback
              });
          }
        }
      },4000)
    }
  }
</script>

