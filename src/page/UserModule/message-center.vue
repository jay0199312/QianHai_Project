<template>
  <div class="message-center-page">

    <div class="page-header-main">
      <mt-header title="消息中心" class="my-order-head">
        <router-link to="myPage" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="" slot="right">
          <mt-button v-show="choose" v-on:click="delButtonShow">编辑</mt-button>
          <mt-button v-show="delButton" v-on:click="chooseShow">完成</mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="message-center-item" v-for="(item,index) in sysMsgSel">
      <div class="message-center-icon" :class="status[message_icon[index]]"></div>
      <div class="message-center-content">
        <div class="message-center-title">{{item.title}}</div>
        <div class="message-center-text">{{item.content}}</div>
      </div>

      <div class="message-center-time">{{messageTime[index]}}</div>
      <img src="../../assets/images/my-car-list/del.png" alt="" class="del-button" v-show="delButton" @click="delMessage(item)">
    </div>


  </div>
</template>

<style scoped>
  .message-center-page{
    width: 10rem;
  }
  .my-order-head{
    height: 1.2rem;background-color: #ffffff;font-size: 0.38rem;color: #4a4a4a;
  }
  .message-center-item{
    display: flex;position: relative;min-height: 3rem;width: 100%;align-items:center;background-color: #ffffff;border-top:1px solid #ebebeb ;border-bottom:1px solid #ebebeb ;
  }
  .message-center-icon{
    width: 1rem;height: 1rem;margin-right: 0.3rem;margin-left: 0.5rem;
  }
  .message-center-content{
    width: 7rem;
  }
  .message-center-title{
    font-size: 0.4rem;color: #000000;font-weight: bolder;height:0.8rem;line-height: 0.8rem;
  }
  .message-center-text{
    font-size: 0.3rem;color: #9a9a9a;width: 7rem;margin-bottom: 0.8rem;
  }
  .message-center-time{
    position: absolute;bottom: 0.2rem;right: 0.3rem;font-size: 0.24rem;color: #9a9a9a;z-index: 999;
  }
  .status1{
    background: url("../../assets/images/message-center/message-center-1.png") 0 0 no-repeat;background-size: 100%;
  }
  .status2{
    background: url("../../assets/images/message-center/message-center-2.png") 0 0 no-repeat;background-size: 100%;
  }
  .del-button{
    position: absolute;top: 1rem;right: 0.3rem;width: 0.7rem;z-index: 999;
  }
</style>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'message-center',
    data () {
      return {
        msg: '',

        sysMsgSel:[],
        messageTime:[],
        send_time:[],
        message_icon:[],
        status:['status1','status2'],
        delButton:false,
        choose:true,
        currentMessage:'',
      }
    },
    methods: {
      delButtonShow (){
        this.delButton =true;
        this.choose =false
      },
      chooseShow (){
        this.delButton =false;
        this.choose =true
      },
      delMessage (item){
        this.currentMessage = item;
        var type = item.type;
        MessageBox.confirm('是否删除此消息?').then(action => {
          var index = this.sysMsgSel.indexOf(this.currentMessage);
          this.sysMsgSel.splice(index,1);
          this.forLogo();
          var user_id = localStorage.getItem('user_id');
          var PHPheader = this.$store.state.ip + this.$store.state.location;
          var sysMsgDel = PHPheader +'api/sysMsgDel';
          var sys_msg_id = item.id;
          this.$http.post(sysMsgDel,{user_id:user_id,sys_msg_id:sys_msg_id,type:type},{emulateJSON:true}).then(function (response) {
            //处理成功的结果
            var msg = response.body;
            console.log('msg',msg)
          },function (response) {
            //处理失败的结果
            console.log('defind')
          })
      });
      },
      forLogo (){
        this.send_time = [];this.message_icon = [];
        for (var m =0;m<this.sysMsgSel.length;m++){
          this.send_time.push(this.sysMsgSel[m].create_time);//获取时间
          this.message_icon.push(this.sysMsgSel[m].type);

        }
        console.log('send_time',this.send_time);
        console.log('message_icon',this.message_icon);
        //时间戳处理
        for ( var t = 0;t < this.send_time.length; t++){
          function getLocalTime(nS) {
            return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
          }

          this.messageTime.push(getLocalTime(this.send_time[t]));

        }
        console.log('messageTime',this.messageTime)
      }
    },

    created (){
      //消息中心json
      var user_id = localStorage.getItem('user_id');
      var PHPheader = this.$store.state.ip + this.$store.state.location;
      var sysMsgSel = PHPheader + 'api/sysMsgSel';
      this.$http.post(sysMsgSel,{user_id:user_id},{emulateJSON:true}).then(
        function (response) {
          //处理成功的结果
          var message = response.body;
          this.sysMsgSel = message.sys_info;
          console.log('sysMsgSel',this.sysMsgSel);
          this.forLogo();

        },function (response) {
          //处理失败的结果
        });
    }

  }
</script>
