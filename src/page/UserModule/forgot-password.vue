<template>

  <div class="forgot-password-page">
    <div class="page-header-main" v-show="title1">
      <mt-header title="忘记密码" class="my-order-head">
        <router-link to="myLogin" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>

      </mt-header>

    </div>
    <div class="page-header-main" v-show="title2">
      <mt-header title="重设密码" class="my-order-head">
        <router-link to="myLogin" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>

      </mt-header>

    </div>

    <div v-show="page1">
      <div class="forgot-password-input-box" style="margin-top: 0.3rem">
        <input type="text" placeholder="请输入手机号码" class="forgot-password-input" id="phone1">
      </div>
      <div class="forgot-password-input-box">
        <input type="text" placeholder="请输入验证码" class="forgot-password-input" id="code">
        <input type="button" value="获取验证码" class="forgot-password-getCode" id="getCode" @click="getCode">
      </div>
      <div class="forgot-password-button" @click="forgetPwd">提交</div>
    </div>

    <div v-show="page2">
      <div class="forgot-password-input-box" style="margin-top: 0.3rem">
        <input type="password" placeholder="请输入6-16位密码" class="forgot-password-input" id="password1">
        <div class="password-change" v-show="password1" @click="passwordChange1">显示密码</div>
        <div class="password-change" v-show="password2" @click="passwordChange2">隐藏密码</div>
      </div>

      <div class="forgot-password-input-box">
        <input type="password" placeholder="确认新密码" class="forgot-password-input" id="password2">
        <div class="password-change" v-show="password3" @click="passwordChange3">显示密码</div>
        <div class="password-change" v-show="password4" @click="passwordChange4">隐藏密码</div>
      </div>
      <div class="forgot-password-button" @click="resetPwd">提交</div>
    </div>


  </div>
</template>

<style scoped>
  .forgot-password-page{
    width: 10rem;
  }
  .my-order-head{
    height: 1.2rem;background-color: #ffffff;font-size: 0.38rem;color: #4a4a4a;
  }
  .forgot-password-input-box{
    background-color: #fff;height: 1.2rem;width: 100%;position: relative;border-bottom: 1px solid #d9d9d9 ;
  }
  .forgot-password-input{
    border: none;height: 1.2rem;width: 70%;margin-left: 5%;font-size: 0.4rem;
  }
  .forgot-password-getCode{
    position: absolute;top: 0;right: 0;width: 25%;background-color: #1967d6;font-size: 0.4rem;height: 1.2rem;line-height: 1.2rem;text-align: center;color: #fff;border: none;border-radius: 0;
  }
  .forgot-password-button{
    width: 90%;background-color: #1967d6;border-radius: 5px;height: 1.2rem;line-height: 1.2rem;text-align: center;margin: auto;margin-top: 0.3rem;font-size: 0.4rem;color: #fff;
  }
  .password-change{
    position: absolute;top: 0;right: 0;width: 25%;font-size: 0.35rem;height: 1.2rem;line-height: 1.2rem;text-align: center;color: #1967d6;border: none;
  }
  input[type="button"], input[type="submit"], input[type="reset"] {
    -webkit-appearance: none;
  }
  textarea { -webkit-appearance: none;}

</style>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  export default {
    name:'forgot-password',
    data (){
      return{
        title1:true,
        title2:false,
        password1:true,
        password2:false,
        password3:true,
        password4:false,
        page1:true,
        page2:false,
        code:'',
      }
    },
    methods: {
      getCode (){
        var phone1 = document.getElementById('phone1').value;
        var e = /^1(3|4|5|7|8|9)\d{9}$/;
        if (phone1.search(e) == -1) {
          MessageBox.alert('手机号码输入有误！').then(action => {

          })
        } else {
          var PHPheader = this.$store.state.ip + this.$store.state.location;
          var send = PHPheader + 'api/send';
          this.$http.post(send, {phone: phone1}, {emulateJSON: true}).then(
            function (response) {
              //处理成功的结果
              var s = response.body;
              console.log(s);
              this.code = s.code;
              this.showtime(60);
              MessageBox.alert('验证码已发送，请注意查收！').then(action => {

              })


            }, function (response) {
              //处理失败的结果
              console.log('defind')
            })
        }
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
      passwordChange1 (){
        this.password1 = false;
        this.password2 = true;
        document.getElementById('password1').type="text"
      },
      passwordChange2 (){
        this.password1 = true;
        this.password2 = false;
        document.getElementById('password1').type="password"
      },
      passwordChange3 (){
        this.password3 = false;
        this.password4 = true;
        document.getElementById('password2').type="text"
      },
      passwordChange4 (){
        this.password3 = true;
        this.password4 = false;
        document.getElementById('password2').type="password"
      },
      forgetPwd (){
        var phone1 = document.getElementById('phone1').value;
        var e = /^1(3|4|5|7|8|9)\d{9}$/;
        if (phone1.search(e) == -1) {
          MessageBox.alert('手机号码输入有误！').then(action => {

          })
        }else {
          var code = document.getElementById('code').value;
          var PHPheader = this.$store.state.ip + this.$store.state.location;
          var forgetPwd = PHPheader + 'api/forgetPwd';
          this.$http.post(forgetPwd,{phone: phone1,code:code},{emulateJSON: true}).then(
            function (response) {
              //处理成功的结果
              var f = response.body;
              console.log(f);
              if(f.status_code == 1 ){
                MessageBox.alert('手机号码验证成功！').then(action => {
                  this.page1 =false;this.page2 =true;this.title1=false;this.title2 =true
                })
              }
              if(f.status_code == 3){
                MessageBox.confirm('该手机号还未注册,是否前往注册?').then(action => {
                  this.$router.push('/myRegister');
                  sessionStorage.setItem("stop", "stop")
                })
              }
              if(f.status_code == 4){
                MessageBox.alert('验证码有误或已失效！').then(action => {

                })
              }
              if(f.status_code == 2 ||f.status_code == 0 ){
                MessageBox.alert('手机号码验证失败！').then(action => {

                })
              }
            },function (response) {
             //处理失败的结果
              console.log('defind')
            })
        }
      },
      resetPwd (){
        var phone1 = document.getElementById('phone1').value;
        var password1 = document.getElementById('password1').value;
        var password2 = document.getElementById('password2').value;
        var f = /^[0-9a-zA-Z]{6,16}$/;
        if(password1.search(f)==-1 || password2.search(f)==-1){
          MessageBox.alert('密码长度不符合规格').then(action => {

          })
        }else {
          if(password1 != password2){
            MessageBox.alert('两次密码不相同').then(action => {

            })
          }else {
            var PHPheader = this.$store.state.ip + this.$store.state.location;
            var resetPwd = PHPheader + 'api/resetPwd';
            this.$http.post(resetPwd,{phone: phone1,n_password:password2},{emulateJSON: true}).then(
              function (response) {
                //处理成功的结果
                var r = response.body;
                console.log(r)
                if(r.status_code ==1){
                  MessageBox.alert('密码重置成功！').then(action => {
                    this.$router.push('/myLogin')
                    sessionStorage.setItem("stop", "stop")
                  })
                }
                if(r.status_code ==0 || r.status_code ==2){
                  MessageBox.alert('密码重置失败！').then(action => {

                  })
                }

              },function (response) {
                //处理失败的结果
                console.log('defind')
              })
          }
        }
      }

    }
  }
</script>
