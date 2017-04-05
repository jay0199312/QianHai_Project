<template>

  <div class="my-car-page">
    <div class="page-header-main">

      <mt-header title="我的车辆" class="my-car-head">
        <router-link to="myPage" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="" slot="right">
          <mt-button v-show="choose" v-on:click="delButtonShow">编辑</mt-button>
          <mt-button v-show="delButton" v-on:click="chooseShow">完成</mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="my-car-list-item" v-for="(item,index) in selMyCar.my_cars" >
      <img :src="item.thumb" alt="" class="my-car-img" @click="goMessageChange(item)">
      <div style="margin-right: 2.5rem" @click="goMessageChange(item)">
        <div class="car-number">{{item.vehicle}}</div>
        <div class="car-model">{{item.name}}</div>
      </div>
      <img src="../../assets/images/my-car-list/del.png" alt="" class="del-button" v-show="delButton" @click="delCar(item)">

    </div>
    <br>
    <br>
    <br>
    <br>
    <br>

    <div class="add-car" @click="goCarChoose">添加车辆</div>

  </div>

</template>

<style scoped>
  .my-car-page{
    background-color: #eaeaea;height: 17.78rem;width: 100%;
  }
  .my-car-head{
    background-color: #ffffff;height: 1.2rem;font-size: 0.38rem;border-bottom: 1px solid #ebebeb;color: #4a4a4a;
  }
  .my-car-list-item{
    display: -webkit-flex; /* Safari */
    display: flex;align-items: center;justify-content: space-between;height: 2rem;width: 100%;border-bottom: 1px solid #d9d9d9;background-color: #ffffff;position: relative;
  }
  .my-car-img{
    width: 1.5rem;margin-left: 0.6rem;
  }
  .car-number{
    color: #4d4d4d;font-size: 0.42rem;font-weight: 900;text-align: center;
  }
  .car-model{
    color: #939393;font-size: 0.34rem;margin-top: 0.1rem;width: 4.5rem;text-align: center;overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-icon{
    width: 0.83rem;margin-right: 0.3rem;
  }
  .del-button{
    position: absolute;top: 0.7rem;right: 0.6rem;width: 0.7rem;
  }
  .add-car{
    width: 90%;margin: auto;height: 1.12rem;background-color: #0554c3;font-size: 0.36rem;color: #ffffff;text-align: center;line-height: 1.12rem;position: fixed;bottom: 0.5rem;left: 5%;
  }

</style>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'my-car',
    data () {
      return {
        msg: '',
        carNumber:'粤123456',
        carModel:'汉兰达2013款精英版',
        selMyCar:[],
        delButton:false,
        choose:true,
        currentCar:'',

      }
    },

    methods :{
      goCarChoose (){
        this.$router.push('/myCarChoose')
      },
      goMessageChange (item){
        sessionStorage.setItem("carMessage",item);
        console.log('item',item);

        var engine_no = item.engine_no;
        sessionStorage.setItem("engine_no",engine_no);
        var frame_no = item.frame_no;
        sessionStorage.setItem("frame_no",frame_no);
        var carName = item.name;
        sessionStorage.setItem("carName",carName);
        var run_mileage = item.run_mileage;
        sessionStorage.setItem("run_mileage",run_mileage);
        var carThumb = item.thumb;
        sessionStorage.setItem("carThumb",carThumb);
        var vehicle =item.vehicle;
        sessionStorage.setItem("vehicle",vehicle);
        var car_id = item.id;
        sessionStorage.setItem("car_id",car_id);
        sessionStorage.setItem("change",'change');
        this.$router.push('/carMessageChange')
      },
      delButtonShow (){
        this.delButton =true;
        this.choose =false
      },
      chooseShow (){
        this.delButton =false;
        this.choose =true
      },
      delCar (item){
        this.currentCar = item;
        MessageBox.confirm('是否删除此车辆?').then(action => {
          var index = this.selMyCar.my_cars.indexOf(this.currentCar);
          this.selMyCar.my_cars.splice(index,1);
          var car_id = item.id;
          var user_id =localStorage.getItem('user_id');
          var PHPheader = this.$store.state.ip + this.$store.state.location;
          var myCarDel = PHPheader + 'api/myCarDel';
          this.$http.post(myCarDel,{user_id:user_id,car_id:car_id},{emulateJSON:true}).then(
            function (response) {
              //处理成功的结果
              var delCar =response.body;
              console.log('delCar',delCar)
          },function (response) {
              //处理失败的结果
            })
      });
      }


    },
    created (){
      sessionStorage.removeItem('change');
      sessionStorage.removeItem('changeCar');
      var user_id =localStorage.getItem('user_id');
      var PHPheader = this.$store.state.ip + this.$store.state.location;
      var selMyCar = PHPheader + 'api/myCarSel';
      this.$http.post(selMyCar,{user_id:user_id},{emulateJSON:true}).then(
        function (response) {
          //处理成功的结果
          this.selMyCar = response.body;
          console.log('selMyCar:',this.selMyCar)
        },function (response) {
          //处理失败的结果
        }

      )
    }
  }
</script>
