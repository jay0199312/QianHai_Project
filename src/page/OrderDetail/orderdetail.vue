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
  footer~.page{
    bottom:1.2rem;
  }
  footer{
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
  .orderstatus{
    background:url(../../assets/images/orderdetail/orderdetail_02.png) 0 0 no-repeat;
    -webkit-background-size:100%;
    background-size:100%;
    color: #fff;
    height: 2.1rem;
    position:relative;
    padding:1rem 0 0 1rem;
    img{
      position:absolute;
      width: 2.3rem;
      right:.5rem;
      top:.5rem;
    }
    p{
      line-height:0.6rem;
    }
  }
  .customer{
    background: #fff url(../../assets/images/orderdetail/orderdetail_08.png) 0 bottom repeat-x;
    background-size:auto 0.15rem;
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
      display:flex;
      display:-webkit-flex;
      .car-pic{
        flex:1;
        -webkit-flex:1;
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
          line-height:18px;
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
    .label{
      background: #efefef;
      padding:0.25rem;
      .item{
        font-size: 14px;
        line-height: 0.6rem;
        display:flex;
        display:-webkit-flex;
        width:100%;
        .item-left{
          flex:3;
          -webkit-flex:3;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .item-right{
          flex:1;
          -webkit-flex:1;
          text-align: right;
          color: #e73624;
        }
      }
    }
    .sum{
        width:100%;
        font-size: 14px;
        line-height: 0.6rem;
        display:flex;
        display:-webkit-flex;
        padding:0.25rem;
        box-sizing:border-box;
        -webkit-box-sizing:border-box;
        border-top:1px solid #eaeaea;
        border-bottom:1px solid #efefef;
        .sum-left{
          flex:3;
          -webkit-flex:3;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .sum-right{
          flex:1;
          -webkit-flex:1;
          text-align: right;
          color: #e73624;
        }
    }
  }
  .car-connect{
    background: #fff;
    display:block;
    overflow: hidden;
    .connectBtn{
      display:block;
      border:1px solid #1060c6;
      color:#1060c6;
      padding:.2rem 1rem;
      margin:.2rem 1.6rem;
      text-align: center;
      border-radius:.2rem;
      font-size:14px;
      img{
        width:.5rem;
        vertical-align: middle;
      }
    }
  }
  .like{
    padding:0.3rem;
  }
  .likeblock{
    display: block;
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
    -webkit-column-gap:0.1rem;
    -moz-column-gap:0.1rem;
    column-gap:0.1rem;
    -webkit-column-fill:auto;
    -moz-column-fill:auto;
    column-fill:auto;
    .goodsBlock{
      background: #fff;
      margin-bottom: 0.1rem;
      padding:.2rem;
      img{
        width:4.5rem;
        height:2.95rem;
      }
      p{
        padding:.1rem;
        height:2.5em;
        line-height:1.2em;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .prize{
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
      &.cancle{

      }
      &.nowpay{
         color: #fff;
         background: #1060c6;
      }
    }
  }
  .paymsg{
    background: #fff;
    margin-top: 0.25rem;
    padding-left: 0.25rem;
    .cell{
      padding:0.375rem 0;
      border-bottom:1px solid #efefef;
      span{
        color:#666;
      }
    }
  }
</style>
<template>
<div>
  <footer>
  <div class="tap-wraper">
    <label class="cancle">取消</label>
    <label class="nowpay">立即支付</label>
  </div>
  </footer>
  <div class="page">
    <mt-header title="订单详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 车订单 -->
    <div class="orderstatus">
      <div class="ordermsg">
        <p>等待用户付款</p>
        <p>订单号:12345613</p>
      </div>
      <img src="../../assets/images/orderdetail/orderdetail_01.png" class="statusimg waitPay">
    </div>
    <div class="customer">
      <div class="c1">
        <span class="c1-name">代用名</span>
        <span class="c1-phone">12345678912</span>
      </div>
      <div class="c2">深圳市南山区大新路88号雅芳婷中心502</div>
    </div>
    <!-- 保养类订单 -->
    <div class="customer">
      <div class="c1">
        <span class="c1-carNumber">粤B52153</span>
        <span class="c1-km">5000km</span>
      </div>
      <div class="c2-carkind">
        <img src="http://121.40.78.200/pic/carLogo/1418116708447.png" alt="">
        布加迪威龙
      </div>
    </div>
    <!-- 保养类订单 -->
    <div class="carblock">
     <p class="title">
       <img src="http://121.40.78.200/pic/carLogo/1418116708447.png" alt="">
       <label for="">宝安布吉店</label>
     </p>
     <div class="label">
       <div class="item">
         <div class="item-left">换轮胎</div>
         <div class="item-right">￥99</div>
       </div>
       <div class="item">
         <div class="item-left">换轮胎</div>
         <div class="item-right">￥99</div>
       </div>
       <div class="item">
         <div class="item-left">换轮胎</div>
         <div class="item-right">￥99</div>
       </div>
     </div>
     <div class="sum">
       <div class="sum-left">总计</div>
       <div class="sum-right">￥99</div>
     </div>
     <div class="car-connect">
       <span class="connectBtn">
       <img src="../../assets/images/orderdetail/orderdetail_06.png" alt="">
       联系客服
       </span>
     </div>
   </div>
    <div class="carblock">
     <p class="title">
       <img src="http://121.40.78.200/pic/carLogo/1418116708447.png" alt="">
       <label for="">宝安布吉店</label>
     </p>
     <div class="content">
       <div class="car-pic">
          <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
       </div>
       <div class="car-detail">
         <h2>宝安2016款手动运动版</h2>
         <p>颜色:红色</p>
         <p class="sellPrize"><label>￥32.8</label>万元起</p>
         <p class="bookPrize">定金: <label >￥1000</label></p>
       </div>
     </div>
     <div class="car-connect">
       <span class="connectBtn">
       <img src="../../assets/images/orderdetail/orderdetail_06.png" alt="">
       联系客服
       </span>
     </div>
   </div>
   <div class="paymsg">
     <div class="cell"><label>支付方式:</label><span>微信支付</span></div>
     <div class="cell"><label>下单时间:</label><span>2016-11-02 14:08:49</span></div>
     <div class="cell"><label>付款时间:</label><span>2016-11-02 14:08:49</span></div>
   </div>
   <div class="like">
     <myLine>猜您喜欢</myLine>
   </div>
   <div class="likeblock">
     <div class="goodsBlock">
       <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
       <p>玛莎拉蒂</p>
       <label class="prize"><label>￥60</label>万</label>
     </div>
     <div class="goodsBlock">
       <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
       <p>玛莎拉蒂2</p>
       <label class="prize"><label>￥60</label>万</label>
     </div>
     <div class="goodsBlock">
       <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
       <p>玛莎拉蒂</p>
       <label class="prize"><label>￥60</label>万</label>
     </div>
     <div class="goodsBlock">
       <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
       <p>玛莎拉蒂</p>
       <label class="prize"><label>￥60</label>万</label>
     </div>
   </div>
  </div>
</div>
</template>
<script>
  //提示线
  import myLine from './../../components/line.vue'

  export default {
    name: 'page-navbar',
    components: {
    myLine
    },
    data() {
      return {
        selected: '1',
        value: null,
        visible: false,
        givedata:{isActive:false}
      };
    },
    methods: {

    }
  };
</script>
