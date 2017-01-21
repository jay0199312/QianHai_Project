<style scoped lang="scss">
  /*.page{
    position:absolute;
    overflow-y:scroll;
    overflow-x:hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  footer~.page{
    bottom:1.467rem;
  }
  footer{
    background: #fff;
    height:1.437rem;
    position:fixed;
    bottom:0;
    width: 100%;
    display:flex;
    display:-webkit-flex;
    border-top:1px solid #efefef;
    text-align: center;
  .tabbar{
      width:100%;
      display: flex;
      display: -webkit-flex;
      a{
        flex:2;
        -webkit-flex:2;
        margin: .1rem 0;
        color: #666;
        .on{
          color: #2159c6;
        }
        img{
          display: block;
          margin: auto;
          width: .8rem;
        }
      }
    }
  }*/
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
  .serveBlock{
    margin-top: 0.25rem;
    &:after{
      width: 0;
      height: 0;
      clear:both;
      content:'.';
      display:block;
      visibility:hidden;
    }
    img{
      display: inline-block;
      float: left;
    }
    .serveBlock-left{
      width:5rem;
    }
    .serveBlock-right1,.serveBlock-right2{
      width:5rem;
    }
  }
  .carblcok{
    width:100%;
    &:after{
      width: 0;
      height: 0;
      clear:both;
      content:'.';
      display:block;
      visibility:hidden;
    }
    img{
      display: inline-block;
      width:4.6rem;
      float: left;
      margin:0.25rem;
      &:last-child{
        margin-left: 0;
      }
    }
  }
  .mainBlock{
    background: #fff;
    padding:0.25rem;
    display:flex;
    display:-webkit-flex;
    width:100%;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    position:relative;
    .car-pic{
      width:3.0rem;
      height:2.0rem;
    }
    .detail{
      padding-left: 0.25rem;
      h2{
        font-size: 16px;
      }
      p{
        color:#666;
        line-height: .5rem;
        label{
          color:red;
        }
      }
    }
    .book{
      width:2.0rem;
      position:absolute;
      right: 0.3rem;
      top: 0.3rem;
      z-index: 12;
    }
  }

</style>
<template>
<div>
  <!--<footer>
    <div class="tabbar">
      <router-link to="">
        <div class="item-link">
          <img src="../../assets/images/public/indexFooter_01.png">
          首页
        </div>
      </router-link>
      <router-link to="/ChooseCarIndex">
        <div class="item-link">
          <img src="../../assets/images/public/indexFooter_02.png">
          选车
        </div>
      </router-link>
      <router-link to="">
        <div class="item-link on">
          <img src="../../assets/images/public/indexFooter_07.png">
          车生活
        </div>
      </router-link>
      <router-link to="">
        <div class="item-link">
          <img src="../../assets/images/public/indexFooter_04.png">
          我的
        </div>
      </router-link>
    </div>
  </footer>-->
  <div class="page">
    <div class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="serveBlock">
      <img src="../../assets/images/carlife/carlife_01.png" class="serveBlock-left" alt="">
      <img src="../../assets/images/carlife/carlife_02.png" class="serveBlock-right1" alt="">
      <img src="../../assets/images/carlife/carlife_03.png" class="serveBlock-right2" alt="">
    </div>
    <div class="carblcok">
      <img src="../../assets/images/carlife/carlife_04.png" alt="">
      <img src="../../assets/images/carlife/carlife_05.png" alt="">
    </div>
    <div class="noticeblock">
      <titleBlock>
        <label slot="header">温馨提示</label>
      </titleBlock>
      <div class="mainBlock">
        <img src="http://121.40.78.200/pic/shop/article/98769753226215688556746.jpg" alt="" class="car-pic">
        <div class="detail">
          <h2>5000KM定期保养</h2>
          <p>粤B763438</p>
          <p><label for="">预约时间:</label>2016-10-18 16:50:00</p>
          <p><label for="">下单时间:</label>2016-10-18 16:50:00</p>
        </div>
        <img src="../../assets/images/carlife/carlife_06.png" alt="" class="book">
      </div>
    </div>

  </div>
</div>
</template>
<script>
  //购买流程
  import titleBlock from './../../components/blue-title-block.vue'
  export default {
    name: 'page-navbar',
    components: {
      titleBlock
    },
    data() {
      return {
        selected: '车生活'
      };
    },
    methods: {

    }
  };
</script>
