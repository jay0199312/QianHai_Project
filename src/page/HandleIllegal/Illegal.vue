<style scoped lang="scss">
  .page{
    position:absolute;
    overflow-y:scroll;
    overflow-x:hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .chosenStore{
    background: #fff;
    overflow: hidden;
    padding: 0.25rem;
    >img{
      float: left;
       width: 1.5rem;
       height: 1.5rem;
      border-radius: 0.125rem;
    }
    .detail{
      line-height: .55rem;
      margin-left: 1.7rem;
      .title{
        font-size: 16px;
      }
      .address{
        color: #999;
      }
      .location{
        color: #999;
        img{
          width:0.325rem;
        }
      }
    }
  }
  .dateServe{
    background: #fff;
    margin-top: 0.25rem;
    .tab-header{
      .swiper-button-prev{
        background-size:16px;
        -webkit-background-size:16px;
        border-right:1px solid #dfdfdf;
        background-color: #fff;
      }
      .swiper-button-next{
        background-size:16px;
        -webkit-background-size:16px;
        border-left:1px solid #efefef;
        background-color: #fff;
      }

      .swiper-slide{
        padding:0.25rem 0;
        opacity: .4;
        text-align: center;
      }
      .swiper-slide-active{
        opacity: 1;
        background: #26a2ff;
        color: #fff;
      }
    }
    .timelist{
      border-top:1px solid #efefef;
      li{
        border-bottom:1px solid #efefef;
        line-height:.5rem;
        padding:0.25rem;
        display:flex;
        display:-webkit-flex;
        .detail{
          flex:5;
          -webkit-flex:5;
          p:last-child{
            color: #f4a83d;
          }
        }
      }
    }
  }
  .illegal-tab{
    margin-bottom:3px;
  }
  .check{
    padding:.5rem;
  }
  .illegalbox{
    background: #fff;
    padding:.2rem;
    display: flex;
    display: -webkit-flex;
    .block{
      flex:3;
      -webkit-flex:3;
      border-right:1px solid #efefef;
      text-align: center;
      &:last-child{
         border-right:0;
       }
      p{
        font-size:32px;
        color: #1182fd;
      }
      label{
        color: #999;
      }
    }
  }
  .illegalDetail{
    background: #fff;
    margin-top: .25rem;
    .header{
      border-left:3px solid #26a2ff;
      padding:0.25rem;
      border-bottom:1px solid #efefef;
      color: #999;
    }
    .contain{
      line-height:.6rem;
      border-bottom:1px solid #efefef;
      padding:0.25rem;
      p{
        font-size:16px;
      }
      label{
        color: #999;
      }
    }
    .footer{
      display: flex;
      display: -webkit-flex;
      .score{
        padding:.25rem;
        -webkit-flex: 4;
        color: #e73624;
        font-size:16px;
        line-height:.7rem;
        flex: 4;
        img{
          vertical-align: middle;
          width:.5rem;
        }

      }
      label{
        background: #1060c6;
        color: #fff;
        padding:.5rem .6rem;
      }
    }
  }
  .carNum{
    padding: .3rem 0;
    width: 6.9rem;
    border: 0;
    margin-top: 0.14rem;
  }
</style>
<template>
  <div>
    <div class="page">
      <mt-header title="违章处理" >
        <mt-button icon="back" slot="left"  @click="$store.commit('back')"></mt-button>
      </mt-header>
      <mt-navbar class="illegal-tab" v-model="selected">
        <mt-tab-item id="1">违章查询</mt-tab-item>
        <mt-tab-item id="2">违章记录</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-field label="车牌号码" >
            <input type="text" placeholder="请输入完整的车牌号码" @focus="focusOn()" ref="number" class="carNum" v-model="plateNumber">
          </mt-field>
          <mt-field label="车架号码">
            <input type="text" placeholder="请输入车架号码后六位" ref="VIN" class="carNum" maxlength="6">
          </mt-field>
          <mt-field label="发动机号">
            <input type="text" placeholder="请输入发动机号后六位" ref="AEN" class="carNum" maxlength="6">
          </mt-field>
          <div class="check">
            <mt-button type="primary" size="large" @click.native="checkOut">开始查询</mt-button>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="illegalbox">
            <div class="block">
              <p v-if="!illegalRecord.ILLEGAL_TIMES">0</p>
              <p v-if="illegalRecord.ILLEGAL_TIMES">{{illegalRecord.ILLEGAL_TIMES}}</p>
              <label>违章</label>
            </div>
            <div class="block">
              <p v-if="!illegalRecord.TOTAL_MONEY">0</p>
              <p v-if="illegalRecord.TOTAL_MONEY">{{illegalRecord.TOTAL_MONEY}}</p>
              <label>罚款</label>
            </div>
            <div class="block">
              <p v-if="!illegalRecord.TOTAL_FEN">0</p>
              <p v-if="illegalRecord.TOTAL_FEN">{{illegalRecord.TOTAL_FEN}}</p>
              <label>扣分</label>
            </div>
          </div>
          <div class="illegalDetail" v-if="IR_list">
            <ul v-for="item of IR_list" @click="goDetail(item)">
              <li class="header"><p>{{new Date(item.DILLEGAL_DATE).toLocaleString().replace(/:\d{1,2}$/,' ')}}</p></li>
              <li class="contain">
                <p>{{item.SAREA}}</p>
                <label>{{item.SACT}}</label>
              </li>
              <li class="footer">
                <div class="score">
                  <img src="../../assets/images/illegal/illegal_03.png" alt="">
                  <span for="">{{item.FEN}}</span>
                  <img src="../../assets/images/illegal/illegal_05.png" alt="">
                  <span for="">{{item.SMONEY}}</span>
                </div>
                <label>立即缴费</label>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <keyboard :showKB="showKB" @keyVal="kbVal" ></keyboard>
  </div>
</template>
<script type="text/babel">
  import keyboard from "./../../components/keyboard.vue";
  import { Toast } from 'mint-ui';
  export default {
    name: 'Illegal',
    components: {
      keyboard
    },
    data() {
      return {
        selected: '1',
        showKB:{
          show:false
        },
        plateNumber:"",
        VIN:"",
        illegalRecord:[],
        IR_list:[]
      };
    },
    methods: {
      focusOn(){
        this.$refs.number.blur();
        this.showKB.show = true;
      },
      kbVal(val){
        this.plateNumber = val;
      },
      checkOut(){
        let illegal_link = this.$store.state.carnt + "/IllegalNewWeb/allIllegal";
        if(!this.plateNumber){
          Toast({
            message: '车牌号不能为空',
            position: 'bottom'
          });
        }else if(!this.$refs.VIN.value){
          Toast({
            message: '车架号不能为空',
            position: 'bottom'
          });
        }else{
          let data = {
            SCAR_NUMBER:this.plateNumber,
            PAGE_NO:"1",
            PAGE_SIZE:"8"
            /*FRAME_NO:this.$refs.VIN.value*/
          };
          console.log(this.plateNumber);
          this.$http.post(illegal_link,data,{emulateJSON:true})
            .then(rsp => {
              this.illegalRecord = rsp.body;
              this.IR_list = rsp.body.RESULT_DATA;
              this.selected="2";
              console.log(rsp.body)
            }, rsp => {});
        }
      },
      goDetail(item){
        sessionStorage.setItem("illegalDetail",JSON.stringify(item));
        this.$router.push("/illegalDetail")
      }
    }
  };
</script>
