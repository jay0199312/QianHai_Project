<template>

  <div class="home-page">

    <div class="home-page-head">
      <img src="../../assets/images/home-page/home-page-search.png" alt="" class="home-page-search" @click="$router.push('/ChooseCarSearch')">
      <img src="../../assets/images/home-page/home-page-logo.png" alt="" class="home-page-logo">
      <img src="../../assets/images/home-page/home-page-my.png" alt="" class="home-page-my" v-if="!userImg" @click="returnLink">
      <img :src="userImg" alt="" class="home-page-my userImg" v-if="userImg" @click="goMyMsg">
    </div>

    <div class="home-page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1" v-for="item in carousel.picture"><a href="item.content"><img v-lazy="item.pic" alt="" ></a></mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="home-page-option-box">
      <div>
        <img src="../../assets/images/home-page/home-page-option-1.png" alt="" class="home-page-option">
        <div>预约试驾</div>
      </div>
      <div>
        <img src="../../assets/images/home-page/home-page-option-2.png" alt="" class="home-page-option">
        <div>三包保险</div>
      </div>
      <div @click="$router.push('/exhibition')">
        <img src="../../assets/images/home-page/home-page-option-3.png" alt="" class="home-page-option">
        <div>线下展厅</div>
      </div>
      <div>
        <img src="../../assets/images/home-page/home-page-option-4.png" alt="" class="home-page-option">
        <div>售后服务</div>
      </div>
    </div>

    <div class="home-page-top-line-box">
      <img src="../../assets/images/home-page/home-page-top-line.png" alt="" class="home-page-top-line">
      <div class="home-page-top-line-text">
        <mt-swipe :auto="3000" :showIndicators="false">
          <mt-swipe-item class="slide1" v-for="item in news.news" @click.native="goNewsDtail(item.id)">{{item.title}}</mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="home-page-top-line-next"><img src="../../assets/images/home-page/app2-5.png" alt="" style="width: 0.4rem"> </div>
    </div>

    <div class="home-page-brand" v-for="item in secKillBanner.seckill_banner">
      <div class="limit-time-title">限时购</div>
      <img src="../../assets/images/home-page/home-page-span-1.png" alt="" class="home-page-span-1">
      <div class="limit-time-text" >{{item.subject}}</div>
    </div>
    <div class="limit-time-img-box"  v-for="item in secKillBanner.seckill_banner">
      <!--<div class="limit-time-img-text">{{item.name}}</div>-->
      <!--<div class="limit-time-img-price"><br><span>{{item.price}}</span><br>万</div>-->
      <img v-lazy="item.thumb" alt="" class="limit-time-img">
      <!--<div id="limit-time-img-number" v-bind:style="{left:(item.sale_num / item.quantity)*5 + 0.2 + 'rem'}">
        <img src="../../assets/images/home-page/home-page-span-2.png" alt="">
        <div>{{(item.sale_num / item.quantity)*100}}%</div>
      </div>-->
      <div class="page-progress" id="page-progress-banner">
        <mt-progress :value="(item.sale_num / item.quantity)*100" :bar-height="16" >
          <div slot="start"></div>
          <div slot="end"></div>
        </mt-progress>
      </div>
    </div>
    <div class="limit-time-item-box">
      <div class="limit-time-item" v-for="item in secKillList.seckill_goods" @click="goSecDetail(item.goods_id)">
        <img src="../../assets/images/home-page/home-page-float-1.png" alt="" class="home-page-float" v-show="floatShow1">
        <img src="../../assets/images/home-page/home-page-float-2.png" alt="" class="home-page-float" v-show="floatShow2">
        <img v-lazy="item.thumb" alt="" class="limit-time-item-img">
        <div class="home-page-car-name">{{item.name}}</div>
        <div class="home-page-car-price"><span>{{item.price}}</span> 万</div>

        <div class="limit-time-img-number" v-bind:style="{left:(item.sale_num / item.quantity)*4  + 'rem'}">

          <div>{{(item.sale_num / item.quantity)*100}}%</div>
          <img src="../../assets/images/home-page/home-page-span-2.png" alt="">
        </div>
        <div class="page-progress" style="margin-top: 0.5rem">

          <mt-progress :value="(item.sale_num / item.quantity)*100" :bar-height="12">
            <div slot="start"></div>
            <div slot="end"></div>
          </mt-progress>

        </div>
      </div>
    </div>

    <div class="home-page-brand">
      <div class="limit-time-title">品牌推荐</div>
      <img src="../../assets/images/home-page/home-page-span-3.png" alt="" class="home-page-span-3">
    </div>
    <div class="home-page-brand-item-box" >
      <div class="home-page-brand-title-1" id="home-page-brand-title-1">
        <p style="font-size: 0.55rem;font-weight: bolder;margin-top: 0.5rem">{{brandRecommend1.carbody1}}</p>
        <p>共 <span>{{brandRecommend1.num1}}</span> 个车型</p>
        <p @click="seemore(brandRecommend1.carbody1)">查看更多>></p>
      </div>
      <div class="home-page-brand-item" v-for="item in brandRecommend1.good1" @click="goSecDetail(item.id)">
        <div class="asdf" >
          <div class="home-page-car-name-1">{{item.brand_name}}</div>
          <div class="home-page-car-model-1">{{item.name}}</div>
          <div class="home-page-car-price-1">¥ <span>{{item.price}}</span> 万</div>
        </div>
        <img v-lazy="item.thumb" alt="" class="home-page-brand-item-img">
      </div>
    </div>
    <div class="home-page-brand-item-box" >
      <div class="home-page-brand-title-1" id="home-page-brand-title-2">
        <p style="font-size: 0.55rem;font-weight: bolder;margin-top: 0.5rem">{{brandRecommend2.carbody2}}</p>
        <p>共 <span>{{brandRecommend2.num2}}</span> 个车型</p>
        <p @click="seemore(brandRecommend2.carbody2)">查看更多>></p>
      </div>
      <div class="home-page-brand-item" v-for="item in brandRecommend2.good2" @click="goSecDetail(item.id)">
        <div class="asdf">
          <div class="home-page-car-name-1">{{item.brand_name}}</div>
          <div class="home-page-car-model-1">{{item.name}}</div>
          <div class="home-page-car-price-1">¥ <span>{{item.price}}</span> 万</div>
        </div>
        <img v-lazy="item.thumb" alt="" class="home-page-brand-item-img">
      </div>
    </div>
    <div class="home-page-brand-item-box" >
      <div class="home-page-brand-title-1" id="home-page-brand-title-3">
        <p style="font-size: 0.55rem;font-weight: bolder;margin-top: 0.5rem">{{brandRecommend3.carbody3}}</p>
        <p>共 <span>{{brandRecommend3.num3}}</span> 个车型</p>
        <p @click="seemore(brandRecommend3.carbody3)">查看更多>></p>
      </div>
      <div class="home-page-brand-item" v-for="item in brandRecommend3.good3" @click="goSecDetail(item.id)">
        <div class="asdf">
          <div class="home-page-car-name-1">{{item.brand_name}}</div>
          <div class="home-page-car-model-1">{{item.name}}</div>
          <div class="home-page-car-price-1">¥ <span>{{item.price}}</span> 万</div>
        </div>
        <img v-lazy="item.thumb" alt="" class="home-page-brand-item-img">
      </div>
    </div>


    <div class="home-page-brand">
      <div class="limit-time-title">近期活动</div>
      <img src="../../assets/images/home-page/home-page-span-3.png" alt="" class="home-page-span-3">
    </div>
    <div class="my-collection-3-item" v-for="(item,index) in activity.activity">
      <a :href="item.url">
        <img v-lazy="item.thumb" alt="" class="collection-img-2">
      </a>
      <div class="my-collection-3-title">
        <label for="">{{item.name}}</label>
        <span class="collect" :class="{on:Number(item.is_collect)}" @click="addCollect(item.id,index)"></span>
      </div>
    </div>

    <div class="home-page-brand">
      <div class="limit-time-title">一口价</div>
      <img src="../../assets/images/home-page/home-page-span-3.png" alt="" class="home-page-span-3">
    </div>
    <div class="my-collection-3-item" v-for="item in onePrice" @click="goSecDetail(item.id)">
      <img v-lazy="item.thumb" alt="" class="collection-img-2">
      <div class="my-collection-3-title">
        <label class="price">¥<em>{{item.price}}万</em></label>
        {{item.name}}
        <span class="r">库存:<label class="price">{{parseInt(item.price)}} </label>辆</span>
      </div>
    </div>

  <div class="home-page-item-box">
    <div @click="$router.push('/About')">
      <img src="../../assets/images/home-page/home-page-item-1.png" alt="" class="home-page-item">
      <div>关于前海</div>
    </div>
    <div @click="">
      <img src="../../assets/images/home-page/home-page-item-2.png" alt="" class="home-page-item">
      <div>前海承诺</div>
    </div>
    <div @click="$router.push('/Invitation')">
      <img src="../../assets/images/home-page/home-page-item-3.png" alt="" class="home-page-item">
      <div>诚邀加盟</div>
    </div>
  </div>
  </div>
</template>

<style>

  .home-page{
    width: 10rem;background-color: #f0f0f0;overflow: hidden;
  }
  .home-page-head{
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: space-between;height: 1.2rem;background-color: #ffffff;
  }
  .home-page-search{
    width: 0.53rem;margin-left: 0.6rem;
  }
  .home-page-logo{
    width: 1.5rem;
  }
  .home-page-my{
    width: 0.6rem;margin-right: 0.6rem;
  }
  .home-page-swipe{
    height: 4.8rem;width: 10rem;
  }
  .home-page-swipe img{
    width: 10rem;
  }
  .home-page-option-box{
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: space-around;
    width: 10rem;height: 2.5rem;background-color: #ffffff;border-bottom: 1px solid #e5e5e5;color: #666666;font-size: 0.32rem;
  }
  .home-page-option{
    width: 1.3rem;
  }
  .home-page-top-line-box{
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: space-between;
    width: 10rem;height: 1.4rem;background-color: #ffffff;border-bottom: 1px solid #e5e5e5;color: #3b3b3b;margin-bottom: 0.2rem;
  }
  .home-page-top-line{
    width: 1rem;margin-left: 0.5rem;
  }
  .home-page-top-line-text {
    width: 6.5rem;height: 1rem;line-height: 1rem;font-size: 0.37rem;color: #333333;border-left: 1px solid #d5d2d3;padding-left: 0.3rem;
  }
  .home-page-top-line-text a{
    color: #666;
  }
  .home-page-top-line-next{
    font-size: 0.6rem;margin-right: 0.3rem;color: #aeaeae;font-weight: bolder;
  }
  .home-page-brand{
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;
    border-left:5px solid #1867d6;
    box-sizing: border-box;
    width: 10rem;height: 1.1rem;background-color: #ffffff;
  }
  .limit-time-title{
    color: #1867d6;font-size: 0.42rem;margin-left: 0.4rem;font-weight: bolder;
  }
  .home-page-span-1{
    width: 0.2rem;margin-left: 0.2rem;
  }
  .home-page-span-3{
    width: 0.46rem;margin-left: 0.2rem;
  }
  .limit-time-text{
    color: #ff0000;font-size: 0.33rem;
  }

  .limit-time-img-box{
    width: 10rem;position: relative;
  }
  .limit-time-img-text{
    position: absolute;top: 1rem;left: 0.5rem;width: 5rem;font-size: 0.66rem;white-space:nowrap;text-overflow:ellipsis;display:block;overflow:hidden;font-weight: bolder;
  }
  .limit-time-img-price{
    position: absolute;top: 0.3rem;left: 6rem;width: 2rem;height:2rem;background-color: #fc0d10;border-radius: 1rem;font-size: 0.3rem;text-align: center;color: #ffffff;
  }
  .limit-time-img-price span{
    font-size: 0.6rem;font-weight: bolder;
  }
  .limit-time-img{
    width: 10rem;z-index: 0;height: 3rem;
  }
  .limit-time-img-number{
    font-size: 0.3rem;
    color: #1967d6;
    text-align: center;
    position: absolute;
    top: 4.38rem;
    font-weight: lighter;
  }
  #limit-time-img-number{
    font-size: 0.5rem;color: #1967d6;font-weight: bolder;text-align: center;position: absolute;
    top:2.65rem;left: 0.2rem;
  }


  .limit-time-item-box{
    width: 10rem;display: -webkit-flex; /* Safari */
    display: flex;flex-wrap:wrap;padding-top: 0.1rem;padding-left: 0.15rem;margin-bottom: 0.1rem;
  }
  .limit-time-item{
    width: 4.6rem;height: 6rem;background-color: #ffffff;border: 1px solid #e5e5e5;margin: 0.1rem;
    display: -webkit-flex; /* Safari */
    display: flex;flex-wrap:wrap;position: relative;align-content:center;
  }
  .home-page-float{
    width: 0.7rem;height: 0.95rem;position: absolute;top: 0.3rem;left: 0.3rem;
  }
  .limit-time-item-img{
    width: 4.1rem;height: 3rem;margin: auto;z-index: 0;
  }
  .home-page-car-name{
    width: 90%;font-size: 0.38rem;text-align: center;color: #333333;font-weight: bolder;text-overflow: ellipsis;margin: auto;white-space:nowrap;overflow:hidden;
  }
  .home-page-car-name-1{
    font-size: 0.38rem;color: #333333;font-weight: bolder;z-index: 999;
  }
  .home-page-car-model{
    width: 100%;font-size: 0.3rem;text-align: center;
  }
  .home-page-car-model-1{
    font-size: 0.3rem;color: #9f9f9f;z-index: 999;white-space:nowrap;overflow:hidden;text-overflow: ellipsis;width: 4rem;
  }
  .home-page-car-price{
    width: 100%;font-size: 0.2rem;color: #ff0b0b;text-align: center;
  }
  .home-page-car-price-1{
    font-size: 0.3rem;color: #ff0b0b;z-index: 999;
  }
  .home-page-car-price span{
    font-size: 0.4rem;font-weight: bolder;
  }
  .home-page-car-price-1 span{
    font-size: 0.4rem;font-weight: bolder;z-index: 999;
  }
  .home-page-brand-item-box{
    display: -webkit-flex; /* Safari */
    display: flex;flex-wrap:wrap;width: 10rem;background-color: #ffffff;justify-content: space-between;margin-bottom: 0.3rem;
  }
  .home-page-brand-title-1{
    width: 5rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #dadada;height: 3.3rem;color: #ffffff;margin-bottom: -1px;
    margin-right:-1px;
  }
  #home-page-brand-title-1{
    background: url("../../assets/images/home-page/home-page-4.png") 0 0 no-repeat;background-size: 100%;-webkit-background-size: 100%;
  }
  #home-page-brand-title-2{
    background: url("../../assets/images/home-page/home-page-7.png") 0 0 no-repeat;background-size: 100%;-webkit-background-size: 100%;
  }
  #home-page-brand-title-3{
    background: url("../../assets/images/home-page/home-page-8.png") 0 0 no-repeat;background-size: 100%;-webkit-background-size: 100%;
  }
  .home-page-brand-title-1 p{
    text-align: right;font-size: 0.33rem;margin-right: 0.2rem;
  }
  .home-page-brand-item{
    width: 5rem;border: 1px solid #efefef;height: 3.3rem;position: relative;
    box-sizing: border-box;
    overflow: hidden;
  }
  .home-page-brand-item-img{
    width: 3.5rem;position: absolute;left: 1.3rem;top: 1rem;z-index: 0;
  }

  .home-page-item-box{
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: space-around;
    width: 10rem;height: 2.5rem;background-color: #ffffff;border-bottom: 1px solid #e5e5e5;color: #666666;font-size: 0.32rem;
  }
  .home-page-item{
    width: 1.3rem;
  }
  .mint-swipe-indicator{
    opacity: 0.7;margin: 0 0.15rem;width: 0.2rem;height: 0.2rem;
  }
  .page-progress{
    width: 4rem;margin: auto;
  }
  #page-progress-banner{
    width: 5rem;position: absolute;top: 2rem;left: 0.5rem;
  }
  .mt-progress-runway{
    border-radius: 10px;
  }
  .mt-progress-progress{
    border-radius: 10px 0 0 10px;background-color: #1967d6;
  }
  .asdf{
    z-index:9;position: absolute;left: 0.3rem;top: 0.3rem;
  }
  .price{
    color: #e73624;
  }
  .r{
    float: right;
    margin-right:.5rem;
  }
  .price em{
    font-size:18px;
  }
  .my-collection-3-item{
    width: 100%;border-bottom: 1px solid #d9d9d9;margin-bottom: 0.3rem;background-color: #ffffff;
  }
  .collection-img-2{
    width: 100%;
  }
  .my-collection-3-title{
    font-size: 0.34rem;color: #060001;height: 1rem;line-height: 1rem;margin-left: 0.3rem;
  }
  img[lazy=loading]{
    width:40px;
    height:150px;
    margin: auto;
    display: block;
  }
  .userImg{
    border-radius: .3rem;
    overflow: hidden;
  }
  .collect{
    background: url("../../assets/images/goodsdetail/goodsdetail_09.png") no-repeat;
    -webkit-background-size:.6rem;
    background-size: 0.6rem;
    width: .8rem;
    height: .8rem;
    float: right;
    display: block;
    margin-top: .15rem;
  }
  .collect.on{
    background: url("../../assets/images/goodsdetail/goodsdetail.png") no-repeat;
    -webkit-background-size:.6rem;
    background-size:.6rem;
  }
</style>


<script type="text/ecmascript-6">
  import { MessageBox,Toast } from 'mint-ui'
  const ERR_OK = 0;
  export default {
    name: 'home-page',
    props:{
    },
    data () {
      return {
        carousel:[],
        news:[],
        secKillList:[],
        brandRecommend:[],
        brandRecommend1:[],
        brandRecommend2:[],
        brandRecommend3:[],
        activity:[],
        onePrice:[],
        secKillBanner:[],
        userImg:"",
        floatShow1:false,
        floatShow2:false,
        iscollect:0
      }
    },
    created () {
      var PHPheader = this.$store.state.ip + this.$store.state.location;

      var carousel = PHPheader + 'api/carousel';
      var news = PHPheader + 'api/news';
      var secKillList = PHPheader + 'api/secKillList';
      var brandRecommend = PHPheader + 'api/brandRecommend';
      var activity = PHPheader + 'api/activity';
      var onePrice = PHPheader + 'api/onePrice';
      var secKillBanner = PHPheader + 'api/secKillBanner';

      //首页加载用户头像
      this.userImg = localStorage.getItem("userImg");

      //首页轮播图json
      this.$http.get(carousel).then(
        function (response) {
          // 处理成功的结果
          this.carousel =response.body;
          console.log('carousel',this.carousel);
        },function (response) {
          // 处理失败的结果
        });

      //前海头条json
      this.$http.get(news).then(
        function (response) {
          // 处理成功的结果
          this.news = response.body;
          console.log('news',this.news)
        }
      ,function (response) {
          // 处理失败的结果
        });


      //限时购列表json
      this.$http.get(secKillList).then(
        function (response) {
          // 处理成功的结果
          this.secKillList = response.body;
          console.log('secKillList',this.news)
        }
        ,function (response) {
          // 处理失败的结果
        });


      //限时购消息json
      this.$http.get(secKillBanner).then(
        function (response) {
          // 处理成功的结果
          this.secKillBanner = response.body;
          console.log('secKillBanner',this.secKillBanner)
        }
        ,function (response) {
          // 处理失败的结果
        });


      //品牌推荐json
      this.$http.post(brandRecommend,{carbody1:"suv",carbody2:"跑车",carbody3:"三厢"},{emulateJSON:true}).then(
        function (response) {
          // 处理成功的结果
          this.brandRecommend = response.body;
          console.log('brandRecommend',this.brandRecommend);
          this.brandRecommend1 =this.brandRecommend.carbodys.carbody1;
          this.brandRecommend2 =this.brandRecommend.carbodys.carbody2;
          this.brandRecommend3 =this.brandRecommend.carbodys.carbody3;
          console.log('brandRecommend1',this.brandRecommend1)
        }
        ,function (response) {
          // 处理失败的结果
        });
      //近期活动json
      let uID = localStorage.getItem('user_id')
      this.$http.post(activity,{user_id:uID},{emulateJSON:true}).then(
        function (response) {
          // 处理成功的结果
          this.activity = response.body;
          console.log('activity',this.activity)
        }
        ,function (response) {
          // 处理失败的结果
        });
      //一口价json
      this.$http.get(onePrice).then(
        function (response) {
          // 处理成功的结果
          this.onePrice = response.body.one_price;
          console.log('onePrice',this.onePrice)
        }
        ,function (response) {
          // 处理失败的结果
        });
    },
    methods:{
      returnLink(){
        sessionStorage.setItem("returnLink","/homePage");
        this.$router.push('/myLogin')
      },
      goMyMsg(){
        this.$router.push('/mySetting')
      },
      getJson : function () {
        var _this = this;
        var PHPheader = this.$store.state.ip + this.$store.state.location;
        var brandRecommend = PHPheader + 'api/brandRecommend';
        console.log(brandRecommend);
        this.$http.get(brandRecommend).then(
          function (response) {
            // 处理成功的结果
            _this.brandRecommend = response.body;
            console.log('brandRecommend',_this.brandRecommend)
          }
          ,function (response) {
            // 处理失败的结果
          });
      },
      goSecDetail(id){
        sessionStorage.setItem("GoodsDetail_ID",id);
        this.$router.push('/GoodsDetail');
        console.log(id)
      },
      seemore(cbd){
        let search_link = this.$store.state.ip + this.$store.state.location + "api/search"
        this.$http.post(search_link,{carbody:cbd},{emulateJSON:true}).then(
          function (response) {
            const sr = JSON.stringify(response.body);
            sessionStorage.setItem("searchResult",sr);
            let aa = {carbody:cbd};
            sessionStorage.setItem("choosenCondition",JSON.stringify(aa));
            this.$router.push("/ChooseCarSearchResult");
          }
          ,function (response) {
            // 处理失败的结果
          });
      },
      goNewsDtail(ID){
        sessionStorage.setItem('newsID',ID);
        this.$router.push('/NewsDetail');
      },
      addCollect(ActiveID,index){
        const ID = localStorage.getItem("user_id");
        if(!ID){
          MessageBox.confirm('请先登录').then(action => {//登录验证
            sessionStorage.setItem("returnLink","/homePage");
            this.$router.push('/myLogin')
          }).catch(err => {
            return false
          });
        }else{
          let postdata = {
            user_id:ID,
            type:"3",
            type_id:ActiveID
          };

          this.activity.activity[index].is_collect?this.activity.activity[index].is_collect=0:this.activity.activity[index].is_collect=1;
          if(ID && this.activity.activity[index].is_collect){
            let collect_link = this.$store.state.ip + this.$store.state.location + "api/collectAdd";
            this.$http.post(collect_link,postdata,{emulateJSON:true}).then(response=>{
              Toast({
                message: '收藏成功',
                duration: 1500,
                iconClass: 'mintui mintui-success'
              });
            },response=>{})
          }else if(ID && !(this.activity.activity[index].is_collect)){
            let collectDel_link = this.$store.state.ip + this.$store.state.location + "api/collectDel";
            this.$http.post(collectDel_link,postdata,{emulateJSON:true}).then(response=>{

            },response=>{})
          }
        }
      }
    },
    mounted () {

    }
  }
</script>
