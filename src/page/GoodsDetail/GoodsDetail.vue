<style scoped lang="scss">
  .mint-swipe {
    height: 7rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 0px;
  }

  .mint-swipe-item {
    line-height: 7rem;
  }

  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }

  .slide2 {
    background-color: #ffd705;
    color: #000;
  }

  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
  .willsec{
    background: #fae1ec;
    padding:0.25rem;
    color: #e1637e;
    font-size:14px;
    img{
      width: 0.5rem;
      vertical-align: middle;
    }
    label{
      line-height:0.5rem
    }
  }
  .controlbox{
    background: #fff;
  }
  .title-select{
    padding-right: 0.25rem;
    width: 100%;
    display:flex;
    display:-webkit-flex;
  .title{
      flex:8;
      -webkit-flex:8;
      box-sizing:border-box;
      -webkit-box-sizing:border-box;
      width: 70%;
      padding-right:.5rem;
      margin:0.375rem 0.25rem;
      h2{
        font-size:18px;
      }
    }
    .line{
      flex:1;
      -webkit-flex:1;
      border-left: 1px solid #d4d4d4;
      height:1rem;
      margin:0.375rem 0rem;
    }
  .select{
      flex: 4;
      -webkit-flex: 4;
      margin:0.375rem 0rem;
      span{
        border:1px solid #1867d6;
        padding:0.2rem;
        float: left;
        display:inline-block;
        margin: 0;
        color: #1867d6;
        &.active{
          background: #1867d6;
          color: #fff;
        }
      }
    }
  }
  .goods-tag{
    margin-left: 0.25rem;
    img{
      height:.5rem;
      vertical-align: middle;
    }
    .tag{
      color: #999;
      border-right: 1px solid #d4d4d4;
      padding:0.08rem 0.1rem;
      &:last-child{
        border:none
      }
    }
  }
</style>
<template>
  <div>
    <div class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="controlbox">
      <div class="willsec">
        <img src="../../assets/images/goodsdetail/goodsdetail_05.png" alt="">
        <label for="">
          秒杀预告:预计 <label>17</label>日<label>1:00</label>开抢
        </label>
      </div>
      <div class="title-select">
        <div class="title">
          <h2>
            2016款原装进口丰田,穿越者2.4L两驱汽油版7座
          </h2>
        </div>
        <div class="line"></div>
        <div class="select">
          <span class="active">现车</span>
          <span>美规</span>
        </div>
      </div>
      <div class="goods-tag">
        <img src="../../assets/images/goodsdetail/goodsdetail_06.png" alt="">
        <span class="tag">颜值高</span>
        <span class="tag">耐操</span>
        <span class="tag">霸脚</span>
      </div>
    </div>

  </div>



</template>

