<template>
  <div class="my-login-page">
    <div class="page-header-main">
      <mt-header title="登录" class="my-order-head">
          <mt-button icon="back" slot="left" @click.native="returnLink"></mt-button>
      </mt-header>
    </div>

    <div class="page-navbar" >

      <mt-navbar  v-model="selected" class="my-login-select">
        <mt-tab-item id="1">短信快捷登录</mt-tab-item>
        <mt-tab-item id="2">用户登录</mt-tab-item>

      </mt-navbar>



      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="my-login-input-box" style="margin-top: 3px">
            <input type="text" class="my-login-input" placeholder="手机号" id="phone1">
            <input type="button" value="获取验证码" class="my-login-getCode" id="getCode" @click="getCode">
          </div>
          <div class="my-login-input-box">
            <input type="text" class="my-login-input" placeholder="验证码" id="code1">
          </div>
          <div class="send-button" @click="loginGo1">完成</div>
          <div class="register-button" @click="registerGO">注册</div>
          <div class="forgot" @click="forgotGo">忘记密码？</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="my-login-input-box" style="margin-top: 3px">
            <input type="text" class="my-login-input" placeholder="手机号" id="phone2">

          </div>
          <div class="my-login-input-box">
            <input type="password" class="my-login-input" placeholder="密码" id="code2">
            <div class="password-change" v-show="password1" @click="passwordChange1">显示密码</div>
            <div class="password-change" v-show="password2" @click="passwordChange2">隐藏密码</div>
          </div>
          <div class="send-button" @click="loginGo2">完成</div>
          <div class="register-button" @click="registerGO">注册</div>
          <div class="forgot" @click="forgotGo">忘记密码？</div>
        </mt-tab-container-item>

      </mt-tab-container>
    </div>
  </div>
</template>

<style scoped>
  .my-login-page{
    width: 10rem;
  }
  .my-order-head{
    height: 1.2rem;background-color: #ffffff;font-size: 0.38rem;color: #4a4a4a;
  }
  .my-login-select{
    background-color: #eaeaea;
  }
  .my-login-input-box{
    background-color: #fff;height: 1.2rem;width: 100%;position: relative;border-bottom: 1px solid #d9d9d9 ;
  }
  .my-login-input {
    border: none;height: 1.2rem;width: 70%;margin-left: 5%;font-size: 0.4rem;
  }
  .my-login-getCode{
    position: absolute;top: 0;right: 0;width: 25%;background-color: #1967d6;font-size: 0.4rem;height: 1.2rem;line-height: 1.2rem;text-align: center;color: #fff;border: none;border-radius: 0;
  }
  .send-button{
    width: 90%;background-color: #1967d6;border-radius: 5px;height: 1.2rem;line-height: 1.2rem;text-align: center;margin: auto;margin-top: 0.3rem;font-size: 0.4rem;color: #fff;
  }
  .register-button{
    width: 25%;height: 1rem;line-height: 1rem;border-radius: 5px;border: 1px solid #1967d6;margin: auto;margin-top: 0.3rem;font-size: 0.4rem;color: #1967d6;text-align: center;
  }
  .password-change{
    position: absolute;top: 0;right: 0;width: 25%;background-color: #1967d6;font-size: 0.4rem;height: 1.2rem;line-height: 1.2rem;text-align: center;color: #fff;border: none;
  }
  .forgot{
    color:#1967d6;width: 25%;text-align: center;height: 0.8rem;line-height:0.8rem;font-size: 0.3rem;margin: auto;margin-top: 0.3rem;
  }
  input[type="button"], input[type="submit"], input[type="reset"] {
    -webkit-appearance: none;
  }
  textarea { -webkit-appearance: none;}

</style>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'my-login',
    data() {
      return {
        selected: '1',
        password1:true,
        password2:false,
      };
    },
    methods:{
      returnLink(){
        let L = sessionStorage.getItem('returnLink');
        L?this.$router.push(L):this.$router.push('/homePage');
      },
      loginGo1 (){
        var phone1 = document.getElementById('phone1').value;
        var code1 = document.getElementById('code1').value;
        var e = /^1(3|4|5|7|8|9)\d{9}$/;
        if (phone1.search(e)==-1){
          MessageBox.alert('手机号码输入有误！').then(action => {

          })
        }else {
          var PHPheader = this.$store.state.ip + this.$store.state.location;
          var login = PHPheader + 'api/login';
          this.$http.post(login,{phone:phone1,code:code1},{emulateJSON:true}).then(
            function (response) {
              // 处理成功的结果
              var l = response.body;
              if(l.status_code==1){
                MessageBox.alert('登录成功！').then(action => {
                  var user_id = l.user_info[0].id;
                  console.log('user_id',user_id);
                  var phone = l.user_info[0].phone;
                  console.log('phone',phone);
                  localStorage.setItem('user_id',user_id);
                  localStorage.setItem('phone',phone);

                  this.$router.push('/myPage');
                  sessionStorage.setItem("stop", "stop")
                })
              }
              if(l.status_code==3){
                MessageBox.confirm('手机号码还未注册，是否去注册？').then(action => {
                  this.$router.push('/myRegister');
                  sessionStorage.setItem("stop", "stop")
                })
              }
              if(l.status_code==6){
                MessageBox.alert('密码输入有误！').then(action => {

                })
              }
              if(l.status_code==5){
                MessageBox.alert('验证码错误或失效！请重新获取验证码').then(action => {

                })
              }
              if(l.status_code==2||l.status_code==4||l.status_code==0){
                MessageBox.alert('登录失败！').then(action => {

                })
              }

              console.log('login',l);

            },function (response) {
              // 处理失败的结果
              console.log('defind')
            })
        }
      },
      loginGo2 (){
        var phone2 = document.getElementById('phone2').value;
        var code2 = document.getElementById('code2').value;
        var e = /^1(3|4|5|7|8|9)\d{9}$/;
        if(phone2.search(e)==-1 ){
          MessageBox.alert('手机号码输入有误！').then(action => {

          })
        }else {
          var PHPheader = this.$store.state.ip + this.$store.state.location;
          var login = PHPheader + 'api/login';
          this.$http.post(login,{phone:phone2,password:code2},{emulateJSON:true}).then(
            function (response) {
              // 处理成功的结果
              var l = response.body;
              if(l.status_code==1){
                MessageBox.alert('登录成功！').then(action => {
                  var user_id = l.user_info[0].id;
                  console.log('user_id',user_id);
                  var phone = l.user_info[0].phone;
                  console.log('phone',phone);
                  localStorage.setItem('user_id',user_id);
                  localStorage.setItem('phone',phone);

                  this.$router.push('/myPage');
                  sessionStorage.setItem("stop", "stop")
                })
              }
              if(l.status_code==3){
                MessageBox.confirm('手机号码还未注册，是否去注册？').then(action => {
                  this.$router.push('/myRegister');
                  sessionStorage.setItem("stop", "stop")
                })
              }
              if(l.status_code==6){
                MessageBox.alert('密码输入有误！').then(action => {

                })
              }
              if(l.status_code==5){
                MessageBox.alert('验证码错误或失效！请重新获取验证码').then(action => {

                })
              }
              if(l.status_code==2||l.status_code==4||l.status_code==0){
                MessageBox.alert('登录失败！').then(action => {

                })
              }

              console.log('login',l);

            },function (response) {
              // 处理失败的结果
              console.log('defind')
            })
        }


      },
      getCode (){
        var phone1 = document.getElementById('phone1').value;
        var e = /^1(3|4|5|7|8|9)\d{9}$/;
        if(phone1.search(e)==-1){
          MessageBox.alert('手机号码输入有误！').then(action => {

          })
        }else {
          var PHPheader = this.$store.state.ip + this.$store.state.location;
          var send =PHPheader + 'api/send';
          this.$http.post(send,{phone:phone1},{emulateJSON:true}).then(
            function (response) {
              //处理成功的结果
              var s =response.body;
              console.log(s);
              this.showtime(60,false);
              MessageBox.alert('验证码已发送，请注意查收！').then(action => {

              })

            },function (response) {
              //处理失败的结果
              console.log('defind')
            })
        }
      },
      registerGO (){
        this.$router.push('/myRegister');
        sessionStorage.setItem("stop", "stop")
      },
      showtime (t){
        document.getElementById('getCode').disabled=true;
        var i=60;
        var id=setInterval(function(){
          var stop = sessionStorage.getItem('stop');
          if(stop == 'stop'){
            clearInterval(id);
            sessionStorage.removeItem("stop")
          }else {
            document.getElementById('getCode').value = " (" + i +")秒";
            i--;
            if(i<0){
              clearInterval(id);
              document.getElementById('getCode').value =" 重新发送 ";
              document.getElementById('getCode').disabled=false;
            }
          }

        },1000)

      },
      update_p (i,t){
        if(i == t) {
          document.getElementById('getCode').value =" 重新发送 ";
          document.getElementById('getCode').disabled=false;
          console.log('WTF')
        }
        else {
          var printnr = t-i;
          document.getElementById('getCode').value = " (" + printnr +")秒后重新发送";
        }
      },
      passwordChange1 (){
        this.password1 = false;
        this.password2 = true;
        document.getElementById('code2').type="text"
      },
      passwordChange2 (){
        this.password1 = true;
        this.password2 = false;
        document.getElementById('code2').type="password"
      },
      forgotGo () {
        this.$router.push('/forgotPassword');
        sessionStorage.setItem("stop", "stop")
      }


    },
    created (){

    }
  };

</script>
