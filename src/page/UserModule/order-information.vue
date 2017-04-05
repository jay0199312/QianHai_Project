<template>
  <div class="order-information-page">
    <div class="page-header-main">

      <mt-header title="订单详情" class="order-information-head">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>


      </mt-header>

    </div>
    <div class="order-information-1">
      <div class="information-1-text">
        <div>{{judgementText}}</div>
        <div>订单号：{{orderNumber}}</div>
      </div>
      <img src="../../assets/images/order-information/order-pay-1.png" alt="" class="judgementImg">
    </div>
    <div class="order-information-2">
      <div class="use-box">
        <img src="../../assets/images/order-information/order-use.png" alt="">
        <div>{{userName}}</div>
        <img src="../../assets/images/order-information/order-phone.png" alt="">
        <div>{{userNumber}}</div>
      </div>
      <div class="address-box">
        <img src="../../assets/images/order-information/order-address.png" alt="">
        <div>{{userAddress}}</div>
      </div>
      <img src="../../assets/images/order-information/order-border.png" alt="" id="order-border">
    </div>

    <div class="order-information-3">
      <div class="order-information-3-head">
        <img src="../../assets/images/my-order/shop-logo-1.png" alt="" class="shop-logo">
        <div class="shop-name" id="shop-name">宝安布吉店</div>
      </div>
      <div class="order-information-3-content">
        <img src="../../assets/images/my-order/shop-img-1.png" alt="" class="shop-img">
        <div style="margin-left: 0.3rem">
          <div class="car-name">宝安2016款 1.5T 手动运动版</div>
          <div class="car-color" id="car-color">颜色：黑色</div>
          <div class="car-price-full"><span>¥32.8</span>万元起</div>
          <div class="car-price">定金：<span>¥1000</span></div>
        </div>

      </div>
      <div class="order-information-4">
        <div class="service-phone">
          <img src="../../assets/images/order-information/service-phone.png" alt="">
          联系客服
        </div>

      </div>
    </div>

    <div class="order-information-5">
      <div></div>
      <span>猜你喜欢</span>
      <div></div>

    </div>

    <div class="order-pay-button">
      <div class="pay-button">立即支付</div>
      <div class="cancel-button">取消</div>

    </div>

  </div>
</template>

<style scoped>
  .order-information-page{
    background-color: #ebebeb;
  }
  .order-information-head{
    background-color: #ffffff;font-size: 0.38rem;height: 1.2rem;color: #4a4a4a;
  }
  .order-information-1{
    width: 100%;height: 3.2rem;background: url("../../assets/images/my-page/my-page-1.png") 0 0 no-repeat;background-size: 100%;-webkit-background-size: 100%;color: #ffffff;font-size: 0.36rem;
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: space-between;
  }
  .order-information-2{
    width: 100%;height:2.0rem;background-color: #ffffff;font-size: 0.34rem;color: #777777;margin-bottom: 0.2rem;
  }
  .order-information-2 img{
    width: 0.625rem;margin-left: 0.4rem;margin-right: 0.2rem;
  }
  .order-information-3{
    width: 100%;background-color: #ffffff;
  }
  .information-1-text{
    margin-left: 0.9rem;font-weight:bolder;
  }
  .judgementImg{
    width: 2.1rem;margin-right: 0.3rem;
  }
  .use-box{
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;padding-top: 0.3rem;margin-bottom: 0.1rem;
  }
  .address-box{
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;
  }
  #order-border{
    height: 0.196rem;width: 10rem;margin: 0;
  }
  .car-price-full{
    font-size: 0.25rem;color: #ff1000;
  }
  .car-price-full span{
    font-size: 0.37rem;
  }
  .order-information-3-head{
    height: 1.2rem;display: -webkit-flex; /* Safari */
    display: flex;align-items: center;
  }
  .order-information-3-content{
    display: -webkit-flex; /* Safari */
    display: flex;height: 2.56rem;background-color: #f5f5f5;align-items:center;
  }
  .order-information-4{
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: center;
    width: 100%;height: 1.38rem;background-color: #ffffff;border-bottom: 1px solid #d6d4d4;border-top: 1px solid #d6d4d4;
  }
  .service-phone{
    width: 6.75rem;height: 0.94rem;border: 1px solid #0554c3;border-radius: 5px;
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: center;font-size: 0.37rem;color: #0554c3;font-weight: bolder;
  }
  .service-phone img{
    width: 0.56rem;
  }
  .order-information-5{
    width: 100%;height: 0.9rem;background-color: #ebebeb;color: #878787;font-size: 0.34rem;
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: center;
  }
  .order-information-5 div{
    border-top: 1px solid #afafaf;width: 0.83rem;height: 0;margin: 0 0.2rem;
  }
  .order-pay-button{
    height: 1.1rem;width: 100%;background-color: #ffffff;
    display: -webkit-flex; /* Safari */
    display: flex;border-top: 1px solid #d6d4d4;border-bottom: 1px solid #d6d4d4; flex-direction:row-reverse;align-items: center;font-size: 0.37rem;
    position: fixed;
    bottom:0;
  }
  #car-color{
    margin: 0;
  }
  #shop-name{
    margin-left: 0.3rem;
  }



</style>

<script>
  export default {
    name: 'order-information',
    data () {
      return {
        msg: '',
        judgementText:'用户已支付定金',
        orderNumber:'12543211',
        userName:'代用名',
        userNumber:'13149951526',
        userAddress:'深圳市南山区马家龙大新路88号雅芳婷中心502',
      }
    }
  }
</script>
