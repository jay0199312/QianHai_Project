<style scoped lang="scss">
 /*//促销*/
  .promotion{
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    background: #fff;
    padding:0.25rem;
    overflow: hidden;
    display: flex;
    display: -webkit-flex;
    border-bottom:1px solid #dfdfdf;
    justify-content: center;
    .left{
      flex:1;
      -webkit-flex:1;
      line-height:1.25rem;
      border-right:1px solid #d4d4d4;
      img{
        vertical-align: middle;
        width: 0.5rem;
      }
    }
    .right{
      flex:5;
      -webkit-flex:5;
      padding-left: 0.33rem;
      color: red;
      span{
        background: url(../assets/images/goodsdetail/goodsdetail_07.png) 0 0 no-repeat;
        -webkit-background-size:100%;
        background-size:100%;
        line-height:0.65rem;
        height:0.65rem;
        width: 1.25rem;
        display:inline-block;
        color: #fff;
        text-align: center;
        padding-right:.1rem;
      }
      label{
        width: 5.5rem;
        display:inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .up{
        margin-bottom: 0.1rem;
      }
    }
  }
</style>
<template>
  <div class="promotion">
    <div class="left">
      <img src="../assets/images/goodsdetail/goodsdetail_12.png" alt="">
      <label for="">促销</label>
    </div>
    <div class="right">
      <div class="up">
        <span>加价购</span>
        <label for="">加10块就送价值9998充气娃娃</label>
      </div>
      <div class="down">
        <span>赠&nbsp;送</span>
        <label for="">下单就送价值998飞机杯</label>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
    export default{
    	name:'buyProcess'
    }
</script>
