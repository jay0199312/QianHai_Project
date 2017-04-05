<template>

  <div class="reservation-page">
    <alertBox :show="givedata" :goods_id="good_id" :user_id="user_id" v-show="givedata.isActive"></alertBox>
    <div class="page-header-main">

      <mt-header title="我的预约" class="reservation-head">
        <router-link to="myPage" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="" slot="right">
          <mt-button v-show="choose" v-on:click="delButtonShow">编辑</mt-button>
          <mt-button v-show="delButton" v-on:click="chooseShow">完成</mt-button>
        </router-link>
      </mt-header>
    </div>

      <div class="reservation-item" v-for="(item, index) in preBookCarSel.pre_book_cars">

        <div class="reservation-item-head">
          <div class="reservation-item-box">
            <img src="../../assets/images/my-reservation/my-reservation-1.png" alt="" class="user-logo">
            <div class="user-name">{{item.booker}}</div>
          </div>

          <div class="reservation-logo" :class="status[reservationLogo[index]]"></div>

        </div>
        <div class="reservation-item-content">
          <img src="../../assets/images/my-car-list/del.png" alt="" class="del-button" v-show="delButton" @click="delMessage(item)">
          <img :src="item.thumb" alt="" class="shop-img">
          <div style="margin-left: 0.3rem">
            <div class="car-name">{{item.name}}</div>
            <div class="reservation-time">预约时间:{{bookTime[index]}}</div>

          </div>
        </div>
        <div class="reservation-item-button" >
          <div class="change-reservation" @click="bookDrive(item)" :class="showButton[reservationLogo[index]]">更改预约</div>
          <div class="cancel-reservation" @click="delReservation(item)" :class="showButton[reservationLogo[index]]">取消预约</div>

          <a href="tel:0755-26899888" class="contact-button">联系</a>
        </div>

      </div>




  </div>

</template>

<style scoped>
  .reservation-page{
    background-color: #ebebeb;width: 10rem;
  }
  .reservation-item{
    width: 100%;
  }
  .reservation-head{
    background-color: #ffffff;height: 1.2rem;font-size: 0.38rem;border-bottom: 1px solid #ebebeb;color: #4a4a4a;width: 100%;
  }
  .reservation-item-box{
    display: flex;align-items:center;
  }
  .reservation-item-head{
    display: -webkit-flex; /* Safari */
    display: flex;height: 1.2rem;justify-content:space-between;align-items:center;background-color: #ffffff;margin-top: 0.2rem;width: 100%;
  }
  .reservation-item-content{
    display: -webkit-flex; /* Safari */
    display: flex;height: 2.56rem;background-color: #f5f5f5;align-items:center;width: 100%;position: relative;
  }
  .reservation-item-button{
    display: -webkit-flex; /* Safari */
    display: flex;height: 1.1rem;border-top: 1px solid #d6d4d4;border-bottom: 1px solid #d6d4d4; flex-direction:row-reverse;align-items: center;font-size: 0.37rem;background-color: #ffffff;width: 100%;
  }
  .user-logo{
    height: 0.64rem;margin-left: 0.3rem;
  }
  .user-name{
    font-size: 0.4rem;color: #565656;margin-left: 0.3rem;font-weight: bolder;
  }
  .reservation-logo{
    height: 1rem;margin-right: 0.3rem;width: 1rem;
  }
  .reservation-time{
    font-size: 0.34rem;color: #9b9a9a;width: 5.5rem;
    margin-top:0.5rem;
  }
  .car-name{
    font-size: 0.34rem;color: #000000;width: 5.5rem;display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  }

  .change-reservation{
    color: #ffffff;text-align: center;background-color: #0554c3;height: 100%;width: 2.4rem;line-height: 1.1rem;
  }
  .cancel-reservation{
    color: #0554c3;text-align: center;background-color: #ffffff;height: 100%;width: 2.4rem;line-height: 1.1rem;border-left: 1px solid #d6d4d4;
  }
  .contact-button{
    color: #0554c3;text-align: center;background-color: #ffffff;height: 100%;width: 2.4rem;line-height: 1.1rem;border-left: 1px solid #d6d4d4;
  }
  .shop-img{
    width: 2.5rem;margin-left: 0.3rem;
  }
  .del-button{
    position: absolute;top: 1rem;right: 0.3rem;width: 0.7rem;z-index: 999;
  }
  .status1{
    background: url("../../assets/images/my-reservation/my-reservation-2.png") no-repeat;background-size: 100%;
  }
  .status2{
    background: url("../../assets/images/my-reservation/my-reservation-3.png") no-repeat;background-size: 100%;
  }
  .status3{
    background: url("../../assets/images/my-reservation/my-reservation-4.png") no-repeat;background-size: 100%;
  }
  .showButton1{
    display: block;
  }
  .showButton2{
    display: none;
  }
  .showButton3{
    display: none;
  }

</style>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  import alertBox from './reservation-alertBox.vue'//弹窗
  export default {
    name: 'my-reservation',
    components: {
      alertBox
    },
    data () {
      return {
        user_id:'',
        msg: '',
        userName:'黄继定',
        carName:'宝安2016款 1.5T 手动运动版',
        reservationTime:[],
        reservationLogo:[],
        status:['status1','status2','status3'],
        preBookCarSel:[],
        bookTime:[],
        changeReservation:[],
        cancelReservation:[],
        contactButton:[],
        curReservation:'',
        givedata:{isActive:false},
        good_id:"",
        showButton:['showButton1','showButton2','showButton3'],
        delButton:false,
        choose:true,
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
      delReservation(item) {
        this.curReservation = item;

        MessageBox.confirm('是否取消此预约?').then( action => {
          var index = this.preBookCarSel.pre_book_cars.indexOf(this.curReservation);
          this.preBookCarSel.pre_book_cars.splice(index,1);
          this.forLogo();
          var user_id = localStorage.getItem('user_id');
          var PHPheader = this.$store.state.ip + this.$store.state.location;
          var preBookCarCancel = PHPheader +'api/preBookCarCancel';
          var goods_id = item.goods_id;
          this.$http.post(preBookCarCancel,{user_id:user_id,goods_id:goods_id},{emulateJSON:true}).then(function (response) {
            //处理成功的结果
            var msg = response.body;
            console.log('msg',msg)
          },function (response) {
            //处理失败的结果
            console.log('defind')
          })

      });
      },
      delMessage (item){
        this.curReservation = item;
        MessageBox.confirm('是否删除此预约?').then(action => {
          var index = this.preBookCarSel.pre_book_cars.indexOf(this.curReservation);
          this.preBookCarSel.pre_book_cars.splice(index,1);
          this.forLogo();
          var user_id = localStorage.getItem('user_id');
          var PHPheader = this.$store.state.ip + this.$store.state.location;
          var preBookCarDel = PHPheader +'api/preBookCarDel';
          var goods_id = item.goods_id;
          console.log(goods_id);
          console.log(user_id);
          this.$http.post(preBookCarDel,{user_id:user_id,goods_id:goods_id},{emulateJSON:true}).then(function (response) {
            //处理成功的结果
            var msg = response.body;
            console.log('msg',msg)
          },function (response) {
            //处理失败的结果
            console.log('defind')
          })
        });
      },
      callNumber (){
        MessageBox.confirm('是否拨打客户电话?').then( action => {

        })
      },
      bookDrive(item){

        this.good_id = item.goods_id;
        this.givedata.isActive=true
      },
      forLogo (){
        this.reservationTime =[];this.reservationLogo = [];
        for (var i =0 ; i < this.preBookCarSel.pre_book_cars.length;i++){
          this.reservationTime.push(this.preBookCarSel.pre_book_cars[i].book_time);//获取预约时间
          this.reservationLogo.push(this.preBookCarSel.pre_book_cars[i].status-1);//获取预约状态
        }
        console.log('reservationLogo:',this.reservationLogo);
        console.log('reservationTime:',this.reservationTime);


        //预约时间处理
        for ( var t = 0;t < this.reservationTime.length; t++){
          function getLocalTime(nS) {
            return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
          }

          this.bookTime.push(getLocalTime(this.reservationTime[t]));

        }
        console.log(this.bookTime)
      }
    },

    created (){
      var PHPheader = this.$store.state.ip + this.$store.state.location;
      var preBookCarSel = PHPheader + 'api/preBookCarSel';
      var user_id = localStorage.getItem('user_id');
      this.user_id = localStorage.getItem('user_id');
      console.log(user_id);
      //我的预约查询json
      this.$http.post(preBookCarSel,{user_id:user_id},{emulateJSON:true}).then(
        function (response) {
          //处理成功的结果
          this.preBookCarSel = response.body;
          console.log('preBookCarSel:',this.preBookCarSel);
          this.forLogo();




        },function (response) {
         //处理失败的结果
        }
      )





    }

  }
</script>
