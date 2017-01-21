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
  .chosenStore{
    background: #fff;
    overflow: hidden;
    padding: 0.25rem;
    >img{
      float: left;
       width: 1.5rem;
       height: 1.5rem;
      border-radius: 0.125rem;
    }
    .detail{
      line-height: .55rem;
      margin-left: 1.7rem;
      .title{
        font-size: 16px;
      }
      .address{
        color: #999;
      }
      .location{
        color: #999;
        img{
          width:0.325rem;
        }
      }
    }
  }
  .dateServe{
    background: #fff;
    margin-top: 0.25rem;
    .tab-header{
      .swiper-button-prev{
        background-size:16px;
        -webkit-background-size:16px;
        border-right:1px solid #dfdfdf;
        background-color: #fff;
      }
      .swiper-button-next{
        background-size:16px;
        -webkit-background-size:16px;
        border-left:1px solid #efefef;
        background-color: #fff;
      }

      .swiper-slide{
        padding:0.25rem 0;
        opacity: .4;
        text-align: center;
      }
      .swiper-slide-active{
        opacity: 1;
        background: #26a2ff;
        color: #fff;
      }
    }
    .timelist{
      border-top:1px solid #efefef;
      li{
        border-bottom:1px solid #efefef;
        line-height:.5rem;
        padding:0.25rem;
        display:flex;
        display:-webkit-flex;
        .detail{
          flex:5;
          -webkit-flex:5;
          p:last-child{
            color: #f4a83d;
          }
        }
      }
    }
  }
</style>
<template>
  <div>
    <div class="page">
      <mt-header title="分时优惠">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="chosenStore">
        <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
        <div class="detail">
          <p class="title">广汽丰田兆方店</p>
          <p class="address">深圳南山区华侨城桥香西路找房汽车广场</p>
          <p class="location">
          <img src="../../assets/images/maintain/maintain-location.png" alt="">
            1.3km
          </p>
        </div>
      </div>
      <div class="dateServe">
        <div class="tab-header">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <p>11月20号</p>
                <p>周四</p>
              </div>
              <div class="swiper-slide">
                <p>11月21号</p>
                <p>周五</p>
              </div>
              <div class="swiper-slide">
                <p>11月22号</p>
                <p>周六</p>
              </div>
              <div class="swiper-slide">
                <p>11月22号</p>
                <p>周六</p>
              </div>
              <div class="swiper-slide">
                <p>11月22号</p>
                <p>周六</p>
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
        <div class="contener">
          <ul class="timelist">
            <li>
              <div class="detail">
                <p>08:00-09:00</p>
                <p>准时到店,可再获得20元工时券</p>
              </div>
              <mt-button size="small" type="primary">下单</mt-button>
            </li>
            <li>
              <div class="detail">
                <p>12:00-14:00</p>
                <p>&nbsp;</p>
              </div>
              <mt-button size="small" type="primary">下单</mt-button>
            </li>
            <li>
              <div class="detail">
                <p>15:00-19:00</p>
                <p>准时到店,可再获得20元工时券</p>
              </div>
              <mt-button size="small" type="primary">下单</mt-button>
            </li>
            <li>
              <div class="detail">
                <p>08:00-09:00</p>
                <p>准时到店,可再获得20元工时券</p>
              </div>
              <mt-button size="small" type="primary">下单</mt-button>
            </li>
          </ul>
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
    mounted(){
      const mySwiper = new Swiper('.swiper-container', {
        //autoplay: 5000,
        //slideToClickedSlide:true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        paginationClickable: true,
        slideToClickedSlide: true,
        slidesPerView : 3,
        centeredSlides: true,

      })
    },
    methods: {

    }
  };
</script>
