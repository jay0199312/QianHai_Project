<style scoped lang="scss">
  .page{
    position:absolute;
    overflow-y:scroll;
    overflow-x:hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .footer~.page{
    bottom:1.2rem;
  }
  .footer{
    background: #fff;
    height:1.17rem;
    position:fixed;
    bottom:0;
    width: 100%;
    display:flex;
    display:-webkit-flex;
    border-top:1px solid #efefef;
    text-align: center;

  }
  .customer{
    background: #fff url(../../assets/images/orderdetail/orderdetail_08.png) 0 bottom repeat-x;
    background-size:auto 0.15rem;
    padding-bottom:.2rem;
    color: #666;
    .c1{
      .c1-name{
        background: #FFF url(../../assets/images/orderdetail/orderdetail_03.png) 0 center no-repeat;
        background-size: 0.5rem;
        padding:0.5rem 0.6rem;
        margin-left: 0.25rem;
        display:inline-block;
      }
      .c1-phone{
        background: #FFF url(../../assets/images/orderdetail/orderdetail_04.png) 0 center no-repeat;
        background-size: 0.4rem;
        padding:0.5rem 0.6rem;
        display:inline-block;
      }
      .c1-carNumber,.c1-km{
        padding:0.2rem 0rem;
        margin-left: 0.25rem;
        display:inline-block;
      }
      .c1-km{
        padding-left:.5rem;
      }
    }
    .c2{
      background: #FFF url(../../assets/images/orderdetail/orderdetail_05.png) 0 center no-repeat;
      background-size: 0.5rem;
      padding:0.125rem 0.65rem;
      margin-left:0.25rem;
      margin-bottom: 0.35rem;
      display:inline-block;
    }
    .c2-carkind{
      margin-left:0.25rem;
      margin-bottom: 0.35rem;
      display:inline-block;
      img{
        width:1rem;
        vertical-align: middle;
      }
    }
  }
  .carblock{
    background: #fff;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    margin-top: 0.25rem;
    .title{
      padding:0.25rem;
      font-size:14px;
      img{
        width:30px;
        vertical-align: middle;
      }
    }
    .content{
      background: #efefef;
      padding:0.25rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      .car-pic{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
       img{
          width: 3.0rem;
          height: 2.0rem;
        }
      }
      .car-detail{
        flex:3;
        -webkit-flex:3;
        padding-left: 0.25rem;
        h2{
          font-size:16px;
        }
        p{
          color:#999;
          margin-top:.3rem;
          &.sellPrize{
            color: #e73624;
            label{
              font-size:16px;
            }
          }
          &.bookPrize{

            label{
              color: #e73624;
              font-size:16px;
            }
          }
        }
      }
    }
  }
  .car-connect{
    background: #fff;
    overflow: hidden;
    p{
      padding:.5rem .25rem;
      text-align: right;
      font-size:14px;
      label{
        color: #e73624;
      }
    }
  }

  .tap-wraper{
    display:flex;
    width:100%;
    display:-webkit-flex;
    justify-content: flex-end ;
    -webkit-justify-content: flex-end ;
    label{
      padding:.4rem .5rem;
      width:1.8rem;
      border-left:1px solid #efefef;
      color: #1060c6;
      &.nowpay{
         color: #fff;
         background: #1060c6;
      }
    }
    span{
      line-height:1.2rem;
      padding: 0 .5rem;
      em{
        color: #e73624;
        font-size:16px;
      }
    }
  }
  /*支付*/
  .payWayBlock{
    background: #fff;
    border-bottom:1px solid #ccc;
    margin: .2rem 0;
    >div{
       border-top:1px solid #eee;
     }
    i{
      float: right;
      display: block;
      width:.7rem;
      height:.8rem;
      margin: .3rem;
      &.uncheck{
         background: #fff url(../../assets/images/illegal/illegal_01.png) center center no-repeat;
         -webkit-background-size:.7rem;
         background-size:.7rem;
       }
       &.checked{
          background: #fff url(../../assets/images/illegal/illegal_02.png) 0 0 no-repeat;
        }
    }
    img{
      width:1rem;
      margin: .25rem;
      vertical-align: middle;
    }
  }
</style>
<template>
<div>
  <div class="footer">
  <div class="tap-wraper">
    <span>总计 <em>¥{{orderData.price}}</em></span>
    <label class="nowpay" @click="payNow">立即支付</label>
  </div>
  </div>
  <div class="page">
    <mt-header title="支付">
        <mt-button icon="back" slot="left"  @click="goBack"></mt-button>
    </mt-header>

    <div class="customer">
      <div class="c1">
        <span class="c1-name">{{orderData.user[0].nickname}}</span>
        <span class="c1-phone">{{orderData.user[0].phone}}</span>
      </div>
      <!--<div class="c2">深圳市南山区大新路88号雅芳婷中心502</div>-->
    </div>
    <div class="carblock">
     <p class="title">
       <img src="../../assets/images/public/logo.png" alt="">
       <label for="">前海平行进口车交易中心</label>
     </p>
     <div class="content">
       <div class="car-pic">
          <img :src="orderData.thumb" alt="">
       </div>
       <div class="car-detail">
         <h2>{{orderData.name}}</h2>
         <p>颜色:{{orderData.selectedColor}}</p>
         <p class="bookPrize">定金: <label >¥{{orderData.price}}</label></p>
       </div>
     </div>
     <div class="car-connect">
       <p>共计1件商品 合计 <label>¥{{orderData.price}}</label></p>
     </div>
   </div>
    <div class="payWayBlock">
      <mt-cell title="支付方式"></mt-cell>
      <div class="al" v-if="!is_wx"><img src="../../assets/images/public/ali.png" alt=""><label for="">支付宝支付</label><i class="uncheck"></i></div>
      <div class="wx" v-if="is_wx"><img src="../../assets/images/public/tx.png" alt=""><label for="">微信支付</label><i class="uncheck"></i></div>
    </div>

  </div>
  //支付宝链接
  <form action="http://www.qhcarmall.com/M/index.php/Home/order/alipay" method="post" id="ali">
    <input type="hidden" v-model="data.D2" name="out_trade_no" id="out_trade_no">
    <input type="hidden" v-model="data.D3" name="total_amount" id="total_amount">
    <input type="hidden" v-model="data.D1" name="subject" id="subject">
    <input type="hidden" v-model="data.D4" name="user_id" id="user_id">
  </form>
</div>
</template>
<script type="text/babel">
  //提示线
  import myLine from './../../components/line.vue';
  import { Indicator,Toast  } from 'mint-ui';

  export default {
    components: {myLine},
    data() {
      return {
        orderData:[],
        is_wx:false,
        pay:[],
        data:{
          D1:"",
          D2:"",
          D3:"",
          D4:""
        }
      };
    },
    created(){
      let ua = window.navigator.userAgent.toLowerCase();
      if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        this.is_wx = true;
      }
      console.log(this.is_wx);
      let aa = sessionStorage.getItem("paydata");
      let uid = localStorage.getItem("user_id");
      const pageData = JSON.parse(aa);
      if(!pageData){
        MessageBox.alert('订单已失效').then(action => {
         this.$store.commit("back")
        });
      }
      this.orderData = pageData;
      console.log(pageData);
      //支付
      this.data.D1 = this.orderData.name;
      this.data.D2 = this.orderData.order_sn;
      this.data.D3 = this.orderData.price;
      this.data.D4 = uid;
      if(this.is_wx){
        let code = this.getQueryString('code');
        //console.log(code)
        if(code){//微信
          this.haveCode(code)
        }else{
          sessionStorage.setItem('payHref',window.location.href)
        }
      }
    },
    methods: {
      goBack(){
        this.$router.push('/homePage');
      },
      payNow(){
        Indicator.open({
          text: '订单提交中...',
          spinnerType: 'fading-circle'
        });
        if(!this.is_wx){//支付宝
          const indee = document.getElementById('out_trade_no').value;
          if(indee){
            document.getElementById('ali').submit();
          }
        }else{//微信
          let Pay_link = window.location.href;
          let pay_link_2 = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcfcbad11299ce017&redirect_uri="
            +encodeURIComponent(Pay_link)+"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
            //请求微信参数
          location.href = pay_link_2;
        }
      },
      getQueryString(name){//微信获取code码
        var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i"));
        if(result == null || result.length < 1){
          return "";
        }
        return result[1];
      },
      haveCode(code){//微信吊起支付
        /*前海正式服务器*/
        /*let Pay_link = "http://www.qhcarmall.com/M/index.php/Home/order/wx_pay/out_trade_no/"
          + this.data.D2+"/subject/" + this.data.D1 + '/total_amount/' + this.data.D3 +'/code/'+code+ '/user_id/' +this.data.D4;*/

        /*测试服务器*/
        let Pay_link = "http://lm.carnettong.com/car/index.php/Home/order/wx_pay/out_trade_no/"
          + this.data.D2+"/subject/" + this.data.D1 + '/total_amount/' + this.data.D3 +'/code/'+code+ '/user_id/' +this.data.D4;
        this.$http.get(Pay_link,{emulateJSON:true}).then(rsp=>{
          //console.log(rsp.body.jsApiParameters);
          if(rsp.body.status_code == 1){
            this.pay = rsp.body.jsApiParameters;
            this.callpay()
          }else{
            Toast({
              message: rsp.body.err,
              position:'bottom',
              duration: 2000
            });
            setTimeout(function () {
              location.href = sessionStorage.getItem("payHref")
            },2000)
          }
        },rsp=>{});
      },
      callpay(){//微信函数
        if (typeof WeixinJSBridge == "undefined"){
          if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
          }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', this.jsApiCall);
            document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
          }
        }else{
          this.jsApiCall;
        }
      },
      jsApiCall(){//微信函数
        //alert(this.pay);
        console.log(this.pay);
        var pay = this.pay;
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest',
          pay,
          function(res){
            WeixinJSBridge.log(res.err_msg);
            if(res.err_msg == "get_brand_wcpay_request:ok" ) {
              Indicator.close();
              Toast({
                message: '支付成功',
                iconClass: 'mintui mintui-success',
                duration: 1000
              });
              setTimeout(function () {
                location.href='http://www.qhcarmall.com/M/dist/#/homepage'
              },1100)

            } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
              Indicator.close();
              Toast({
                message: '支付已取消',
                position:'bottom',
                duration: 1000
              });
              setTimeout(function () {
                location.href = sessionStorage.getItem("payHref")
              },1100)
            }else if (res.err_msg == "get_brand_wcpay_request:fail") {
              Indicator.close();
              Toast({
                message: '支付失败',
                position:'bottom',
                duration: 1000
              });
              setTimeout(function () {
                location.href = sessionStorage.getItem("payHref")
              },1100)
            }
          }
        );
      }

    }
  };
</script>
