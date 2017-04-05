<style scoped lang="scss">
  .searchline{
    padding:0.25rem;
    font-size: 18px;
    border-bottom:1px solid #ccc;
    background: #f5f5f5;
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
    margin-top:.5rem;
    display: block;
  .list{
    color: #333;
  }
  .delallhis{
    padding:10px;
  }
  }

  .fade-enter-active, .fade-leave-active {
    /*transition: opacity .5s;*/
    transition: height 3s;
  }
  .fade-enter, .fade-leave-active {
    /*opacity: 0;*/
    height:1rem;
  }

</style>
<template>
  <div class="page-search">
    <div class="header-search">
      <div class="searchline">
        <span class="search_ico" @click="$store.commit('back')"><i class="mintui mintui-back"></i></span>
        <div class="searchbox">
          <span>
            <i class="mintui mintui-search"></i>
          </span>
          <input type="text" placeholder="车辆搜索" v-model="value">
        </div>
        <span class="search" @click="getSearchResult" @keyup="getSearchResult">搜索</span>
      </div>

        <myCarKindlist
          v-for="item in result.goods"
          :src="item.thumb"
          :labels="item.label.split(',')"
          :link_id="item.id">
          <span slot="title">{{item.name}}</span>
          <span slot="carPrice">{{item.price}}</span>
        </myCarKindlist>

      <div class="ever-search">
        <mt-cell title="历史搜索"></mt-cell>
        <mt-cell class="list" v-for='item of searchHistory' :title="item" @click.native="goSearch(item)"></mt-cell>
        <mt-cell class="list" v-show="!searchHistory.length" title="暂无搜索记录"></mt-cell>
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
    components:{myCarKindlist},
    data(){
      return{
        value:'',
        cacheVal:'',
        result:[],
        searchHistory:""
      }
    },
    methods:{
      getSearchResult(){
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
                if(response.body.status_code == 1){
                  let sh = sessionStorage.getItem("searchHistory");
                  let newsh = [];
                 if(sh)newsh.unshift(sh);
                  newsh.unshift(this.value);
                  sessionStorage.setItem("searchHistory",newsh)
                }
              }, response => {
                // error callback
              });
          }
        }
      },
      cleanHistory(){
        sessionStorage.setItem("searchHistory","");
        this.searchHistory = "";
      },
      goSearch(item){
        this.value = item;
      }
    },
    created(){
      let sh = sessionStorage.getItem("searchHistory");
      if(sh)this.searchHistory = sh.split(',').slice(0,5);
      //console.log(this.searchHistory)
    }
  }
</script>

