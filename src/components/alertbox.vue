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

  select {
    /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
    border: solid 1px #efefef;
    /*很关键：将默认的select选择框样式清除*/
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    /*在选择框的最右侧中间显示小箭头图片*/
    background: url("http://ourjs.github.io/static/2015/arrow.png") #f9f9f9 no-repeat scroll right .2rem center;
    text-align: center;
    color: #666;
    padding: .3rem;
    padding-left: 23%;
    width:100%;
    border-radius:5px;
    font-size:16px;
    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
    padding-right: 14px;
  }
  /*清除ie的默认选择框样式清除，隐藏下拉箭头*/
  select::-ms-expand { display: none; }
</style>
<template>
  <div>
    <div class="model">
      <div class="alertbox">
        <div class="mytitle">
          <img src="../assets/images/goodsdetail/alertbox_01.png" alt="">
        </div>
        <div class="formbox">
          <input type="text" placeholder="称呼/联系人" v-model="userName">
          <input type="number" placeholder="联系方式" v-model="userConnectinon">
          <mt-button type="default" size="large"
                     @click.native="open('picker1')">
            <span v-show="!dateSelected">选择预约时间</span>
            <span v-show="dateSelected">{{dateSelected}}</span>
          </mt-button>
          <select v-model="storeSelected">
            <option v-for="item of store" :vlaue="item">{{item}}</option>
          </select>
        </div>
        <p class="notice">
          <img src="../assets/images/goodsdetail/alertbox_02.png" alt="">
          <label>请留下正确的联系方式以便我们与您联系</label>
        </p>
        <mt-button type="primary" size="large" @click.native="submit">提 交</mt-button>
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
  import { Toast,Indicator } from 'mint-ui';
  export default {
    name: 'alert-box',
    props:['show',"goods_id","user_id"],
    data() {
      return {
        value: '2017-10-15 09:10',
        store:["广汽兆方4s测试店", "广汽深夜4s测试店", "广汽益达4s测试店", "广汽布吉4s测试店", "广汽4s测试店"],
        dateSelected:"",
        storeSelected:"广汽兆方4s测试店",
        userConnectinon:"",
        userName:"",
        dateValue:"",
        userMsg:[]
      };
    },
    created(){
      let nt  = Date.parse(new Date());
      this.value =new Date(parseInt(nt)).toLocaleString().substr(0,16);
    },
    methods:{
      open(picker){
        this.$refs[picker].open();
      },
      handleChange(value) {
        let nt  = Date.parse(new Date());
        if(value - nt > 0){
          let time = value.toLocaleString().replace(/:\d{1,2}$/,' ');
          console.log(time.toString());
          this.dateSelected = time.toString();
          this.dateValue =value.toString().substring(33,value.toString().Length-1);
          //console.log(value.Length-1);
        }else{
          Toast({
            message: '预订时间已过期',
            position: 'bottom'
          });
        }
      },
      onStoreChange(picker, values) {
        this.storeSelected = values[0];
      },
      hide() {
        this.show.isActive=false
      },
      submit(){
        if (this.userName && this.userConnectinon && this.dateValue && this.storeSelected) {
          console.log(this.dateValue)
          if (!this.user_id) this.user_id = "";
          let postdata = {
            goods_id: this.goods_id,
            booker: this.userName,
            telephone: this.userConnectinon,
            book_time: this.dateValue,
            store: this.storeSelected,
            user_id:this.user_id
          };
          let postUserMsg = this.$store.state.ip + this.$store.state.location + "api/preBookCarAdd";
          this.$http.post(postUserMsg, postdata, {emulateJSON: true})
            .then(response => {
              switch(response.body.status_code)
              {
                case "1":
                  Toast({
                    message: '预定成功!',
                    position: 'bottom'
                  });
                  this.hide();
                  console.log(response.body.status_code)
                  break;
                case "3":
                  Toast({
                    message: '您已预定过该车辆',
                    position: 'bottom'
                  });
                  console.log(response.body.status_code)
                  break;
                default:
                  Toast({
                    message: '添加失败',
                    position: 'bottom'
                  });
                  console.log(response.body.status_code)
              }


            }, response => {
            })
        }else{
          Toast({
            message: '请先完善预定信息',
            position: 'bottom'
          });
        }
      }
    }
  };
</script>
