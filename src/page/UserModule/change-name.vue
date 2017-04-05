<template>
  <div class="change-name-page">
    <div>
      <div class="page-header-main">

        <mt-header title="修改昵称" class="setting-head">
          <router-link to="/mySetting" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>

        </mt-header>

      </div>
    </div>

    <div class="change-name-input-box">
      <input type="text" placeholder="请输入新昵称" class="change-name-input" id="change-name-input" >

    </div>

    <mt-button v-on:click="inputValue" size="large" class="quit-button"><div class="quit-button-text" >提交</div></mt-button>



  </div>
</template>

<style scoped>
  .change-name-page{
    width: 10rem;background-color: #ebebeb;height: 17.8rem;
  }
  .setting-head{
       background-color: #ffffff;height: 1.2rem;font-size: 0.38rem;border-bottom: 1px solid #ebebeb;color: #4a4a4a;
     }
  .change-name-input-box{
    width: 100%;height: 1.2rem;background-color: #ffffff;margin-top: 0.2rem;
  }
  .change-name-input{
    width: 90%;margin-left:0.3rem;border: none;height: 1.2rem;font-size: 0.5rem;font-weight: lighter;
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
  export default{
    name:'change-name',
    data(){
      return {

        newName:{
          user_id:'',
          nickname:''
        },

      }
    },
    methods:{

      inputValue(){
        this.newName.nickname = document.getElementById('change-name-input').value;
        if(this.newName.nickname.length<2||this.newName.nickname.length>10){
          MessageBox.alert('请输入2到10位昵称').then(action => {

          })
        }else {
          MessageBox.confirm('是否决定修改昵称?').then(action => {

            console.log('success');
            console.log(this.newName);
            var PHPheader = this.$store.state.ip + this.$store.state.location;

            var setUserInfo = PHPheader + 'api/setUserInfo';
            this.$http.post(setUserInfo,{user_id:this.user_id,nickname:this.newName.nickname},{emulateJSON:true}).then(
              function (response) {
                // 处理成功的结果
                this.$router.push('/mySetting');
                console.log('postValue','success')

              }
              ,function (response) {
                // 处理失败的结果
                console.log('postValue','defind')
              });

          })
        }
      }


    },
    created (){
      this.user_id = localStorage.getItem('user_id')
    }


  }
</script>
