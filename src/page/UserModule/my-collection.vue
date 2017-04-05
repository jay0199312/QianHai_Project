<template>

  <div class="my-collection-page">
    <div class="page-header-main">
      <mt-header title="我的收藏" class="my-order-head">
        <router-link to="myPage" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>

      </mt-header>
    </div>
    <div class="page-navbar">

      <div class="my-collection-head-box">
        <mt-navbar class="my-collection-head" v-model="selected">

          <mt-tab-item id="1" class="my-collection-title">车辆</mt-tab-item>
          <mt-tab-item id="2" class="my-collection-title">资讯</mt-tab-item>
          <mt-tab-item id="3" class="my-collection-title">活动</mt-tab-item>
        </mt-navbar>
      </div>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">

            <myCarKindlist
              v-for="item in carCollect"
              :src="item.thumb"
              :labels="item.label.split(',')"
              :link_id="item.type_id">
              <span slot="title">{{item.name}}</span>
              <span slot="carPrice">{{item.price}}</span>
            </myCarKindlist>

        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="my-collection-1-item" v-for="(item,index) in msgCollect">
            <img :src="item.thumb" alt="" class="collection-img">
            <div class="my-collection-2-text">
              <div class="my-collection-2-title">{{item.title}}</div>
              <div class="my-collection-2-time">{{bookTime[index]}}</div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div class="my-collection-3-item" v-for="item in actCollect" >
            <img :src="item.thumb" alt="" class="collection-img-2">
            <div class="my-collection-3-title">{{item.name}}</div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

  </div>
</template>

<style scoped>
  .my-collection-page{
    background-color: #ebebeb;height:17.8rem;
  }
  .my-order-head{
    height: 1.2rem;background-color: #ffffff;font-size: 0.38rem;color: #4a4a4a;border-bottom: 1px solid #ebebeb;
  }
  .my-collection-head-box{
    background-color: #ffffff;width: 100%;border-bottom: 1px solid #ebebeb;
  }
  .my-collection-head{
    background-color: #ffffff;width: 4rem;margin: auto;
  }
  .my-collection-title{
    width: 1rem;
  }
  .my-collection-1-item{
    background-color: #ffffff;height: 2.5rem;border-bottom: 1px solid #d9d9d9;width: 100%;
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: space-between;
  }
  .my-collection-3-item{
    width: 100%;border-bottom: 1px solid #d9d9d9;margin-bottom: 0.3rem;background-color: #ffffff;
  }
  .my-collection-1-text{
    width: 5rem;
  }
  .car-tab{
    display: -webkit-flex; /* Safari */
    display: flex;margin: 0.2rem 0;
  }
  .car-tab div{
    width: 1.2rem;height: 0.6rem;text-align: center;border-radius: 3px;line-height: 0.6rem;color: #ffffff;font-size: 0.25rem;margin-right: 0.1rem;
  }
  .car-tab1{
    background-color: #f7d85b;
  }
  .car-tab2{
    background-color: #ff9b78;
  }
  .car-tab3{
    background-color: #1867d6;
  }
  .car-beauty-rule{
    width: 1.6rem;height: 0.56rem;border: 1px solid #1867d6;border-radius: 3px;margin-right: 0.2rem;
    display: -webkit-flex; /* Safari */
    display: flex;overflow: hidden;
  }
  .car-beauty-rule div{
    width: 0.8rem;height: 0.56rem;text-align: center;line-height: 0.56rem;
  }
  .collection-img{
    width: 2.8rem;margin: 0.3rem;
  }
  .collection-img-2{
    width: 100%;
  }
  .my-collection-2-text{
    width: 6rem;height: 100%;margin-right: 0.3rem;
  }
  .my-collection-2-title{
    font-size: 0.45rem;color: #272727;font-weight: bolder;height: 1.3rem;margin-top: 0.4rem;
  }
  .my-collection-2-time{
    font-size: 0.3rem;color: #8f8f8f;width: 3.8rem;margin-left: 2.5rem;
  }
  .my-collection-3-title{
    font-size: 0.34rem;color: #060001;height: 1rem;line-height: 1rem;margin-left: 0.3rem;
  }
  .shop-img{
    width: 2.5rem;margin-left: 0.3rem;
  }
  .mint-tab-item{
    width: 1rem;border: none;
  }
  .mint-tab-item-label{
   font-size: 0.38rem;color: #4a4a4a;
  }

  .car-beauty-rule1{
    background-color: #1867d6;color: #ffffff;
  }
  .car-beauty-rule2{
    background-color: #ffffff;color: #1867d6;
  }
</style>

<script>
  import myCarKindlist from '../../components/carKindList.vue'
  export default {
    name: 'my-collection',
    components:{myCarKindlist},
    data () {

      return {
        msg: '',
        selected: '1',
        collectSel:[],
        carCollect:[],
        msgCollect:[],
        actCollect:[],
        aaa:[],
        msgTime:[],
        bookTime:[],
      }
    },

    methods: {
      GoDetail(){
        sessionStorage.setItem("GoodsDetail_ID",this.link_id);
        this.$router.push("/GoodsDetail")
      },
      forLogo (){
        this.carCollect =[];this.msgCollect=[];this.actCollect =[];
        for (var i=0;i<this.collectSel.length;i++){
          if(this.collectSel[i].type==1){
            this.carCollect.push(this.collectSel[i])
          }
          if(this.collectSel[i].type==2){
            this.msgCollect.push(this.collectSel[i])
          }
          if(this.collectSel[i].type==3){
            this.actCollect.push(this.collectSel[i])
          }
        }
      },

    },
    created (){
      var PHPheader = this.$store.state.ip + this.$store.state.location;
      var collectSel = PHPheader +'api/collectSel';
      var user_id = localStorage.getItem('user_id');
      this.$http.post(collectSel,{user_id:user_id},{emulateJSON:true}).then(
        function (response) {
          //处理成功结果
          this.collectSel = response.body.collect;
          this.forLogo();
          console.log('carCollect:',this.carCollect);
          console.log('msgCollect:',this.msgCollect);
          console.log('actCollect:',this.actCollect);

          for (var t=0;t<this.msgCollect.length;t++){
            this.msgTime.push(this.msgCollect[t].add_time)
          }
          console.log('msgTime',this.msgTime);
          //时间处理
          for ( var t = 0;t < this.msgTime.length; t++){
            function getLocalTime(nS) {
              return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
            }
            console.log(getLocalTime(this.msgTime[t]));
            this.bookTime.push(getLocalTime(this.msgTime[t]));
            console.log(this.bookTime)
          }

        }

      )
    }
  }
</script>
