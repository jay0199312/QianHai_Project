<style scoped lang="scss">
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
  }
  .paymsg{
    color: #999;
    >p{
      padding:.25rem;
      }
     .illegalPayDtail{
       padding:.25rem;
       line-height:.6rem;
       background: #fff;
       h2{
         font-size:18px;
         color: #000;
       }
       .illegalscore{
         margin-top:.25rem;
         .block{
           display: inline-block;
           padding:0 .25rem;
           border-right:1px solid #efefef;
           &:last-child{
              border:none;
            }
            span{
              color: #000;
              font-size:16px;
              padding-top:.25rem;
              display: block;
            }
         }
       }
     }
  }
  .read{
    padding:.25rem;
    color: #999;
    text-align: center;
    img{
      width:16px;
      vertical-align: middle;
    }
    span{
      color: #e73624;
    }
  }
</style>
<template>
  <div>
    <footer>
      <div class="tap-wraper">
        <label class="sum">需支付:<span>¥{{parseFloat(detail.SMONEY) + parseFloat(detail.SERV_FEE) }}</span></label>
        <label class="nowpay">立即缴费</label>
      </div>
    </footer>
    <div class="page">
      <mt-header title="违章缴费">
        <mt-button icon="back" slot="left" @click.native="$store.commit('back')"></mt-button>
      </mt-header>
      <div class="paymsg">
        <p>车主信息</p>
        <div class="page-part">
          <mt-field label="姓名" placeholder="请输入您的姓名"></mt-field>
          <mt-field label="电话" placeholder="请输入您的电话"></mt-field>
        </div>
      </div>
      <div class="paymsg">
        <p>可缴费违章</p>
        <div class="illegalPayDtail">
          <h2>{{detail.SAREA}}</h2>
          <p>{{detail.SACT}}</p>
          <p>{{new Date(detail.DILLEGAL_DATE).toLocaleString().replace(/:\d{1,2}$/,' ')}}</p>
          <div class="illegalscore">
            <div class="block">
              <p>扣分</p>
              <span>{{detail.FEN}}</span>
            </div>
            <div class="block">
              <p>罚款</p>
              <span>{{detail.SMONEY}}</span>
            </div>
            <div class="block">
              <p>服务费</p>
              <span>{{detail.SERV_FEE}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="read">
        <img src="../../assets/images/illegal/illegal_01.png" alt="">
        我已阅读<span>《服务使用协议》</span>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'Illegal',
    data() {
      return {
        detail:[]
      };
    },
    created(){
      this.detail = JSON.parse(sessionStorage.getItem("illegalDetail"));
      console.log(this.detail)
      if(!this.detail){
        MessageBox.alert('无相关记录').then(action => {
          this.$store.commit('back')
      });
      }
    },
    methods: {

    }
  };
</script>
