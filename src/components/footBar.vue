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
        text-decoration: none;
        color: #666;
        &.on{
          color: #2159c6;
          i{
            display: block;
            margin: auto;
            width: .8rem;
            height: 0.86rem;
            &.home{
              background: url(../assets/images/public/indexFooter_05.png) 0 0 no-repeat;
              -webkit-background-size: .8rem auto;
              background-size: .8rem auto;
             }
            &.chooseCar{
              background: url(../assets/images/public/indexFooter_06.png) 0 0 no-repeat;
              -webkit-background-size: .8rem auto;
              background-size: .8rem auto;
            }
            &.carLife{
              background: url(../assets/images/public/indexFooter_07.png) 0 0 no-repeat;
              -webkit-background-size: .8rem auto;
              background-size: .8rem auto;
            }
            &.mine{
              background: url(../assets/images/public/indexFooter_08.png) 0 0 no-repeat;
              -webkit-background-size: .8rem auto;
              background-size: .8rem auto;
            }
          }
        }
        i{
            display: block;
            margin: auto;
            width: .8rem;
            height: 0.86rem;
            &.home{
              background: url(../assets/images/public/indexFooter_01.png) 0 0 no-repeat;
              -webkit-background-size: .8rem auto;
              background-size: .8rem auto;
             }
            &.chooseCar{
              background: url(../assets/images/public/indexFooter_02.png) 0 0 no-repeat;
              -webkit-background-size: .8rem auto;
              background-size: .8rem auto;
            }
            &.carLife{
              background: url(../assets/images/public/indexFooter_03.png) 0 0 no-repeat;
              -webkit-background-size: .8rem auto;
              background-size: .8rem auto;
            }
            &.mine{
              background: url(../assets/images/public/indexFooter_04.png) 0 0 no-repeat;
              -webkit-background-size: .8rem auto;
              background-size: .8rem auto;
            }
          }
      }
    }
  }
</style>
<template>
  <footer>
    <div class="tabbar">
      <router-link to="/homepage" active-class="on">
        <div class="item-link">
          <i class="home"></i>
          首页
        </div>
      </router-link>
      <router-link to="/ChooseCarIndex" active-class="on">
        <div class="item-link on">
          <i class="chooseCar"></i>
          选车
        </div>
      </router-link>
      <router-link to="/CarLife" active-class="on">
        <div class="item-link">
          <i class="carLife"></i>
          车生活
        </div>
      </router-link>
      <router-link to="/myPage" active-class="on">
        <div class="item-link">
          <i class="mine"></i>
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
