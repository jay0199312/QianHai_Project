<template>
  <div class="change-keyword-page">
    <div>
      <div class="page-header-main">

        <mt-header title="修改密码" class="setting-head">
          <router-link to="/mySetting" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>

        </mt-header>

      </div>
    </div>
    <div class="forgot-password-input-box" style="margin-top: 0.3rem">
      <input type="password" placeholder="请输入旧密码" class="forgot-password-input" id="password_o">
      <div class="password-change" v-show="password5" @click="passwordChange5">显示密码</div>
      <div class="password-change" v-show="password6" @click="passwordChange6">隐藏密码</div>
    </div>

    <div class="forgot-password-input-box">
      <input type="password" placeholder="请输入6-16位新密码" class="forgot-password-input" id="password1">
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
</template>

<style scoped>
  .setting-head{
    background-color: #ffffff;height: 1.2rem;font-size: 0.38rem;border-bottom: 1px solid #ebebeb;color: #4a4a4a;
  }
  .change-keyword-page{
    width: 10rem;background-color: #ebebeb;height: 17.8rem;
  }
  .forgot-password-input-box{
    background-color: #fff;height: 1.2rem;width: 100%;position: relative;border-bottom: 1px solid #d9d9d9 ;
  }
  .forgot-password-input{
    border: none;height: 1.2rem;width: 70%;margin-left: 5%;font-size: 0.4rem;
  }
  .forgot-password-getCode{
    position: absolute;top: 0;right: 0;width: 25%;background-color: #1967d6;font-size: 0.4rem;height: 1.2rem;line-height: 1.2rem;text-align: center;color: #fff;border: none;
  }
  .forgot-password-button{
    width: 90%;background-color: #1967d6;border-radius: 5px;height: 1.2rem;line-height: 1.2rem;text-align: center;margin: auto;margin-top: 0.3rem;font-size: 0.4rem;color: #fff;
  }
  .password-change{
    position: absolute;top: 0;right: 0;width: 25%;font-size: 0.35rem;height: 1.2rem;line-height: 1.2rem;text-align: center;color: #1967d6;border: none;
  }
</style>

<script type="text/ecmascript-6">

  import { MessageBox } from 'mint-ui';
  export default{
    name: 'change-name',
    data (){
      return{
        password1:true,
        password2:false,
        password3:true,
        password4:false,
        password5:true,
        password6:false,
        user_id:'',

      }
    },
    methods: {
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
      passwordChange5 (){
        this.password5 = false;
        this.password6 = true;
        document.getElementById('password_o').type="text"
      },
      passwordChange6 (){
        this.password5 = true;
        this.password6 = false;
        document.getElementById('password_o').type="password"
      },
      resetPwd (){
        var password_o = document.getElementById('password_o').value;
        var password1 = document.getElementById('password1').value;
        var password2 = document.getElementById('password2').value;
        var f = /^[0-9a-zA-Z]{6,16}$/;

        if(password1.search(f)==-1 || password2.search(f)==-1|| password_o.search(f)==-1){
          MessageBox.alert('密码长度不符合规格').then(action => {

          })
        }else {
          if(password1 != password2){
            MessageBox.alert('两次密码不相同').then(action => {

            })
          }else {
            var PHPheader = this.$store.state.ip + this.$store.state.location;
            var setUserInfo = PHPheader + 'api/setUserInfo';
            this.$http.post(setUserInfo,{user_id: this.user_id,o_password:password_o,n_password:password2},{emulateJSON: true}).then(
              function (response) {
                //处理成功的结果
                var r = response.body;
                console.log(r)
                if(r.status_code ==1){
                  MessageBox.alert('密码重置成功！').then(action => {
                    this.$router.push('/mySetting')
                })
                }
                if(r.status_code ==0 || r.status_code ==2){
                  MessageBox.alert('密码重置失败！').then(action => {

                  })
                }
                if(r.status_code ==3){
                  MessageBox.alert('原密码不正确').then(action => {

                  })
                }
                if(r.status_code ==4){
                  MessageBox.alert('密码没有修改').then(action => {
                    this.$router.push('/mySetting')
                  })
                }

              },function (response) {
                //处理失败的结果
                console.log('defind')
              })
          }
        }
      }


    },
    created (){


      this.user_id = localStorage.getItem('user_id');



    }



  }
</script>
