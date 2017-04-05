<template>




  <div class="setting-page">

    <div class="alert-box" v-show="alert" @click="closePhoto">
      <img :src="head_img" alt="" class="alert-img">
    </div>

    <div>
      <div class="page-header-main">

        <mt-header title="设置" class="setting-head">
          <router-link to="myPage" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <router-link to="mySetting" slot="right" v-on:click="postValue">
            <mt-button v-on:click="postValue">保存</mt-button >
          </router-link>

        </mt-header>

      </div>

    </div>
    <div class="page-actionsheet">

      <div class="page-actionsheet-wrapper">

      </div>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></mt-actionsheet>
      <mt-actionsheet :actions="actions3" v-model="sheetVisible3" cancel-text=""></mt-actionsheet>
      <mt-actionsheet :actions="actions4" v-model="sheetVisible4" cancel-text=""></mt-actionsheet>
    </div>

    <mt-button @click.native="sheetVisible = true" class="setting-logo" >
      <div  class="setting-box">
        <h1 class="setting-title">头像</h1>
        <div class="logo-img-box">
          <img :src="head_img" alt="" class="logo-img">
        </div>
        <img src="../../assets/images/my-setting/setting-img2.png" alt="" class="next-button">
      </div>

    </mt-button>
    <mt-button @click.native="sheetVisible2 = true" class="setting-item">
      <div class="setting-box">
        <div class="setting-title">昵称</div>
        <div class="setting-text">{{getValue.nickname}}</div>
        <img src="../../assets/images/my-setting/setting-img2.png" alt="" class="next-button">

      </div>

    </mt-button>
    <mt-button @click.native="sheetVisible3 = true" class="setting-item">
      <div class="setting-box">
        <div class="setting-title">性别</div>
        <div class="setting-text" id="sex">{{getValue.sex}}</div>
        <img src="../../assets/images/my-setting/setting-img2.png" alt="" class="next-button">

      </div>


    </mt-button>

    <mt-button @click.native="sheetVisible4 = true" class="setting-item">
      <div class="setting-box">
        <div class="setting-title">年龄</div>
        <div class="setting-text">{{getValue.age}}</div>
        <img src="../../assets/images/my-setting/setting-img2.png" alt="" class="next-button">

      </div>

    </mt-button>
    <mt-button class="setting-item" @click="goChangeKey">
      <div class="setting-box">
        <div class="setting-title">修改密码</div>
        <div class="setting-text"></div>
        <img src="../../assets/images/my-setting/setting-img2.png" alt="" class="next-button">

      </div>

    </mt-button>

    <div style="width: 100%;height: 0.27rem;background-color: #ebebeb">
    </div>

    <mt-button class="setting-item" @click="goFeedBack">
      <div class="setting-box">
        <div class="setting-title">意见反馈</div>
        <div class="setting-text"></div>
        <img src="../../assets/images/my-setting/setting-img2.png" alt="" class="next-button">
      </div>

    </mt-button>
    <mt-button class="setting-item">
      <div class="setting-box">
        <div class="setting-title">关于前海湾</div>
        <div class="setting-text"></div>
        <img src="../../assets/images/my-setting/setting-img2.png" alt="" class="next-button">
      </div>

    </mt-button>

    <mt-button @click.native="openConfirm" size="large" class="quit-button"><div class="quit-button-text">退出登录</div></mt-button>

  </div>

</template>

<style scoped>

  .setting-page{
    width: 10rem;height: 17.78rem;background-color: #ebebeb;
  }
  .setting-head{
    background-color: #ffffff;height: 1.2rem;font-size: 0.38rem;border-bottom: 1px solid #ebebeb;color: #4a4a4a;
  }
  .setting-logo{
    height: 2rem;justify-content:space-between;align-items:center;border-bottom: 1px solid #ebebeb;background-color: #ffffff;width: 100%;
  }
  .setting-item{
    height: 1.2rem;justify-content:space-between;align-items:center;background-color: #ffffff;width: 100%;position: relative;border-bottom: 1px solid #ebebeb;border-radius: 0;
  }
  .setting-box{
    display: flex;justify-content: space-between;align-items:center ;width: 100%;
  }
  .setting-title{
    font-size: 0.37rem;color: #505151;width: 2rem;text-align: justify;
  }
  .logo-img-box{
    height: 1.3rem;width: 1.3rem;margin-left: 5rem;border-radius: 1.3rem;overflow: hidden;
  }
  .logo-img{
    height: 1.3rem;width: 1.3rem;
  }
  .next-button{
    width: 0.31rem;
  }
  .setting-text{
    font-size: 0.37rem;color: #969899;width: 3.3rem;text-align: right;margin-left: 3rem;
  }
  .quit-button{
    width: 8.88rem;margin: auto;color: #ffffff;background-color: #0554c3;border-radius: 5px;height: 1.11rem;font-size: 0.36rem;margin-top: 0.4rem;text-align: center;line-height: 1.11rem;font-weight: bold;
  }
  .quit-button-text{
    text-align: center;width: 100%;font-size: 0.4rem;
  }
  .alert-box{
    width: 100%;height: 17.78rem; background:rgba(0,0,0,0.3);position: fixed;z-index: 99999;
  }
  .alert-img{
    width: 90%;margin-left: 5%;margin-top: 3rem;
  }

  .setting-page .mint-button .mint-button-text{
    display: -webkit-flex; /* Safari */
    display: flex;justify-content: space-between;align-items:center ;width: 100%;border-radius: 0;
    text-align: center;
  }
</style>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  import { Actionsheet } from 'mint-ui';


  export default {
    name:'my-setting',
    components:{

    },
    data() {

      return {
        alert:false,
        sheetVisible: false,
        sheetVisible2: false,
        sheetVisible3: false,
        sheetVisible4: false,
        actions: [],
        actions2: [],
        actions3: [],
        actions4: [],
        sex:[],


        selUserInfo:[],
        user_id:'',
        head_img:'',
        getValue:{

          user_id:'',
          nickname:'',
          age:'',
          sex:''
        },
      };
    },
    methods: {

      takePhoto() {
        console.log('taking photo');
      },
      openAlbum() {
        console.log('opening album');
      },
      goBack() {

      },
      lookPhoto(){
        this.alert=true
      },
      closePhoto (){
        this.alert=false
      },
      sexValue1(){
        this.sex = '男';
        this.getValue.sex = '男'
      },
      sexValue2(){
        this.sex = '女';
        this.getValue.sex = '女'
      },
      sexValue3 (){
        this.sex = '保密';
        this.getValue.sex = '保密'
      },
      ageValue1 (){
        this.getValue.age = '50后'

      },
      ageValue2 (){
        this.getValue.age = '60后'
      },
      ageValue3 (){
        this.getValue.age = '70后'
      },
      ageValue4 (){
        this.getValue.age = '80后'
      },
      ageValue5 (){
        this.getValue.age = '90后'
      },
      ageValue6 (){
        this.getValue.age = '00后'
      },
      openConfirm() {
        MessageBox.confirm('是否退出登录?').then(action => {
          localStorage.clear();
          sessionStorage.clear();
          this.$router.push('/myPage');
      });
      },
      goChangeKey (){
        this.$router.push('/changeKeyword')
      },
      goFeedBack (){
        this.$router.push('/feedBack')
      },
      postValue(){
        var PHPheader = this.$store.state.ip + this.$store.state.location;

        var setUserInfo = PHPheader + 'api/setUserInfo';

        this.$http.post(setUserInfo,this.getValue,{emulateJSON:true}).then(
          function (response) {
            // 处理成功的结果
            console.log('getValue',this.getValue);
            MessageBox.alert('操作成功').then(action => {

            });
            console.log('postValue','success')

          }
          ,function (response) {
            // 处理失败的结果
            console.log('postValue','defind')
          });

      },
      goChangeName (){
        this.$router.push('/changeName')
      }
    },
    mounted() {
      this.actions = [{
        name: '更换头像',
        method: this.takePhoto
      },{
        name:'查看头像',
        method:this.lookPhoto
      }
      ];
      this.actions2 = [{
        name: '修改昵称',
        method:this.goChangeName

      }, {
        name: '取消',
        method: this.goBack
      }];
      this.actions3 = [{
        name: '保密',
        method:this.sexValue3
      },{
        name: '男',
        method:this.sexValue1
      }, {
        name: '女',
        method: this.sexValue2
      }];
      this.actions4 = [{
        name:'50后',
        method:this.ageValue1
      },{
        name: '60后',
        method: this.ageValue2
      },{
        name: '70后',
        method: this.ageValue3
      },{
        name:'80后',
        method: this.ageValue4
      },{
        name:'90后',
        method: this.ageValue5
      },{
        name:'00后',
        method: this.ageValue6
      }];


    },
    created () {


      var PHPheader = this.$store.state.ip + this.$store.state.location;
      this.user_id = localStorage.getItem('user_id');
      this.getValue.user_id = localStorage.getItem('user_id');
      var selUserInfo = PHPheader + 'api/selUserInfo';
      //个人设置信息json
      this.$http.post(selUserInfo,{user_id:this.user_id},{emulateJSON:true}).then(
        function (response) {
          // 处理成功的结果
          this.selUserInfo = response.body;
          console.log('selUserInfo',this.selUserInfo);
          this.sex = this.selUserInfo.user_info[0].sex;
          if(this.sex ==0){
            this.getValue.sex = '保密'
          }
          if(this.sex == 1){
            this.getValue.sex = '男'
          }
          if(this.sex == 2){
            this.getValue.sex = '女'
          }
          console.log(this.selUserInfo.user_info[0].sex);
          this.getValue.age = this.selUserInfo.user_info[0].age;

          this.getValue.nickname = this.selUserInfo.user_info[0].nickname;

          this.head_img = this.selUserInfo.user_info[0].head_img;
        }
        ,function (response) {
          // 处理失败的结果
        });


    }
  };

</script>
