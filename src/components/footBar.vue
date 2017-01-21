<style lang="scss">
  footer~div{
    margin-bottom:1.437rem;
  }
  footer{
    background: #fff;
    height:1.437rem;
    position:fixed;
    bottom:0;
    width: 100%;
    display:flex;
    display:-webkit-flex;
    border-top:1px solid #efefef;
    z-index: 100;
    text-align: center;
  .tabbar{
    width:100%;
    display: flex;
    display: -webkit-flex;
  a{

    flex:2;
    -webkit-flex:2;
    margin: .1rem 0;
    color: #666;
  .on{
    color: #2159c6;
  }
  img{
    display: block;
    margin: auto;
    width: .8rem;
  }
  }
  }
  }
</style>
<template>
  <footer>
    <div class="tabbar">
      <router-link to="">
        <div class="item-link">
          <img src="../assets/images/public/indexFooter_01.png">
          首页
        </div>
      </router-link>
      <router-link to="/ChooseCarIndex">
        <div class="item-link on">
          <img src="../assets/images/public/indexFooter_06.png">
          选车
        </div>
      </router-link>
      <router-link to="/">
        <div class="item-link">
          <img src="../assets/images/public/indexFooter_03.png">
          车生活
        </div>
      </router-link>
      <router-link to="">
        <div class="item-link">
          <img src="../assets/images/public/indexFooter_04.png">
          我的
        </div>
      </router-link>
    </div>
  </footer>
</template>
<script type="text/babel">
    export default{
      name:'footBar',
      methods(){

      },
      data(){
        return {
          main:{
            iconOff:"../assets/images/public/indexFooter_01.png",
            iconOn:"../assets/images/public/indexFooter_05.png",
            on:true
          },
          chooseCar:{
            iconOff:"../assets/images/public/indexFooter_02.png",
            iconOn:"../assets/images/public/indexFooter_06.png",
            on:true
          },
          carLife:{
            iconOff:"../assets/images/public/indexFooter_03.png",
            iconOn:"../assets/images/public/indexFooter_07.png",
            on:true
          },
          mine:{
            iconOff:"../assets/images/public/indexFooter_04.png",
            iconOn:"../assets/images/public/indexFooter_08.png",
            on:true
          }
        }
      }
    }
</script>
