<template>
<div class="my-page">

  <!----我的主页头部---->
  <div class="my-page-head">
    <div class="my-page-info"  @click="goMessageCenter">
      <span class="new-info"></span>
    </div>
    <div class="my-page-set" @click="goMySetting">设置</div>

    <!----头像logo---->
    <div class="my-page-logo">
        <img :src="logoImg" alt="" class="my-page-logo-img" @click="goMyLogin" v-if="logoImg">
        <img src="../../assets/images/my-page/user-pic.png" alt="" class="my-page-logo-img"
             @click="goMyLogin" v-if="!logoImg">
    </div>
    <div class="logo-name" @click="goMyLogin">{{nickname}}</div>
  </div>


  <!---订单板块---->
  <div class="my-order" >
    <div class="order-item" @click="orderItem1" >
      <img src="../../assets/images/my-page/my-page-5.png" alt="" >
      <div>新车订单</div>
    </div>
    <div class="order-item" @click="orderItem2" >
      <img src="../../assets/images/my-page/my-page-6.png" alt="">
      <div>车生活订单</div>
    </div>
    <div class="order-item" @click="orderItem3" >
      <img src="../../assets/images/my-page/my-page-7.png" alt="">
      <div>全部订单</div>
    </div>
    <img src="../../assets/images/my-page/my-page-12.png" alt="" style="height: 2.16rem;position: absolute;top: 0;right: 2.8rem">
  </div>

  <!----我的选项板块----->
  <div style="background-color: #ffffff;border: 1px solid #d9d9d9">
    <div class="my-item" @click="goMessageCenter" >
      <img src="../../assets/images/my-page/my-page-8.png" alt="" class="my-item-icon">
      <div style="color: #666">消息中心</div>
      <img src="../../assets/images/my-page/my-page-13.png" alt="" class="my-item-next">
    </div>
    <div class="my-item" @click="goMyReservation">
      <img src="../../assets/images/my-page/my-page-9.png" alt="" class="my-item-icon">
      <div style="color: #666">我的预约</div>
      <img src="../../assets/images/my-page/my-page-13.png" alt="" class="my-item-next">
    </div>
    <div class="my-item" @click="goMyCollection">
      <img src="../../assets/images/my-page/my-page-10.png" alt="" class="my-item-icon">
      <div style="color: #666">我的收藏</div>
      <img src="../../assets/images/my-page/my-page-13.png" alt="" class="my-item-next">
    </div>
    <div class="my-item" @click="goMyCar">
      <img src="../../assets/images/my-page/my-page-11.png" alt="" class="my-item-icon">
      <div style="color: #666">我的车辆</div>
      <img src="../../assets/images/my-page/my-page-13.png" alt="" class="my-item-next">
    </div>

  </div>

  <!----为您推荐---->

  <div class="recommend">
    <img src="../../assets/images/my-page/my-page-14.png" alt="">
    <div>为您推荐</div>
    <img src="../../assets/images/my-page/my-page-14.png" alt="">
  </div>

  <!----车品----->
  <div class="my-page-sell">
    <div class="my-page-sell-item" v-for="item in forYouRec.recommend" @click="goSecDetail(item.id)">
      <img :src="item.thumb" alt="" class="my-page-sell-item-img">
      <div style="position: absolute;top: 3.5rem;">

        <div class="my-page-sell-item-name">{{item.name}}</div>
        <div class="my-page-sell-item-price">¥<span>{{item.price}}</span>万</div>
      </div>

    </div>



  </div>



</div>
</template>

<style scoped>
  .my-page{
    background-color: #eeeded;width: 10rem;
  }
  .my-page-head{
    height:3.97rem;width: 10rem;background: url("../../assets/images/my-page/my-page-1.png") 0 0 no-repeat;background-size: 100%;-webkit-background-size: 100%;
    display: -webkit-flex; /* Safari */  display: flex;flex-direction: row-reverse;position: relative;
  }
  .my-page-info{
    width: 0.56rem;height: 0.56rem;background: url("../../assets/images/my-page/my-page-3.png") 0 0 no-repeat;background-size: 100%;-webkit-background-size: 100%;margin-right: 0.5rem;margin-top: 0.3rem;position: relative;
  }
  .new-info{
    width: 8px;height: 8px;background-color: #ffffff;border-radius: 5px;position: absolute;top: -5px;right: -5px;
  }

  .my-page-set{
    height: 0.56rem;width: 1.2rem;font-size: 0.5rem;color: #ffffff;margin-right: 0.5rem;margin-top: 0.3rem;
  }
  .my-page-logo{
    position: absolute;left: 0.8rem;top: 1rem;width: 2.23rem;height: 2.23rem;border-radius: 1.5rem;background-color: #ffffff;overflow: hidden;
  }
  .my-page-logo-img{
    width: 2.23rem;height: 2.23rem;
  }
  .logo-name{
    font-size: 0.45rem;color: #ffffff;font-weight: bolder;position: absolute;
    top:2rem;left: 3.5rem;
  }

  .my-order{
    color: #6e6e6e;font-size: 0.34rem;display: -webkit-flex; /* Safari */display: flex;justify-content: space-around;width: 10rem;height:2.16rem;background-color: #ffffff;position: relative;margin-bottom: 0.2rem;overflow: hidden;
  }
  .order-item{
    margin-top: 0.3rem;text-align: center;
  }
  .order-item img{
    height: 1rem;
  }
  .my-item{
    height: 1.11rem;display: -webkit-flex; /* Safari */display: flex;color: #272727;font-size: 0.4rem;align-items: center;font-weight: bolder;margin-left: 0.5rem;border-bottom: 1px solid #d9d9d9;
  }
  .my-item:last-child{
    border: none;
  }
  .my-item-icon{
    height: 0.7rem;margin-right: 0.2rem;
  }
  .my-item-next{
    height: 1.11rem;margin-left: 5.8rem;
  }
  .recommend{
    font-size: 0.34rem;color: #4d4d4d;display: -webkit-flex; /* Safari */display: flex;justify-content: center;align-items: center;margin: 0.4rem 0;
  }
  .recommend img{
    height: 1px;margin: 0 5px;
  }
  .my-page-sell{
    display: -webkit-flex; /* Safari */display: flex;justify-content: space-around;
  }
  .my-page-sell-item{
    width: 4.8rem;height: 5.4rem;background-color: #ffffff;position: relative;
  }
  .my-page-sell-item-img{
    width: 4.3rem;
  }
  .my-page-sell-item-name{
    color: #333333;font-size: 0.4rem;font-weight: bolder;text-overflow:ellipsis;width: 4rem;overflow: hidden;white-space:nowrap;margin-left: 0.2rem;
  }
  .my-page-sell-item-price{
    font-size: 0.3rem;color: #f20e01;margin-left: 0.2rem;
  }
  .my-page-sell-item-price span{
    font-size: 0.5rem;color: #f20e01;
  }

</style>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'my-page',
    data () {
      return {
        msg: '',
        selUserInfo:[],
        forYouRec:[],
        sysMsgSel:[],
        logoImg:'',
        nickname:'请先登录'
      }
    },
    created () {
      var PHPheader = this.$store.state.ip + this.$store.state.location;
      var selUserInfo = PHPheader + 'api/selUserInfo';
      var forYouRec = PHPheader + 'api/forYouRec';
      var sysMsgSel = PHPheader + 'api/sysMsgSel';
      var user_id = localStorage.getItem('user_id');
      console.log('user_id',user_id);

      //为您推荐json
      this.$http.get(forYouRec).then(
        function (response) {
          //处理成功的结果
          this.forYouRec = response.body;
          console.log('forYouRec',this.forYouRec);
        },function (response) {
          //处理失败的结果
        });

      if(user_id == null){
        console.log('no-login')
      }else {
        //个人设置json
        this.$http.post(selUserInfo,{user_id:user_id},{emulateJSON:true}).then(
          function (response) {
            // 处理成功的结果
            this.selUserInfo = response.body;
            console.log('selUserInfo',this.selUserInfo);
            this.logoImg = this.selUserInfo.user_info[0].head_img;
            localStorage.setItem('userImg',this.logoImg);
            this.nickname = this.selUserInfo.user_info[0].nickname;
          },function (response) {
            // 处理失败的结果
          });



        //消息中心json
        this.$http.post(sysMsgSel,{user_id:user_id},{emulateJSON:true}).then(
          function (response) {
            //处理成功的结果
            this.sysMsgSel = response.body;
            console.log('sysMsgSel',this.sysMsgSel);
          },function (response) {
            //处理失败的结果
          });
      }

    },
    methods: {
      goMessageCenter (){
        var user_id = localStorage.getItem('user_id');
        console.log('user_id',user_id);
        if(user_id == null){
          MessageBox.confirm('您还未登录，是否现在前往登录').then( action => {
            this.$router.push('myLogin')
          })
        }else {
          this.$router.push('/messageCenter')
        }

      },
      goMyReservation (){
        var user_id = localStorage.getItem('user_id');
        console.log('user_id',user_id);
        if(user_id == null){
          MessageBox.confirm('您还未登录，是否现在前往登录').then( action => {
            this.$router.push('myLogin')
          })
        }else {
          this.$router.push('/myReservation')
        }

      },
      goMyCollection (){
        var user_id = localStorage.getItem('user_id');
        console.log('user_id',user_id);
        if(user_id == null){
          MessageBox.confirm('您还未登录，是否现在前往登录').then( action => {
            this.$router.push('myLogin')
          })
        }else {
          this.$router.push('/myCollection')
        }

      },
      goMyCar (){
        var user_id = localStorage.getItem('user_id');
        console.log('user_id',user_id);
        if(user_id == null){
          MessageBox.confirm('您还未登录，是否现在前往登录').then( action => {
            this.$router.push('myLogin')
          })
        }else {
          this.$router.push('/myCar')
        }

      },
      goMyOrder (){
        var user_id = localStorage.getItem('user_id');
        console.log('user_id',user_id);
        if(user_id == null){
          MessageBox.confirm('您还未登录，是否现在前往登录').then( action => {
            this.$router.push('myLogin')
          })
        }else {
          this.$router.push('/myOrder')
        }

      },
      goMySetting (){
        var user_id = localStorage.getItem('user_id');
        console.log('user_id',user_id);
        if(user_id == null){
          MessageBox.confirm('您还未登录，是否现在前往登录').then( action => {
            this.$router.push('myLogin')
          })
        }else {
          this.$router.push('/mySetting')
        }

      },
      orderItem1 (){
        sessionStorage.setItem("selected", '1');
        this.goMyOrder()
      },
      orderItem2 (){
        sessionStorage.setItem("selected", '2');
        this.goMyOrder()
      },
      orderItem3 (){
        sessionStorage.setItem("selected", '3');
        this.goMyOrder()
      },
      goSecDetail(id){
        sessionStorage.setItem("GoodsDetail_ID",id);
        this.$router.push('/GoodsDetail');
        console.log(id)
      },
      goMyLogin (){
        var user_id = localStorage.getItem('user_id');
        console.log('user_id',user_id);
        if(user_id == null){
          MessageBox.confirm('您还未登录，是否现在前往登录').then( action => {
            this.$router.push('myLogin')
          })
        }else{
          console.log('yes-login')
        }

      }

    }
  }
</script>
