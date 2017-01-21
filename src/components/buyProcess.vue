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
  display:flex;  
  display:-webkit-flex;
  padding-left: .2rem;
  background: #fff;
  .block{
    flex:3;
    -webkit-flex:3;
    padding:.2rem;
    padding-left: 0rem;
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
      color: #666
    }
  }
}
</style>
<template>
  <div class="buyway">
    <p class="header">为您推荐</p>
    <div class="adviceblock">
      <div class="adviceblock-box">
        <div class="block b1">
          <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
          <p>学弗兰</p>
          <div class="price"><label for="">￥<em>36.8</em>万</label></div>
        </div>
        <div class="block b2">
          <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
          <p>学弗兰</p>
          <div class="price"><label for="">￥<em>36.8</em>万</label></div>
        </div>
        <div class="block b3">
          <img src="http://121.40.78.200/pic/shop/photo/qzlogo.jpg" alt="">
          <p>学弗兰</p>
          <div class="price"><label for="">￥<em>36.8</em>万</label></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
    export default{
    	name:'buyProcess'
    }
</script>
