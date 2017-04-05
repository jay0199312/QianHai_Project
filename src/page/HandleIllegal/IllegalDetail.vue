<style scoped lang="scss">
  .cellbox{
    padding-left:.25rem;
    background: #fff;
    .cell{
      font-size:14px;
      padding: .3rem 0;
      border-bottom:1px solid #efefef;
      span{
        color: #1182fd;
      }
    }
  }
  .notes{
    color: #999;
    padding:.4rem;
    text-align: center;
  }
  .gopay{
    margin: 0 .5rem;
  }
</style>
<template>
  <div>
    <div class="page">
      <mt-header title="违章详情">
        <mt-button icon="back" slot="left" @click.native="$store.commit('back')"></mt-button>
      </mt-header>
      <div class="cellbox">
        <div class="cell"><label for="">违章地点:</label><span>{{detail.SAREA}}</span></div>
        <div class="cell"><label for="">违章内容:</label><span>{{detail.SACT}}</span></div>
        <div class="cell"><label for="">违章时间:</label><span>{{new Date(detail.DILLEGAL_DATE).toLocaleString().replace(/:\d{1,2}$/,' ')}}</span></div>
        <div class="cell"><label for="">扣分情况:</label><span>{{detail.FEN}}分</span></div>
        <div class="cell"><label for="">罚款金额:</label><span>{{detail.SMONEY}}元</span></div>
        <div class="cell"><label for="">违章状态:</label><span>{{detail.HANDLED?'已处理':'未处理'}}</span></div>
        <div class="cell"><label for="">代办缴费:</label><span>{{detail.DEAL_FLAG?'可处理':'不可处理'}}</span></div>
      </div>
      <div class="notes">全部违章数据来自个地方交管局网站</div>
      <div class="gopay">
        <mt-button type="primary" size="large" v-if="detail.DEAL_FLAG" @click.native="payNow">立即缴费</mt-button>
        <mt-button type="primary" size="large" disabled v-else>立即缴费</mt-button>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'IllegalDetail',
    data() {
      return {
        detail:[]
      };
    },
    created(){
      this.detail = JSON.parse(sessionStorage.getItem("illegalDetail"));
      if(!this.detail){
        MessageBox.alert('无相关记录').then(action => {
          this.$store.commit('back')
        });
      }
    },
    methods: {
      payNow(){
        this.$router.push('/IllegalPayComfirm')
      }
    }
  };
</script>
