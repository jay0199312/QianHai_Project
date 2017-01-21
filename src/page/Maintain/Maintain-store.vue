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
      &.sum{
        border-left:0;
        color:#333;
        width:auto;
        padding:0.3rem .5rem;
        span{
          color:#E73624;
          font-size: 16px;
        }
       }
      &.nowpay{
         color: #fff;
         background: #1060c6;
       }
    }
  }
  .maintainStoreBox{
    width:100%;
    display:flex;
    display:-webkit-flex;
    overflow-x:auto;
    .maintainStore{
      flex:3;
      -webkit-flex:3;
      background: #fff;
      border-right: 1px solid #efefef;
      &:last-child{
        border:0;
      }
      img{
        margin-left: 0.25rem;
        width:3.0rem;
        margin: 0.25rem auto;
        display: block;
        height: 2.3rem;
      }
      .detail{
        padding:0.25rem;
        padding-top: 0;
        p{
          color: #666;
          line-height: 0.5rem;
          label{
            color:#E73624;
          }
        }
      }
    }
  }
  .maintainBox{
    margin-top: 0.25rem;
    .title-range{
      background: #fff url(../../assets/images/maintain/maintain-checked_00.png) no-repeat right 0.25rem center;
      background-size: 0.65rem;
      -webkit-background-size: 0.65rem;
      color: #1060c6;
      border-left: 3px solid #1060c6;
      padding: 0.25rem;
      border-bottom: 1px solid #dfdfdf;
      &.on{
      background: #fff url(../../assets/images/maintain/maintain-checked_01.png) no-repeat right 0.25rem center;
      background-size: 0.65rem;
      -webkit-background-size: 0.65rem;
      }
      &.rightext{
        background: #fff;
        .prize{
          float: right;
          color: #E73624;
        }
      }
    }
    .maintainlist{
      padding: 0.25rem;
      img{
        width: 2rem;
        height: 2rem;
        float: left;
      }
      .detail{
        margin-left: 2.25rem;
        font-size: 16px;
        line-height: 0.6rem;
        >span{
          color:#1060c6;
          border:1px solid #1060c6;
          padding:0 .2rem;
        }
        .name{
          display:flex;
          span{
            flex:3;
            -webkit-flex:1;
            &:last-child{
              color:#E73624;
              text-align: right;
            }
          }
        }
        .quantity{
          display:flex;
          span{
            flex:3;
            -webkit-flex:1;
            &:last-child{
              color:#E73624;
              text-align: right;
            }
          }
        }
      }
    }
  }
</style>
<template>
  <div>
    <footer>
      <div class="tap-wraper">
        <label class="sum">总计:<span>￥688</span></label>
        <label class="nowpay">选 店</label>
      </div>
    </footer>
    <div class="page">
      <mt-header title="选店">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
     <div class="maintainStoreBox">
       <div class="maintainStore">
         <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
         <div class="detail">
           <p>一汽丰田深业店</p>
           <p>好评:<label>90%</label></p>
         </div>
       </div>
       <div class="maintainStore">
         <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
         <div class="detail">
           <p>一汽丰田深业店</p>
           <p>好评:<label>90%</label></p>
         </div>
       </div>
       <div class="maintainStore">
         <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
         <div class="detail">
           <p>一汽丰田深业店</p>
           <p>好评:<label>90%</label></p>
         </div>
       </div>
     </div>
     <div class="maintainBox">
       <div class="title-range">
        <label>基础保养</label>
       </div>
       <div class="maintainlist">
        <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
         <div class="detail">
           <div class="name">
             <span>你的名字</span>
             <span>￥300</span>
           </div>
           <div class="quantity">
             <span>1l装</span>
             <span>x1</span>
           </div>
           <span>换</span>
         </div>
       </div>
     </div>
     <div class="maintainBox">
       <div class="title-range">
        <label>基础保养</label>
       </div>
       <div class="maintainlist">
        <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
         <div class="detail">
           <div class="name">
             <span>你的名字</span>
             <span>￥300</span>
           </div>
           <div class="quantity">
             <span>1l装</span>
             <span>x1</span>
           </div>
           <span>换</span>
         </div>
       </div>
     </div>
     <div class="maintainBox">
       <div class="title-range rightext">
        <label>基础保养</label>
        <label class="prize">￥198</label>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
  //提示线
  import titleBlock from './../../components/blue-title-block.vue'
  import swiper from './../../assets/js/swiper.min.js'
  import './../../assets/css/swiper.min.css'

  export default {
    name: 'page-navbar',
    components: {
      titleBlock
    },
    data() {
      return {

      };
    },
    methods: {

    }
  };
</script>
