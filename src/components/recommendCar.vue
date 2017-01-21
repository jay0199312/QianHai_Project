<style scoped lang="scss">
.buyway{
  padding-top: .3rem;
  .header{
    color: #1867d6;
    border-left:3px solid #1867d6;
    background: #fff;
    padding:0.25rem;
    font-size:16px;
    border-bottom: 1px solid #efefef;
  }
 
  .process{
    padding:0.375rem;
    display:-webkit-flex;
    display:flex;
    background: #fff;
    div{
      flex:1;
      -webkit-flex:1;
    }
    .split{
      height:1px;
      background: #1867d6;
      margin:0.6rem 0.3rem;
    }
    .block{
      p{
        color: #1867d6;
        text-align: center;
      }
      img{
        width: 1.3rem;
      }
    }
  }
}
</style>
<template>
  <div class="buyway">
    <p class="header">购买流程</p>
    <div class="process">
      <div class="block">
        <img src="../assets/images/goodsdetail/goodsdetail_03.png" alt="">
        <p>线上预约</p>
      </div>
      <div class="split"></div>
      <div class="block">
        <img src="../assets/images/goodsdetail/goodsdetail_04.png" alt="">
        <p>线下看书</p>
      </div>
      <div class="split"></div>
      <div class="block">
        <img src="../assets/images/goodsdetail/goodsdetail_02.png" alt="">
        <p>支付订单</p>
      </div>
      <div class="split"></div>
      <div class="block">
        <img src="../assets/images/goodsdetail/goodsdetail_01.png" alt="">
        <p>办理过户</p>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
    export default{
    	name:'buyProcess'
    }
</script>
