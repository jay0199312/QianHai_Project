<style scoped lang="scss">
  .keyboard{
    position: fixed;
    z-index: 2;
    background: rgba(0,0,0,0.2);
    width:100%;
    height: 100%;
    .province{
      width:100%;
      position: absolute;
      bottom: 0;
      overflow: hidden;
      background: #fff;
      span{
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        display: inline-block;
        float: left;
        width:calc(100% / 7);
        width:-webkit-calc(100% / 7);
        width:-moz-calc(100% / 7);
        border-right: 1px solid #ccc;
        border-bottom:1px solid #ccc;
        padding:.328rem 0;
        text-align: center;
        &:active{
          background: #e76c6b;
           color: #fff;
         }
      }
    }
    .number{
      width:100%;
      position: absolute;
      bottom: 0;
      z-index: 6;
      background: #fff;
      .cel{
        position: absolute;
        right: 0;
        height: .7rem;
        margin-top: -.7rem;
      }
      .box{
        width:100%;
        height: .98rem;
        display:flex;
        margin-top:-1px;
        border-top:1px solid #ccc;
        display:-webkit-flex;
        .comfirm{
          flex:3;
          text-align: center;
          line-height:.97rem;
        }
        .del{
          flex: 1;
          height:.97rem;
        }
      }
      span{
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        display: inline-block;
        float: left;
        width:calc(100% / 7);
        width:-webkit-calc(100% / 7);
        width:-moz-calc(100% / 7);
        border-right: 1px solid #ccc;
        border-bottom:1px solid #ccc;
        padding:.328rem 0;
        text-align: center;
        &.key2_1{
          width:20%;
         }
        &.key2_2{
          width:10%
         }
        &.key2_3{
           width:calc(100% / 7);
           width:-webkit-calc(100% / 7);
           width:-moz-calc(100% / 7);
         }
        &:active{
           background: #e76c6b;
           color: #fff;
         }
      }
    }
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 5s;
  }
  .slide-enter, .slide-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(-2rem);
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
</style>
<template>
  <div class="keyboard" v-show="showKB.show">
    <transition name="slide" mode="out-in">
      <div class="province" v-if="kb1Show">
        <span v-for="item of keyboard.key" @click="pressKey1(item)">{{item}}</span>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="number" v-if="kb2Show">
        <img src="../assets/images/illegal/cancel-btn.png" alt="" class="cel" @click="cel">
        <span v-for="item of keyboard.key2[0]" class="key2_1" @click="pressLast(item)">{{item}}</span>
        <span v-for="item of keyboard.key2[1]" class="key2_2" @click="pressThen(item)">{{item}}</span>
        <span v-for="item of keyboard.key2[2]" class="key2_3" @click="pressThen(item)">{{item}}</span>
        <div class="box">
          <div class="comfirm" @click="comfirm">确认</div>
          <div class="delw" @click="del">
            <img src="../assets/images/illegal/delete.png" alt="" class="del">
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'keyboard',
    props:['showKB'],
    data() {
      return {
        keyboard:{
          key:["京","沪","浙","苏","粤","鲁","晋","冀","豫","川","渝","辽","吉","黑","皖","鄂","湘","赣","闽","陕","甘","宁","蒙","津","贵","云","桂","琼","青","新","藏","港","澳"],
          key2:[
            ["港","澳","学","警","领"],
            ["1","2","3","4","5","6","7","8","9","0"],
            [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
          ]
        },
        kb1Show:1,
        kb2Show:0,
        keyVal:""
      };
    },
    methods: {
      pressKey1(key) {
        this.keyVal = key;
        this.kb1Show = 0;
        this.kb2Show = 1;
        this.$emit("keyVal",this.keyVal)
      },
      pressThen(key) {
        if(this.keyVal.length<7){
          this.keyVal+=key;
        }
        this.$emit("keyVal",this.keyVal)
      },
      pressLast(key) {
        if (this.keyVal.length==6){
          this.keyVal+=key;
        }
        this.$emit("keyVal",this.keyVal)
      },
      cel() {
        this.keyVal="";
        this.kb1Show = 1;
        this.kb2Show = 0;
        this.$emit("keyVal",this.keyVal);
        this.showKB.show=false;
      },
      comfirm() {
        this.showKB.show=false;
        this.$emit("keyVal",this.keyVal)
      },
      del() {
        if(this.keyVal.length>1){
          this.keyVal = this.keyVal.substring(0, this.keyVal.length - 1)
        }
        this.$emit("keyVal",this.keyVal)
      }
    }
  };
</script>
