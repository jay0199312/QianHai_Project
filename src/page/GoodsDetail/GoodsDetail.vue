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
    a{
      color: #999;
    }
    .dell{
      flex:1.5;
      -webkit-flex:1.5;
      padding:.1rem 0;
      &:first-child{
        border-right:1px solid #d4d4d4;
      }
      img{
        width: 0.55rem
      }
    }
    .willdrive{
      flex:3;
      -webkit-flex:3;
      font-size:16px;
      line-height:1.2rem;
      color: #fff;
      background: #f4a83d;
    }
    .book{
      flex:4;
      -webkit-flex:4;
      font-size:16px;
      line-height:1.2rem;
      color: #fff;
      background: #1060c6;
    }
  }
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
  /*// 即将秒杀*/
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
  /*// 操作区域*/
  .controlbox{
    background: #fff;
  }
  .title-select{
    padding-right: 0.25rem;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display:flex;
    display:-webkit-flex;
  .title{
      flex:7;
      -webkit-flex:7;
      box-sizing:border-box;
      -webkit-box-sizing:border-box;
      width: 70%;
      padding-right:.5rem;
      border-right:1px solid #d4d4d4;
      margin:0.375rem 0.25rem;
      h2{
        font-size:18px;
      }
    }
  .select{
      flex: 3;
      -webkit-flex: 3;
      margin:0.375rem 0rem;
      padding-left: 0.5rem;
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
      vertical-align: middle;
      height:.5rem;
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
  .price{
    padding-bottom: 0.25rem;
    padding-left: 0.25rem;
    color: #e73624;
    em{
      font-size: 24px;
    }
  }
  .selected{
    padding-left: 0.25rem;
  }
  .chosenlab{
    font-size:14px;
    label{
      color: #999;
    }
  }
  .colorblocks{
    padding:0.25rem 0;
    .colorblock{
      border: 1px solid #fff;
      display:inline-block;
      position:relative;
      height:0.769rem;
      &.on{
        border: 1px solid #e73624;
      }
      span{
        border:1px solid #efefef;
        display:inline-block;
        height:0.675rem;
        width:1.15rem;
        margin:1px;
        &.gray{
           background: gray;
         }
        &.white{
           background: white;
         }
        &.black{
           background: #333333;
         }
        &.red{
           background: red;
         }
        img{
          position: absolute;
          right: -0.15rem;
          bottom:-0.15rem;
          width: 0.4rem;
          height:.4rem;
        }
      }
    }
  }
  .paper{
    border-top:1px solid #efefef;
    padding:0.2rem 0.25rem;
    color: #999;
    span{
      margin-right: .5rem;
    }
    img{
      width: 0.5rem;
      vertical-align: middle;
      display:inline-block;
    }
  }

  /*//切换栏*/
  .tabbox{
    margin-top: 0.25rem;
    .page-part{
      margin-bottom: .2rem;
    }
  }

</style>
<template>
<div>
  <footer>
    <a href="tel:" class="dell">
      <img src="../../assets/images/goodsdetail/goodsdetail_08.png" alt="">
      <p>咨询</p>
    </a>
    <a href="" class="dell">
      <img src="../../assets/images/goodsdetail/goodsdetail_09.png" alt="">
      <p>收藏</p>
    </a>
    <a href="#" class="willdrive" @click="bookDrive">预约试驾</a>
    <a href="#" class="book">立即订车￥2000</a>
  </footer>
  <div class="page">
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
      <div class="price"><label for="">￥<em>36.8</em>万</label></div>
      <div class="selected">
        <div class="chosenlab"><label>颜色 >> </label>高级灰</div>
        <div class="colorblocks">
          <span class="colorblock on">
            <span class="gray">
            <img src="../../assets/images/goodsdetail/goodsdetail_10.png" alt="">
            </span>
          </span>
          <span class="colorblock">
            <span class="white">

            </span>
          </span>
          <span class="colorblock">
            <span class="black">

            </span>
          </span>
          <span class="colorblock">
            <span class="red">

            </span>
          </span>
        </div>
      </div>
      <div class="paper">
        <span>
          <img src="../../assets/images/goodsdetail/goodsdetail_11.png"alt="">
          <label for="">牛逼认证</label>
        </span>
         <span>
          <img src="../../assets/images/goodsdetail/goodsdetail_11.png"alt="">
          <label for="">牛逼认证</label>
        </span>
      </div>
    </div>
    <promotion></promotion>
    <myLine>继续拖动,查看图文详情</myLine>
    <div class="tabbox">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">车辆信息</mt-tab-item>
        <mt-tab-item id="2">参数配置</mt-tab-item>
        <mt-tab-item id="3">线下展厅</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <recommendCar></recommendCar>
    <buyProcess></buyProcess>
  </div>
  <alertBox :show="givedata" v-show="givedata.isActive"></alertBox>
</div>
</template>
<script>
  //购买流程
  import buyProcess from './../../components/buyProcess.vue'
  //为您推荐
  import recommendCar from './../../components/recommendCar.vue'
  //促销
  import promotion from './../../components/promotion.vue'
  //提示线
  import myLine from './../../components/line.vue'
  //弹窗
  import alertBox from './../../components/alertbox.vue'
  export default {
    name: 'page-navbar',
    components: {
      buyProcess,recommendCar,promotion,myLine,alertBox
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
      bookDrive(){
        this.givedata.isActive=true
      }
    }
  };
</script>
