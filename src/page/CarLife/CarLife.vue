<style scoped lang="scss">
  .mint-swipe {
    height: 6rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 0px;
  }

  .mint-swipe-item {
    background: #fff;
    line-height: 6rem;
    img{
      max-width: 100%;
      max-height: 100%;
      height:6rem;
    }
  }
  .serveBlock{
    margin-top: 0.25rem;
    &:after{
      width: 0;
      height: 0;
      clear:both;
      content:'.';
      display:block;
      visibility:hidden;
    }
    img{
      display: inline-block;
      float: left;
    }
    .serveBlock-left{
      width:5rem;
    }
    .serveBlock-right1,.serveBlock-right2{
      width:5rem;
    }
  }
  .carblcok{
    width:100%;
    &:after{
      width: 0;
      height: 0;
      clear:both;
      content:'.';
      display:block;
      visibility:hidden;
    }
    img{
      display: inline-block;
      width:4.6rem;
      float: left;
      margin:0.25rem;
      &:last-child{
        margin-left: 0;
      }
    }
  }
  .mainBlock{
    background: #fff;
    padding:0.25rem;
    display:flex;
    display:-webkit-flex;
    width:100%;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    position:relative;
    .car-pic{
      width:3.0rem;
      height:2.0rem;
    }
    .detail{
      padding-left: 0.25rem;
      h2{
        font-size: 16px;
      }
      p{
        color:#666;
        line-height: .5rem;
        label{
          color:red;
        }
      }
    }
    .book{
      width:2.0rem;
      position:absolute;
      right: 0.3rem;
      top: 0.3rem;
      z-index: 12;
    }
  }

</style>
<template>
<div>
  <div class="page">
    <div class="page-swipe">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="(item,index) of carlife" :class="'slide'+(index+1)">
          <img :src="item.pic" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="serveBlock">
      <img src="../../assets/images/carlife/carlife_01.png"
           class="serveBlock-left" alt="" @click="goMaintain">
      <img src="../../assets/images/carlife/carlife_02.png"
           class="serveBlock-right1" alt="" @click="goSpray">
      <img src="../../assets/images/carlife/carlife_03.png"
           class="serveBlock-right2" alt="" @click="goIllegal">
    </div>
    <div class="carblcok">
      <img src="../../assets/images/carlife/carlife_04.png" alt=""
           @click="drive">
      <img src="../../assets/images/carlife/carlife_05.png" alt="">
    </div>
    <!--<div class="noticeblock">
      <titleBlock>
        温馨提示
      </titleBlock>
      <div class="mainBlock">
        <img src="http://121.40.78.200/pic/shop/article/98769753226215688556746.jpg" alt="" class="car-pic">
        <div class="detail">
          <h2>5000KM定期保养</h2>
          <p>粤B763438</p>
          <p><label for="">预约时间:</label>2016-10-18 16:50:00</p>
          <p><label for="">下单时间:</label>2016-10-18 16:50:00</p>
        </div>
        <img src="../../assets/images/carlife/carlife_06.png" alt="" class="book">
      </div>
    </div>-->

  </div>
</div>
</template>
<script type="text/babel">
  //购买流程
  import titleBlock from './../../components/blue-title-block.vue'
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'page-navbar',
    components: {
      titleBlock
    },
    data() {
      return {
        selected: '车生活',
        carlife:[]
      };
    },
    created(){
      let carlifelink=this.$store.state.ip + this.$store.state.location + "api/carlife_carousel";
      this.$http.get(carlifelink,{emulateJSON:true}).then(res=>{
        this.carlife = res.body.car_life_pic;
        console.log(res.body)
      },res=>{

      })
    },
    methods: {
      goIllegal(){
        let phone = localStorage.getItem('phone');
        if(phone){
          location.href='http://carnt.carnettong.com:8088/CARNT/ForQH/breakRule/breakindex.jsp?phone='+phone
        }else{
          MessageBox.confirm('您尚未登录,是否先登录?').then(action => {
            sessionStorage.setItem("returnLink","/CarLife");
            this.$router.push('/myLogin')
          });
        }
      },
      goMaintain(){//保养
        let phone = localStorage.getItem('phone');
        if(phone){
          location.href='http://carnt.carnettong.com:8088/CARNT/ForQH/maintain/choseCar.jsp?phone='+phone
        }else{
          MessageBox.confirm('您尚未登录,是否先登录?').then(action => {
            sessionStorage.setItem("returnLink","/CarLife");
            this.$router.push('/myLogin')
          });
        }
      },
      goSpray(){//钣喷
        let phone = localStorage.getItem('phone');
        if(phone){
          location.href='http://carnt.carnettong.com:8088/CARNT/ForQH/xmz-Spray/sprayIndex.jsp?phone='+phone
        }else{
          MessageBox.confirm('您尚未登录,是否先登录?').then(action => {
            sessionStorage.setItem("returnLink","/CarLife");
            this.$router.push('/myLogin')
          });
        }
      },
      drive(){//代驾
        location.href='http://h5.edaijia.cn/app/index.html?from=01051342'
      }
    }
  };
</script>
