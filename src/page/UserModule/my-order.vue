<template>
  <div class="my-order-page">


    <div class="page-header-main">
      <mt-header title="我的订单" class="my-order-head">
        <router-link to="myPage" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>

      </mt-header>
    </div>


    <div class="page-navbar">

      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1" >新车订单</mt-tab-item>
        <mt-tab-item id="2">车生活订单</mt-tab-item>
        <mt-tab-item id="3">全部订单</mt-tab-item>
      </mt-navbar>



      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div >

            <div class="my-order-item" v-for="(item, index) in newCarList">
              <div class="my-order-item-head">
                <img src="../../assets/images/public/index_big_head_logo.png" alt="" class="shop-logo">
                <div class="shop-name">前海平行进口车交易中心</div>
                <div class="pay-logo" :class="payLogo[orderPay[index]]"></div>
              </div>
              <div class="my-order-item-content">

                <img :src="item.goods_list.thumb" alt="" class="shop-img">

                <div>
                  <div class="car-name">{{item.goods_list.name}}</div>
                  <div class="car-color">颜色：{{item.goods_list.color}}</div>
                  <div class="car-price">定金：<span>{{item.goods_list.price}}元</span></div>
                </div>
              </div>
              <div class="my-order-item-button">
                <div class="pay-button" @click="payNewCar(item)" >立即支付</div>
                <div class="cancel-button" @click="delOrder(item)">取消</div>
              </div>
            </div>

          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2" >
          <div v-infinite-scroll="loadCarLive" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
            <div class="my-order-item" v-for="(item, index) in getUserOrderList">
              <div class="my-order-item-head">
                <img src="../../assets/images/my-order/shop-logo-1.png" alt="" class="shop-logo">
                <div class="shop-name">{{item.SHOP_NAME}}</div>
                <div class="pay-logo" :class="payLogo[livePay]"></div>
              </div>
              <div class="my-order-item-content">

                <img src="" alt="" class="shop-img">

                <div style="margin-left: 0.3rem">
                  <div class="car-name">{{item.CAR_BRAND_NAME}}</div>
                  <div class="car-color">共计{{}}个项目</div>
                  <div class="car-price">需支付<span>{{}}</span>元</div>
                </div>
              </div>
              <div class="my-order-item-button">
                <div class="pay-button" @click="payNewCar(item)">立即支付</div>
                <div class="cancel-button" @click="delCarLive(item)">取消</div>
              </div>
            </div>
          </div>
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
            加载中...
          </p>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div v-infinite-scroll="loadCarLive" infinite-scroll-disabled="loading" infinite-scroll-distance="50">

            <div class="my-order-item" v-for="(item, index) in newCarList">
              <div class="my-order-item-head">
                <img src="../../assets/images/public/index_big_head_logo.png" alt="" class="shop-logo">
                <div class="shop-name">前海平行进口车交易中心</div>
                <div class="pay-logo" :class="payLogo[orderPay[index]]"></div>
              </div>
              <div class="my-order-item-content">

                <img :src="item.goods_list.thumb" alt="" class="shop-img">

                <div style="margin-left: 0.3rem">
                  <div class="car-name">{{item.goods_list.name}}</div>
                  <div class="car-color">颜色：{{item.goods_list.color}}</div>
                  <div class="car-price">定金：<span>{{item.goods_list.price}}万元</span></div>
                </div>
              </div>
              <div class="my-order-item-button">
                <div class="pay-button">立即支付</div>
                <div class="cancel-button" @click="delOrder(item)">取消</div>
              </div>
            </div>

          </div>
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
            加载中...
          </p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>

</template>

<style scoped>
  .my-order-page{
    width: 10rem;
  }
  .my-order-head{
    height: 1.2rem;background-color: #ffffff;font-size: 0.38rem;color: #4a4a4a;
  }
  .mint-navbar{
    background-color: #ebebeb;
  }
  .page-part{
    width: 60%;margin: auto;
  }
  .my-order-item{
    background-color: #ffffff;margin-top: 3px;margin-bottom: .2rem;border-top: 1px solid #d6d4d4;
  }
  .my-order-item-head{
    display: -webkit-flex; /* Safari */
    display: flex;height: 1.2rem;justify-content:space-between;align-items:center;
  }
  .my-order-item-content{
    display: -webkit-flex; /* Safari */
    display: flex;height: 2.56rem;background-color: #f5f5f5;align-items:center;
  }
  .my-order-item-button{
    display: -webkit-flex; /* Safari */
    display: flex;border-top: 1px solid #d6d4d4;overflow:hidden;border-bottom: 1px solid #d6d4d4; flex-direction:row-reverse;align-items: center;font-size: 0.37rem;
  }
  .shop-logo{
    height: 0.84rem;margin-left: 0.3rem;
  }
  .shop-name{
    font-size: 0.4rem;color: #565656;margin-right: 2.4rem;font-weight: bolder;
  }
  .pay-logo1{
    background:url("../../assets/images/my-order/pay-logo-1.png") 0 0 no-repeat;background-size: 100%;
  }
  .pay-logo2{
    background: url("../../assets/images/my-order/pay-logo-2.png") 0 0 no-repeat;background-size: 100%;
  }

  .pay-logo{
    height: 1rem;margin-right: 0.3rem;width: 1rem;
  }
  .shop-img{
    height: 1.9rem;margin-left: 0.3rem;margin-right: 0.3rem;
  }
  .car-name{
    font-size: 0.37rem;color: #000000;
  }
  .car-color{
    font-size: 0.34rem;color: #9b9a9a;margin: 0.25rem 0;
  }
  .car-price{
    font-size: 0.34rem;color: #9b9b9b;
  }
  .car-price span{
    color: #ff1000;font-size: 0.37rem;
  }
  .pay-button{
    color: #ffffff;text-align: center;background-color: #0554c3;height: 100%;width: 2.4rem;line-height: 1rem;
  }
  .cancel-button{
    color: #0554c3;text-align: center;background-color: #ffffff;height: 100%;width: 2.4rem;line-height: 1rem;border-left: 1px solid #d6d4d4;
  }
  .page-infinite-loading{
    margin:.5rem auto;width: 3.8rem;text-align: center;font-size: 14px;color: #999;height: 1rem;
  }
  .page-infinite-loading span{
    display: inline-block;
    vertical-align: middle;
    margin: 0 0.4rem;
  }
  .page-infinite-loading span div{
    width:.4rem;
  }



</style>

<script type="text/ecmascript-6">
  import { InfiniteScroll } from 'mint-ui';
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'my-order',
    data () {
      return {
        msg: '',
        selected: '',
        shopLogo:require('../../assets/images/my-order/shop-logo-1.png'),
        newCarList:[],
        list: [],
        loading: false,
        allLoaded: false,
        wrapperHeight: 0,
        orderPay:[],
        payLogo:['pay-logo1','pay-logo2'],
        getUserOrderList:[],
        currentOrder:'',
        currentLive:'',
        NewCarPage:'',
        livePay:[],
        user_id:'',
        phone:'',

      }
    },
    methods: {
      handleClose() {
        alert('close this page');
      },
      loadCarLive (){
        this.loading = true;
        setTimeout(() => {

          this.loading = false;
        }, 100000);
      },
      getCarLiveOrder (){ //车生活订单json
        var JAVAheader = 'http://192.168.0.180:8088/CARNT/ServOrderQH/';
        var getUserOrderList = JAVAheader + 'getUserOrderList';
        var page=1;
        this.$http.post(getUserOrderList,{PHONE:this.phone,TYPE:'TOTAL_ORDER',PAGE_NO:page,IDENTIFICATION:1},{emulateJSON:true}).then(
          function (response) {
            //处理成功的结果
            var carLive =response.body;
            console.log('carLive',carLive);
            this.getUserOrderList = carLive.RESULT_DATA;
            for (var l=0 ;l<this.getUserOrderList.length;l++){
              this.livePay.push(this.getUserOrderList[l].PAY_STATUS);
              console.log('livePage',this.getUserOrderList[l].PAY_STATUS);

            }
            console.log('getUserOrderList',this.getUserOrderList);

          },
          function () {
            //处理失败的结果
            console.log('no-success')
          }
        )
      },
      getNewCarList (){//新车订单json
        var PHPheader = this.$store.state.ip + this.$store.state.location;
        //var PHPheader = this.$store.state.qhcarmall1
        var newCarList = PHPheader +'order/newCarList';

        this.$http.post(newCarList,{user_id:this.user_id,count:5},{emulateJSON:true}).then(

          function (response) {
            //处理成功的结果
            //r.status_page == 1 ? s= true : s=false;

            var carOrder = response.body;
            this.newCarList = carOrder.order_list;

            for (var t =0;t<this.newCarList.length;t++){
              this.orderPay.push(this.newCarList[t].pay_status)
            }
          },
          function (response) {
            //处理失败的结果
            console.log('no-success')
          });
      },
      delOrder(item) {
        this.currentOrder = item;
        MessageBox.confirm('是否取消此订单?').then(action => {
          var index = this.newCarList.indexOf(this.currentOrder);
          this.newCarList.splice(index,1);
          let cel = this.$store.state.ip + this.$store.state.location + 'order/cancelOrder';
          this.$http.post(cel,{user_id:this.user_id,order_id:item.id},{emulateJSON:true}).then(rsp=>{
            console.log('cel',rsp.body)
          },rsp=>{
          })
        });
      },
      delCarLive(item) {
        this.currentLive = item;
        MessageBox.confirm('是否取消此订单?').then(action => {
          var index = this.getUserOrderList.indexOf(this.currentLive);
          this.getUserOrderList.splice(index,1);
        });
      },
      payNewCar(item) {
        console.log(item);
        if(item.pay_status){
          let User_link = this.$store.state.ip + this.$store.state.location + 'api/selUserInfo';
          this.$http.post(User_link,{user_id:this.user_id},{emulateJSON:true}).then(rsp=>{
            const postdata = {
              user_id:this.user_id,
              goods_id:item.id,
              name:item.goods_list.name,
              price:item.total_price,
              thumb:item.goods_list.thumb,
              selectedColor:item.goods_list.color,
              user:rsp.body.user_info,
              order_sn:item.order_sn
            };
            sessionStorage.setItem("paydata",JSON.stringify(postdata));
            this.$router.push("/Pay");
          },rsp=>{
          })
        }else{
          MessageBox.alert('该定单已经完成').then(action => {

          });
        }
      }
    },

    created (){
      this.user_id = localStorage.getItem('user_id');
      this.phone = localStorage.getItem('phone');
      this.getNewCarList();
      this.getCarLiveOrder();
      this.selected=sessionStorage.getItem("selected")

    },
    mounted () {

      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    }
  }
</script>
