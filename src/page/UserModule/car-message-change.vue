<template>
  <div class="car-message-page">

    <div class="alert-box" v-show="alert"  @click="alertHidden">
      <img src="../../assets/images/my-page/car-message-2.png" alt="" class="alert-img">
    </div>

    <div class="page-header-main">

      <mt-header title="车辆信息" class="car-message-head">
        <router-link to="myCar" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="" slot="right">
          <mt-button v-on:click="postValue">保存</mt-button>
        </router-link>

      </mt-header>

    </div>
    <div class="car-message-item"  >
      <img :src="carIMG" alt="" class="car-message-img">
      <div class="car-message-text" @click="goCarChoose">

        <div class="car-message-model">{{carName}}</div>
      </div>
      <img src="../../assets/images/my-car-list/car-message-next.png" alt="" class="car-message-next">
    </div>


    <div class="car-message-item">
      <div class="item-box">
        <div class="area-box" @click="pickerShow">{{area}}</div>
        <input type="text" placeholder="填写车牌号" id="carNumber" :value="vehicle">
        <div class="input-text">车牌号</div>
      </div>
      <div class="item-box2">
        <input type="text" placeholder="填写行驶里程" id="carRun" :value="run_mileage">
        <div class="input-text">行驶里程</div>
      </div>
    </div>
    <div class="car-message-border">
      <div class="message-border"></div>
      <div class="border-text">爱车保养需要完善如上信息</div>
      <div class="message-border"></div>
    </div>

    <div class="car-message-item">
      <div class="item-box">
        <input type="text" placeholder="填写发动机号" id="engine" :value="engine_no">
        <div class="input-text">发动机号</div>
        <img src="../../assets/images/my-page/car-message-1.png" alt="" class="alert-button" @click="alertShow">
      </div>
      <div class="item-box2">
        <input type="text" placeholder="填写车架号"  id="frame" :value="frame_no">
        <div class="input-text">车架号</div>
        <img src="../../assets/images/my-page/car-message-1.png" alt="" class="alert-button" @click="alertShow">
      </div>

    </div>
    <div class="car-message-border">
      <div class="message-border"></div>
      <div class="border-text">违章查询需要完善如上信息</div>
      <div class="message-border"></div>
    </div>


    <div class="message-button">
      <div class="upkeep-button">
        <img src="../../assets/images/my-car-list/car-message-2.png" alt="">
        <div>去保养</div>
      </div>
      <div class="inquiry-button">
        <img src="../../assets/images/my-car-list/car-message-3.png" alt="">
        <div>查违章</div>
      </div>
    </div>

    <div class="picker-box" v-show="picker">
      <div class="picker-bar">
        <div class="picker-button" @click="pickerHidden">保存</div>
      </div>
      <div class="page-picker-wrapper">
        <mt-picker :slots="areaSlot" @change="onYearChange" :visible-item-count="5" :itemHeight="50"></mt-picker>
      </div>


    </div>

  </div>
</template>

<style scoped>
  .car-message-page{
    width: 10rem;background-color: #ededed;height: 17.78rem;
  }
  .car-message-head{
    background-color: #ededed;height: 1.2rem;font-size: 0.38rem;color: #6d6e6f;
  }
  .car-message-item{
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: space-between;height: 1.8rem;width: 100%;font-size: 0.4rem;background-color: #ffffff;border-bottom: 1px solid #d9d9d9;border-top: 1px solid #d9d9d9;margin-bottom: 0.16rem;
  }
  .car-message-img{
    width: 1.25rem;margin-left: 0.4rem;
  }
  .car-message-text{
    height: 1rem;border-left: 1px solid #d9d9d9;padding-left: 0.5rem;
  }
  .car-message-number{
    font-weight:bolder;color: #4d4d4d;
  }
  .car-message-model{
    color: #939393;margin-top: 0.3rem;font-size: 0.35rem;width: 6.5rem;overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .car-message-next{
    width: 0.3rem;margin-right: 0.4rem;
  }
  .car-message-border{
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content:center;font-size: 0.2rem;color: #939393;margin-bottom: 0.16rem;
  }
  .message-border{
    border-top: 1px solid #d9d9d9;width: 1.4rem;margin: 0 0.2rem;
  }
  .input-text{
    font-size: 0.3rem;color: #939393;margin-top: 0.3rem;
  }
  .area-box{
    width: 0.62rem;height: 0.53rem;background-color: #ebebeb;border-radius: 3px;border: 1px solid #bbbabb;text-align: center;font-weight:bolder;color: #4d4d4d;position: absolute;top: 0;left: 0;line-height: 0.55rem;
  }
  .item-box{
    width: 4.3rem;margin-left: 0.5rem;text-align: center;position: relative;
  }
  .item-box2{
    width:4.3rem;padding-left: 0.3rem;border-left: 1px solid #d9d9d9;margin-right: 0.5rem;text-align: center;position: relative;
  }
  .alert-box{
    position: fixed;background-color:rgba(0,0,0,0.5);width: 100%;height: 17.8rem;z-index: 999;
  }
  .alert-img{
    width: 100%;position: absolute;
    top:4rem;
  }
  .alert-button{
    width: 0.5rem;position: absolute;top: 0.75rem;right: 0.75rem;
  }
  .message-button{
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: space-around;width: 100%;height: 1.8rem;background-color: #ffffff;font-size: 0.37rem;color: #9c9c9c;position: fixed;bottom: 0;
  }
  .message-button img{
    width: 0.7rem;margin-right: 0.2rem;
  }
  .upkeep-button{
    height: 70%;display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: center;width: 4.9rem;
  }
  .inquiry-button{
    height: 70%;display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: center;width: 4.9rem;border-left: 1px solid #d9d9d9;
  }
  .border-text{
    margin: 0.2rem 0;
  }
  .picker-box{
    background-color: #fff;width: 100%;position: fixed;bottom: 0;
  }
  .picker-bar{
    width: 100%;height: 1rem;background-color: #d9d9d9;position: relative;
  }
  .picker-button{
    width: 1.5rem;font-size: 0.4rem;height: 0.7rem;line-height: 0.7rem;text-align: center;background-color: #007aff;border-radius: 5px;color: #f5f5f5;position: absolute;right: 0.3rem;top: 0.15rem;
  }



  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #4d4d4d; opacity:1;font-size: 0.38rem;font-weight: bolder;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #4d4d4d;opacity:1;font-size: 0.38rem;
  }

  input:-ms-input-placeholder{
    color: #4d4d4d;opacity:1;font-size: 0.38rem;
  }

  input::-webkit-input-placeholder{
    color: #4d4d4d;opacity:1;font-size: 0.38rem;
  }
  input{
    color: #000;opacity:1;font-size: 0.38rem;width: 4rem;height: 0.5rem;border-radius: 5px;text-align: center;border: 1px solid #cdcdcd;
  }

</style>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  import { Actionsheet } from 'mint-ui';
  import { Picker } from 'mint-ui';
  export default {

    name: 'my-reservation',
    data () {
      return {
        msg: '',
        myCarAdd:[],
        carIMG:'',
        carName:'',
        carID:'',
        area: '粤',
        number: 0,
        picker:false,
        areaSlot: [{
          flex: 1,
          values: ['粤','京','津','沪','渝','蒙','新','藏','宁','桂','港','澳','黑','吉','辽','晋','冀','青','鲁','豫','苏','皖','浙','闽','赣','湘','鄂','琼','甘','陕','黔','云','川'],
          className: 'slot1'
        }],
        alert:false,
        getValue:{
          user_id:'',
          vehicle:'',
          run_mileage:'',
          engine_no:'',
          frame_no:'',
          name:'',
          car_id:''
        },
        engine_no :'',
        frame_no :'',
        run_mileage :'',
        vehicle :'',

      }
    },
    methods:{
      postValue (){
        var carNumber = document.getElementById('carNumber').value;
        carNumber =carNumber.toUpperCase();
        console.log('carNumber',carNumber);
        var re=/^[A-Z]{1}[A-Z_0-9]{2,10}$/;
        if(carNumber.search(re)==-1)
        {
          MessageBox.alert('车牌号码输入有误').then(action => {

          })
        }else {
          var carRun = document.getElementById('carRun').value;
          console.log('carRun',carRun);
          var run =/^[0-9]{1,10}$/;
          if(carRun.search(run)==-1){
            MessageBox.alert('里程数输入有误').then(action => {

            })
          }else {
            var engine = document.getElementById('engine').value;
            console.log('engine',engine);
            var e = /^[0-9a-zA-Z]{1,20}$/;
            if(engine.search(e)==-1){
              MessageBox.alert('发动机号输入有误').then(action => {

              })
            }else {
              var frame = document.getElementById('frame').value;
              console.log('frame',frame)
              var f = /^[0-9a-zA-Z]{1,20}$/;
              if(frame.search(f)==-1){
                MessageBox.alert('车架号输入有误').then(action => {

                })
              }else {
                this.getValue.vehicle = this.area + carNumber;
                console.log('vehicle',this.getValue.vehicle);
                this.getValue.run_mileage = carRun;
                this.getValue.engine_no = engine;
                this.getValue.frame_no = frame;

                var PHPheader = this.$store.state.ip + this.$store.state.location;
                var myCarSave = PHPheader +'api/myCarSave';
                this.$http.post(myCarSave,this.getValue,{emulateJSON:true}).then(
                  function (response) {
                    //处理成功的结果
                    this.myCarSave = response.body;
                    console.log('myCarSave:',this.myCarSave);
                    if (this.myCarSave.status_code =='3'){
                      MessageBox.alert('没有做任何修改').then(action => {
                        sessionStorage.removeItem('change');
                        sessionStorage.removeItem('changeCar');
                        this.$router.push('/myCar')
                      })
                    }if(this.myCarSave.status_code =='1') {
                      MessageBox.alert('修改车辆信息成功！').then(action => {
                        sessionStorage.removeItem('change');
                        sessionStorage.removeItem('changeCar');
                        this.$router.push('/myCar')
                      })
                    }
                  },function (response) {
                    //处理失败的结果
                  })


              }
            }
          }
        }

        /*var PHPheader = this.$store.state.qhcarmall;
         var myCarAdd = PHPheader + '/myCarAdd';
         this.$http.post(myCarAdd,{user_id:"2252"},{emulateJSON:true}).then(
         function (response) {
         //处理成功的结果
         this.myCarAdd = response.body;
         console.log('myCarAdd:',this.myCarAdd)
         }

         )*/
      },
      goCarChoose (){
        sessionStorage.setItem('change','change');
        sessionStorage.removeItem('changeCar');
        this.$router.push('/myCarChoose')
      },
      onYearChange(picker, values) {
        this.area = values[0];
      },
      pickerShow (){
        this.picker =true
      },
      pickerHidden (){
        this.picker =false
      },
      alertShow (){
        this.alert = true
      },
      alertHidden (){
        this.alert = false
      }


    },
    created (){

      this.getValue.user_id = localStorage.getItem('user_id');
      this.engine_no =sessionStorage.getItem("engine_no");
      this.frame_no = sessionStorage.getItem("frame_no");
      this.run_mileage = sessionStorage.getItem("run_mileage");
      var v = sessionStorage.getItem("vehicle");
      v = v.substr(1,v.length);
      this.vehicle = v;

      var change =sessionStorage.getItem('change');
      var changeCar = sessionStorage.getItem('changeCar');
      if(change=='change'){
        this.getValue.car_id = sessionStorage.getItem("car_id");

        this.carIMG = sessionStorage.getItem("carThumb");
        this.getValue.name = this.carName = sessionStorage.getItem("carName");


      }
      if(change =='change' && changeCar=='changeCar'){
        this.getValue.car_id = sessionStorage.getItem("car_id");
        this.carID=sessionStorage.getItem("GoodsDetail_ID");
        var bid = sessionStorage.getItem("brand_id");
        console.log('carID',this.carID);
        console.log('bid',bid);
        var brandList = this.$store.state.ip + this.$store.state.location + "api/brandList";
        this.$http.post(brandList,{brand_id:bid},{emulateJSON:true}) //{emulateJSON:true}取数据时候必须传给后台
          .then(response => {
            var brandList = response.body;
            this.carIMG = brandList.brand.brand_thumb;
            console.log('carIMG',this.carIMG)

          }, response => {
            // error callback
          });

        var seckGoodsDetail = this.$store.state.ip + this.$store.state.location + "api/seckGoodsDetail";
        this.$http.post(seckGoodsDetail,{goods_id:this.carID},{emulateJSON:true}) //{emulateJSON:true}取数据时候必须传给后台
          .then(response => {
            var seckGoodsDetail = response.body;
            this.getValue.name = this.carName = seckGoodsDetail.goods.name;
            console.log('carName',this.carName)

          }, response => {
            // error callback
          });
      }




    }
  }
</script>

