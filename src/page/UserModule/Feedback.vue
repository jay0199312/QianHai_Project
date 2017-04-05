<template>
  <div class="change-keyword-page">
    <div>
      <div class="page-header-main">

        <mt-header title="意见反馈" class="setting-head">
          <router-link to="/mySetting" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>

        </mt-header>

      </div>
    </div>

    <div class="textarea-box">
      <textarea name="" id="text" cols="30" rows="10" class="textarea-input" maxlength="200" placeholder="有什么问题或反馈吗？"></textarea>

    </div>
    <div class="change-name-input-box">
      <input type="text" placeholder="电子邮箱或手机号（非必填）" class="change-name-input" id="input">

    </div>

    <mt-button v-on:click="postValue" size="large" class="quit-button"><div class="quit-button-text" >提交</div></mt-button>



  </div>
</template>

<style scoped>
  .textarea-box{
    border-radius: 5px;overflow: hidden;width: 90%;margin: auto;margin-top: 0.3rem;
  }
  .change-keyword-page{
    width: 10rem;height: 17.8rem;
  }
.textarea-input{
  border: none;width: 100%;height: 6rem;font-size: 0.35rem;padding: 0.2rem;
}
  .setting-head{
    background-color: #ffffff;height: 1.2rem;font-size: 0.38rem;border-bottom: 1px solid #ebebeb;color: #4a4a4a;
  }
  .change-name-input{
    width: 90%;margin-left:5%;border: none;height: 1.2rem;font-size: 0.35rem;font-weight: lighter;margin-top: 0.3rem;padding-left: 0.2rem;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #b6b6b6; opacity:1;font-weight: lighter;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #b6b6b6;opacity:1;font-weight: lighter;
  }

  input:-ms-input-placeholder{
    color: #b6b6b6;opacity:1;font-weight: lighter;
  }

  input::-webkit-input-placeholder{
    color: #b6b6b6;opacity:1;font-weight: lighter;
  }
  .quit-button{
    width: 8.88rem;margin: auto;color: #ffffff;background-color: #0554c3;border-radius: 5px;height: 1.11rem;font-size: 0.36rem;margin-top: 0.4rem;text-align: center;line-height: 1.11rem;font-weight: bold;
  }
  .quit-button-text{
    text-align: center;width: 100%;font-size: 0.4rem;
  }
</style>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  export default {
    data(){
      return{

      }
    },
    methods:{
      postValue (){
        var text =document.getElementById('text').value;
        var input = document.getElementById('input').value;
        var PHPheader = this.$store.state.ip + this.$store.state.location;
        var feedback = PHPheader + 'api/feedback';
        if(text.length==0){
          MessageBox.alert('意见反馈不可为空').then(action => {

          })
        }else {
          this.$http.post(feedback,{content:text,phone:input,email:input},{emulateJSON:true}).then(
            function (response) {
              //处理成功的结果
              var f = response.body;
              if(f.status_code==1){
                MessageBox.alert('意见反馈提交成功').then(action => {
                  this.$router.push('/mySetting')
                })
              }
              if(f.status_code==2||f.status_code==3||f.status_code==0){
                MessageBox.alert('意见反馈提交失败').then(action => {
                  this.$router.push('/mySetting')
                })
              }


            },function (response) {
              //处理失败的结果
            })
        }
      }

    },
    created (){

    }



  }
</script>
