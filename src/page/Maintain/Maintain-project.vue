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
      &.cancle{

       }
      &.nowpay{
         color: #fff;
         background: #1060c6;
       }
    }
  }
  .carbox{
    display: flex;
    display: -webkit-flex;
    background: #fff;
    .carbox-l{
      flex:3;
      -webkit-flex:3;
      padding:0.25rem;
      img{
        width:1.5rem;
        float: left;
        vertical-align: middle;
      }
      .detail{
        padding-left: 1.75rem;
      }
      h2{
        font-size: 16px;
        line-height: .8rem
      }
      label{
        color:#999;
      }
    }
    .carbox-r{
      flex:1;
      -webkit-flex:1;
      border-left: 1px solid #efefef;
      padding:0.25rem;
      padding-right: .65rem;
      background: url(../../assets/images/maintain/km.png) right 0.25rem top 0.44rem  no-repeat;
      background-size: 0.625rem auto;
      -webkit-background-size: 0.625rem auto;
      h2{
        font-size: 16px;
        line-height: .8rem
      }
      label{
        color:#999;
      }
    }
  }
  .maintain-recommend{
    margin-top: 0.25rem;
    .maintain-list{
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
      -webkit-column-gap:0.1rem;
      -moz-column-gap:0.1rem;
      column-gap:0.1rem;
      -webkit-column-fill:auto;
      -moz-column-fill:auto;
      column-fill:auto;
      background: #fff;
      padding:0.3rem;
      img{
        width:1.7rem;
        display:block;
        margin:auto;
      }
      p{
        text-align: center;
        color:#666;
        padding-top: 0.3rem;
      }
    }
  }
  .maintain-free{
    margin-top: 0.25rem;
    img{
      width:10rem;
      margin:auto;
      background: #fff;
      display:block;
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
      <mt-header title="选保养项目">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="carbox">
        <div class="carbox-l">
          <img src="http://121.40.78.200/pic/carLogo/1418116708447.png" alt="">
          <div class="detail">
            <h2>丰田普拉多</h2>
            <label for="">2016款2.7手动</label>
          </div>
        </div>
        <div class="carbox-r">
          <h2>5000</h2>
          <label>当前里程</label>
        </div>
      </div>
      <div class="maintain-recommend">
        <titleBlock>已为您推荐3项保养</titleBlock>
        <div class="maintain-list">
          <div class="project">
          <img src="../../assets/images/maintain/maintain_03.png" alt="">
          <p>换机油</p>
          </div>
          <div class="project">
          <img src="../../assets/images/maintain/maintain_07.png" alt="">
          <p>换刹车片</p>
          </div>
          <div class="project">
          <img src="../../assets/images/maintain/maintain_11.png" alt="">
          <p>换刹车油</p>
          </div>
        </div>
      </div>
      <div class="maintain-free">
         <titleBlock>免费保养项目</titleBlock>
         <div class="free">
         <img src="../../assets/images/maintain/maintain-free_02.png" alt="">
         <img src="../../assets/images/maintain/maintain-free_03.png" alt="">
         </div>
      </div>
    </div>
  </div>
</template>
<script>
  //提示线
  import titleBlock from './../../components/blue-title-block.vue'

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
