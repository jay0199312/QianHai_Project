<style scoped lang="scss">
  /* 弹窗 */
  .model{
    z-index: 2;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.8);
  .alertbox{
    width: 8rem;
    display:block;
    overflow:hidden;
    margin:auto;
    margin-top: 3rem;
    background: #fff;
    padding:.5rem;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    border-radius:0.25rem;
  .mytitle {
    margin-bottom: .3rem;
  img{
    margin:auto;
    display:block;
    height:0.5rem;
  }
  }
  .formbox{
  *{
    margin-bottom: 0.3rem;
  }
  input{
    width:100%;
    padding:0.3rem;
    font-size:16px;
    text-align: center;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    border-radius:0.125rem;
    background: #f6f8fa;
    border:1px solid #e8eaed;
    color: #000;
  }
  }
  .notice{
    color: #999;
    margin-bottom: .3rem;
  img{
    width: .5rem;
    vertical-align: middle;
  }
  }
  }
  .close{
    width: 1.3rem;
    display:block;
    margin:0.8rem auto;
  }
  }
</style>
<template>
  <div>
    <div class="model">
      <div class="alertbox">
        <div class="mytitle">
          <img src="../assets/images/goodsdetail/alertbox_01.png" alt="">
        </div>
        <div class="formbox">
          <input type="text" placeholder="称呼/联系人">
          <input type="text" placeholder="联系方式">
          <mt-button type="default" size="large"
                     @click.native="open('picker1')">选择预约时间</mt-button>
          <mt-button type="default" size="large">选择门店</mt-button>
        </div>
        <p class="notice">
          <img src="../assets/images/goodsdetail/alertbox_02.png" alt="">
          <lable>请留下正确的联系方式以便我们与您联系</lable>
        </p>
        <mt-button type="primary" size="large">提 交</mt-button>
      </div>
      <img @click="hide"
        src="../assets/images/goodsdetail/alertbox_03.png"
        class="close">
    </div>
    <mt-datetime-picker
      ref="picker1"
      v-model="value"
      @confirm="handleChange">
    </mt-datetime-picker>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'alert-box',
    props:['show'],
    data() {
      return {
        value: null,
        visible: false,
        isAtive: false
      };
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        alert('已选择 ' + value.toString())
      },
      hide() {
        this.show.isActive=false
      }
    }
  };
</script>
