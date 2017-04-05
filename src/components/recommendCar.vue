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
}
.price{
  padding-bottom: 0.25rem;
  padding-left: 0.25rem;
  color: #e73624;
  em{
    font-size: 24px;
  }
}
.adviceblock-box{
  /*padding-left: .2rem;*/
  .block{
    background: #fff;
    padding:.2rem;
    border-right:1px solid #efefef;
    box-sizing: border-box;
    img{
      width: 100%;
      height:2.0rem;
    }
    .price{
      padding:0;
      margin:0;
      font-size:12px;
      em{
        font-size:16px;
      }
    }
    p{

      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: .9rem;
      color: #666;
    }
  }
}
</style>
<template>
  <div class="buyway">
    <p class="header">为您推荐</p>
    <div class="adviceblock swiper-container">
      <div class="adviceblock-box swiper-wrapper">
        <div class="block b1 swiper-slide" v-for="item of rcmd_data" @click="refreshlink(item.id)">
          <img :src="item.thumb" alt="item.name">
          <p>{{item.name}}</p>
          <div class="price"><label for=""> ¥<em>{{item.price}}</em>万</label></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script type="text/babel">
    import swipt from "../assets/js/swiper.min"
    import  "../assets/css/swiper.min.css"
    import { Lazyload } from 'mint-ui';
    export default{
    	name:'recommendCar',
      props:["rcmd_data"],
      data(){
        return {

        }
      },
      mounted(){
        const swiper = new Swiper('.swiper-container',{
          slidesPerView : 3
        })
      },
      methods:{
        refreshlink(id){
          sessionStorage.setItem("GoodsDetail_ID",id)
          location.reload()
        }
      }

    }
</script>
