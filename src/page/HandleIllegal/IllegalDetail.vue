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
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="cellbox">
        <div class="cell"><label for="">违章地点:</label><span>珠海沿江高速</span></div>
        <div class="cell"><label for="">违章内容:</label><span>驾驶中型以上载客汽车危险行驶</span></div>
        <div class="cell"><label for="">违章时间:</label><span>2016-16-15 18:00:50</span></div>
        <div class="cell"><label for="">扣分情况:</label><span>3分</span></div>
        <div class="cell"><label for="">罚款金额:</label><span>150元</span></div>
        <div class="cell"><label for="">违章状态:</label><span>未处理</span></div>
        <div class="cell"><label for="">代办缴费:</label><span>可处理</span></div>
      </div>
      <div class="notes">全部违章数据来自个地方交管局网站</div>
      <div class="gopay">
        <mt-button type="primary" size="large">立即缴费</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'IllegalDetail',
    components: {

    },
    data() {
      return {

      };
    },
    mounted(){

    },
    methods: {

    }
  };
</script>
