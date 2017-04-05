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
  .footer~.page{
    margin-bottom:1.2rem;
  }
  .footer{
    background: #fff;
    height:1.17rem;
    position:fixed;
    bottom:0;
    width: 100%;
    display:flex;
    display:-webkit-flex;
    border-top:1px solid #efefef;
    text-align: center;
    a,span{
      color: #999;
    }
    .dell{
      flex:1.5;
      -webkit-flex:1.5;
      padding:.1rem 0;
      &:first-child{
        border-right:1px solid #d4d4d4;
      }
      img{
        width: 0.55rem
      }
    }
    span.dell{
      background: #fff url(../../assets/images/goodsdetail/goodsdetail_09.png) center 3px no-repeat;
      -webkit-background-size:.6rem;
      background-size:.6rem;
      &.on{
         background: #fff url(../../assets/images/goodsdetail/goodsdetail.png) center 3px no-repeat;
         -webkit-background-size:.6rem;
         background-size:.6rem;
       }
       .block{
         height: .63rem;
         display: block;
       }
    }
    .willdrive{
      flex:3;
      -webkit-flex:3;
      font-size:16px;
      line-height:1.2rem;
      color: #fff;
      background: #f4a83d;
    }
    .book{
      flex:4;
      -webkit-flex:4;
      font-size:16px;
      line-height:1.2rem;
      color: #fff;
      background: #1060c6;
    }
  }
  .mint-swipe {
    height: 6.7rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 0px;
  }

  .mint-swipe-item {
    background: #fff;
    line-height: 6.7rem;
    img{
      max-width: 100%;
      max-height: 100%;
      height:6.7rem;
    }
  }

  .leftico{
    position: absolute;
    padding:.1rem;
    margin:.3rem;
    font-size:28px;
    z-index: 10;
    background: rgba(0,0,0,0.5);
    color: #fff;
    border-radius:20px;
    width: 30px;
    height: 30px;
  }

  .share{
    position: absolute;
    right: 0;
    padding:.1rem;
    margin:.3rem;
    z-index: 10;
    background: url(../../assets/images/goodsdetail/shareico.png) no-repeat 5px 5px rgba(0,0,0,0.5);
    -webkit-background-size:24px;
    background-size:24px;
    color: #fff;
    border-radius:20px;
    width: 30px;
    height: 30px;
  }

  /*// 即将秒杀*/
  .willsec{
    background: #fae1ec;
    padding:0.25rem;
    color: #e1637e;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    font-size:14px;
    img{
      width: 0.5rem;
      vertical-align: middle;
      margin-right:.2rem;
    }
    label{
      line-height:0.5rem
    }
  }
  /*秒杀进行中*/
  .sec{
    background: -moz-linear-gradient(left,#F0935B,#ff0506);
    background: -o-linear-gradient(left,#F0935B,#ff0506);
    background: -webkit-gradient(linear,0 50%,100% 50%,from(#F0935B),to(#ff0506));
    background: -webkit-linear-gradient(left,#F0935B,#ff0506);
    box-sizing: border-box;
    padding-left: .25rem;
    min-height: 2.2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width:100%;
    .priceBox{
      color:#fff;
      width:6.6rem;
      flex:7;
      -webkit-flex:7;
      h2{
        font-size: 14px;
        label{
          font-size: 32px;
        }
      }
      .down{
        font-size: 14px;
        display:flex;
        display:-webkit-flex;
        align-items: center;
        width:100%;
        span{
         margin-left: .6rem
        }
      }
      img{
        height:.6rem;
        width:auto;
        margin-right: .2rem;
        vertical-align: middle;
      }
    }
    .countdownBox{
      background: #ffd0d0;
      box-sizing: border-box;
      padding-top:0.6rem;
      height:2.2rem;
      flex:5;
      -webkit-flex:5;
      text-align: center;
      color:#e73624;
      p{
        font-size:14px;
      }
      label{
        width:0.7rem;
        height:0.7rem;
        display: inline-block;
        background: #e73624;
        line-height: 0.7rem;
        margin-top: .2rem;
        border-radius: .2rem;
        color:#fff;
      }
    }
  }

  /*// 操作区域*/
  .controlbox{
    background: #fff;
    margin-bottom:.2rem;
  }
  .title-select{
    padding-right: 0.25rem;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display:flex;
    display:-webkit-flex;
  .title{
      flex:7;
      -webkit-flex:7;
      box-sizing:border-box;
      -webkit-box-sizing:border-box;
      width: 70%;
      padding-right:.2rem;
      border-right:1px solid #d4d4d4;
      margin:0.375rem 0.25rem;
      margin-right: 0rem;
      h2{
        font-size:16px;
      }
    }
  .select{
      flex: 4;
      -webkit-flex: 4;
      margin:0.375rem 0rem;
      .block{
        margin: auto;
        display:block;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
          border:1px solid #1867d6;
          padding:0.2rem;
          float: left;
          display:inline-block;
          margin: 0;
          border-radius:0 5px  5px 0;
          color: #1867d6;
        &.active{
           border-radius:5px 0 0 5px;
           background: #1867d6;
           color: #fff;
         }

        }
      }

    }
  }
  .goods-tag{
    padding: .2rem 0;
    font-size:14px;
    margin-left: 0.25rem;
    img{
      vertical-align: middle;
      height:.6rem;
    }
    .tag{
      color: #999;
      border-right: 1px solid #d4d4d4;
      padding:0.08rem 0.3rem;

      &:last-child{
        border:none
      }
    }
  }
  .price{
    padding-bottom: 0.25rem;
    padding-left: 0.25rem;
    color: #e73624;
    em{
      font-size: 24px;
    }
  }
  .selected{
    padding-left: 0.25rem;
  }
  .chosenlab{
    font-size:14px;
    label{
      color: #999;
    }
  }
  .colorblocks{
    padding:0.25rem 0;
    .colorblock{
      border: 1px solid #fff;
      display:inline-block;
      margin-right: .3rem;
      position:relative;
      height:0.769rem;
      &.on{
        border: 1px solid #e73624;
      }
      span{
        border:1px solid #efefef;
        display:inline-block;
        height:0.675rem;
        width:1.15rem;
        margin:1px;
        img{
          position: absolute;
          right: -0.15rem;
          bottom:-0.15rem;
          width: 0.4rem;
          height:.4rem;
        }
      }
    }
  }
  .paper{
    border-top:1px solid #efefef;
    padding:0.2rem 0.25rem;
    display: flex;
    display: -webkit-flex;
    color: #999;
    span{
      margin-right: 0.3rem;
      flex: 1;
      -webkit-flex: 1;
    }
    img{
      width: 0.5rem;
      vertical-align: middle;
      display:inline-block;
    }
  }

  /*//切换栏*/
  .tabbox{
    margin-top: 0.25rem;
    .page-part{
      margin-bottom: 3px;
    }

    .tab1,.tab2,.tab3{
      background: #fff;
    }
    .tab2{
      padding:.25rem;
    }
    table{
      width:100%;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      text-align: center;
      thead{
        background: #cadffb;
        td{
          padding: 0.125rem;
          font-weight: bold;
        }
      }
      tbody{
        tr{
          &:nth-child(even){
             background: #f6f6f6;
             /*border-bottom:1px solid #eee;*/
           }
           td{
             padding:0.125rem;
             width:50%;
           }
           th{
             border-color: #efefef;
             border-right:1px solid #eee;
             padding:0.125rem;
             width:50%;
           }
        }
      }
    }
  }

  /*//分享*/
  .sharemodel{
    background: rgba(0,0,0,0.9);
    position: fixed;
    z-index: 100;
    width:100%;
    height: 100%;
    .btn{
      width:7rem;
      margin: 1rem auto;
      display: block;
    }
    img{
      width:8rem;
      margin-left:2rem;
    }
  }
</style>
<style>
  .tabbox .tab1 img{
    width:100%;
  }
</style>
<template>
<div>

  <div class="footer">
    <a href="tel:0755-26899888" class="dell">
      <img src="../../assets/images/goodsdetail/goodsdetail_08.png" alt="">
      <p>咨询</p>
    </a>
    <span class="dell" :class="{on:iscollect}" @click="collect">
      <span class="block">&nbsp;</span>
      <p>收藏</p>
    </span>
    <a  class="willdrive" @click="bookDrive">预约看车</a>
    <a  class="book" @click="payBook">立即订车¥{{detailData.deposit}}</a>
  </div>
  <div class="page">
    <!--边栏-->
    <div class="page-swipe">
      <span class="mintui mintui-back leftico" @click="$store.commit('back')"></span>
      <span class="share" @click="sharemodel"></span>
      <mt-swipe :auto="0">
        <mt-swipe-item :class="'slide'+(index+1)" v-for="(item,index) in data_split.banner"><img :src="item"  alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <!--轮播等-->
    <div class="controlbox">
      <div class="willsec" v-if="countDown.will_sec">
        <img src="../../assets/images/goodsdetail/goodsdetail_05.png" alt="">
        <label v-if="detailData.subject">
          {{detailData.subject}}
        </label>
      </div>
      <!--秒杀-->
      <div class="sec" v-if="countDown.in_sec">
        <div class="priceBox">
          <h2>¥<label for="">{{detailData.seckill_price}}</label>万</h2>
          <div class="down">
            <img src="../../assets/images/goodsdetail/sec.png" alt="">
            <s>¥{{detailData.price}}万</s>
            <span>剩余{{detailData.quantity}}件</span>
          </div>
        </div>
        <div class="countdownBox">
          <p>距结束还剩</p>
          <p>
            <label for="">{{countDown.d}}</label>:
            <label for="">{{countDown.hour}}</label>:
            <label for="">{{countDown.min}}</label>:
            <label for="">{{countDown.sec}}</label>
          </p>
        </div>
      </div>
      <div class="title-select">
        <div class="title">
          <h2>{{detailData.name}}</h2>
        </div>

        <div class="select">
          <div class="block">
            <span class="active">{{data_split.car}}</span>
            <span>{{detailData.version}}</span>
          </div>
        </div>
      </div>
      <div class="goods-tag">
        <img src="../../assets/images/goodsdetail/goodsdetail_06.png" alt="">
        <span class="tag" v-for="item of data_split.label">{{item}}</span>
      </div>
      <div class="price" v-if="is_normal"><label for="">¥<em>{{detailData.price}}</em>万</label></div>
      <div class="selected">
        <div class="chosenlab"><label>颜色 >> </label>{{data_split.selectedColor}}</div>
        <div class="colorblocks">
          <span class="colorblock"
          v-for="(item,key,index) of data_split.colors"
          :class="{on:data_split.is_on[index]}"
          @click="changeCarColor(index,key)">
            <span :style="{background:item}">
            <img src="../../assets/images/goodsdetail/goodsdetail_10.png" v-show="data_split.is_on[index]">
            </span>
          </span>
        </div>
      </div>
      <div class="paper">
        <span>
          <img src="../../assets/images/goodsdetail/goodsdetail_11.png"alt="">
          <label for="">前海承诺</label>
        </span>
         <span>
          <img src="../../assets/images/goodsdetail/goodsdetail_11.png"alt="">
          <label for="">正品新车</label>
        </span>
         <span>
          <img src="../../assets/images/goodsdetail/goodsdetail_11.png"alt="">
          <label for="">价格公正</label>
        </span>
         <span>
          <img src="../../assets/images/goodsdetail/goodsdetail_11.png"alt="">
          <label for="">全国联保</label>
        </span>
      </div>
    </div>
    <!--促销信息-->
    <promotion v-if="data_split.Act1" :Act1="data_split.Act1" :Act2="data_split.Act2"></promotion>
    <myLine>继续拖动,查看图文详情</myLine>
    <div class="tabbox">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">车辆信息</mt-tab-item>
        <mt-tab-item id="2">参数配置</mt-tab-item>
        <mt-tab-item id="3">线下展厅</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div v-html="data_split.content" class="tab1"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="tab2">
            <table v-for="(item,key,index) of parameters">
              <thead >
                <tr>
                  <td colspan="2">{{key}}</td>
                </tr>
              </thead>
              <tbody>
              <tr v-for="dt of item">
                <th>{{dt.children}}</th>
                <td>{{dt.value}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <exibition></exibition>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <buyProcess></buyProcess>
    <recommendCar v-if="data_split.RcmdCars" :rcmd_data="data_split.RcmdCars"></recommendCar>
  </div>
  <alertBox :show="givedata" :goods_id="good_id" :user_id="uid" v-show="givedata.isActive"></alertBox>
  <div class="sharemodel" v-if="ModelVisable">
    <img src="../../assets/images/goodsdetail/sharelog.png" alt="">
    <div class="btn">
      <mt-button size="large" type="primary" @click.native="hideshareModel">朕知道了</mt-button>
    </div>
  </div>
</div>
</template>
<script type="text/babel">
  import buyProcess from '../../components/buyProcess.vue' //购买流程
  import recommendCar from '../../components/recommendCar.vue'//为您推荐
  import promotion from './../../components/promotion.vue'//促销
  import myLine from './../../components/line.vue'//提示线
  import alertBox from './../../components/alertbox.vue'//弹窗
  import exibition from '../../components/myExhibition.vue'//展厅
  import wx from 'weixin-js-sdk'//微信分享

  import { MessageBox,Toast } from 'mint-ui'
  export default {
    name: 'page-navbar',
    components: {
      buyProcess,recommendCar,promotion,myLine,alertBox,exibition
    },
    data() {
      return {
        uid:"",
        selected: "1",
        value: null,
        visible: false,
        givedata:{isActive:false},
        good_id:"",
        detailData:[],
        data_split:{
          banner:[],
          label:[],
          car:"现车",
          colors:[],
          content:"",
          selectedColor:"",
          is_on:[],
          Act1:"",
          Act2:"",
          cate_id:"",
          RcmdCars:""
        },
        countDown:{
          d:"",
          hour:"",
          min:"",
          sec:"",
          will_sec:0,
          in_sec:0,
          type:"0"
        },
        is_normal:1,
        content:[],
        iscollect:0,
        parameters:[],
        ModelVisable:false,
        secCount:""//定时器
      };
    },
    created(){
      const cardetail_id = sessionStorage.getItem("GoodsDetail_ID");//console.log(cardetail_id);
      this.uid = localStorage.getItem("user_id");//console.log(cardetail_id);
      this.good_id = cardetail_id;
      if (!cardetail_id){
        this.good_id = this.$route.query.id;
      }
      if (!this.good_id){
        MessageBox.alert('该车辆已停售').then(action => {
          this.$store.commit("back");
        });
      }
      let myurl = window.location.href;
      let cardetail_link = this.$store.state.ip + this.$store.state.location + "api/seckGoodsDetail";
      this.$http.post(cardetail_link,{goods_id:this.good_id,url:myurl,user_id:this.uid},{emulateJSON:true})
        .then(response => {
          console.log("详情",response.body);
          this.detailData = response.body.goods;
          this.data_split.banner = this.detailData.thumb.split(",");
          this.data_split.label = this.detailData.label.split(",");
          if (!this.detailData.iscurrent) this.data_split.car = "非现车";
          this.data_split.colors = this.detailData.colors;
          this.data_split.content = this.detailData.content;
          this.iscollect = parseFloat(this.detailData.is_collect);
          let obj = this.data_split.colors;
          for (var i = 0; i < Object.keys(obj).length; i++) {
            this.data_split.is_on.push(false);
          }
          this.$set(this.data_split.is_on,0,true);//首个颜色默认选中
          const log = [];
          for(var key in this.data_split.colors){
            log.push(key)
          }
          this.data_split.selectedColor = log[0];
          if(this.detailData.seckill_id){
            this.secCount = setInterval(()=>{
              const nowDate = new Date();
              const startDate = new Date(this.detailData.start_time*1000);
              const endDate = new Date(this.detailData.end_time*1000);
              const t = startDate.getTime() - nowDate.getTime(); //t>0处于开始前
              const e = endDate.getTime() - nowDate.getTime(); //t<0且e>0处于秒杀
              if(t){
                //秒杀状态:即将秒杀=>
                this.countDown.will_sec = 1;
                this.countDown.in_sec = 0;
                this.is_normal = 1;
                let day=Math.floor(t/1000/60/60/24);
                let hour=Math.floor(t/1000/60/60%24);
                let min=Math.floor(t/1000/60%60);
                let sec=Math.floor(t/1000%60);
                if (day==0 && hour==0 && min==0 && sec<=1){
                  location.reload()
                }
                this.countDown.type = 0;//普通状态
              }
              if (t<0 && e>0) {
                //秒杀状态:处于秒杀=>
                this.countDown.will_sec = 0;
                this.countDown.in_sec = 1;
                this.is_normal=0;

                let d=Math.floor(e/1000/60/60/24);
                let hour=Math.floor(e/1000/60/60%24);
                let min=Math.floor(e/1000/60%60);
                let sec=Math.floor(e/1000%60);
                d < 10 ? this.countDown.d = "0" + d : this.countDown.d = d;
                hour < 10 ? this.countDown.hour = "0" + hour:this.countDown.hour = hour;
                min < 10 ? this.countDown.min = "0" + min:this.countDown.min = min;
                sec < 10 ? this.countDown.sec = "0" + sec:this.countDown.sec = sec;
                this.countDown.type = 1;//秒杀状态
              }
              if(e<0){
                //秒杀状态:秒杀结束=>
                this.countDown.will_sec = 0;
                this.countDown.in_sec = 0;
                this.is_normal=1;
                this.countDown.type = 0;
              }
              console.log("1321")
            },1000);
          }else{
            this.is_normal=1;
          }

          //微信分享
          const mywx = response.body.wx;
          wx.config({
            debug: false,
            appId: mywx.appId,
            timestamp: mywx.timestamp,
            nonceStr: mywx.nonceStr,
            signature: mywx.signature,
            jsApiList: [
              // 所有要调用的 API 都要加到这个列表中
              'checkJsApi',
              //'openLocation',               //打开当前位置
              //'getLocation',                //提示是否获取当前位置
              'onMenuShareTimeline',
              'onMenuShareAppMessage'
            ]
          });
          let title = this.detailData.name;
          let link = window.location.href+'?id='+this.good_id;
          let imgUrl  = this.data_split.banner[0];
          wx.ready(function () {
            wx.checkJsApi({
              jsApiList: [
                //'getLocation',
                'onMenuShareTimeline',
                'onMenuShareAppMessage'
              ],
              success: function (res) {
                //alert(JSON.stringify(res));
              }
            });
            //分享给朋友

            wx.onMenuShareAppMessage({
              title:title,
              desc: '',
              link: link,
              imgUrl: imgUrl,
              trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                //alert('用户点击发送给朋友');
              },
              success: function (res) {
                // alert('已分享');
              },
              cancel: function (res) {
                // alert('已取消');
              },
              fail: function (res) {
                // alert(JSON.stringify(res));
              }
            });
            //分享朋友圈
            wx.onMenuShareTimeline({
              title:title,
              desc: '',
              link: link,
              imgUrl: imgUrl,
              trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                // alert('用户点击分享到朋友圈');
              },
              success: function (res) {
                // alert('已分享');
              },
              cancel: function (res) {
                // alert('已取消');
              },
              fail: function (res) {
                // alert(JSON.stringify(res));
              }
            });
          });

          let getRcmd_link = this.$store.state.ip + this.$store.state.location + "api/forYouRec";
          let cate = response.body.goods.cate_id;
          this.$http.post(getRcmd_link,{cate_id:cate},{emulateJSON:true})
            .then(response => {
              console.log("推荐",response.body);
              //this.data_split.Act = response.body.promotion;
              if (response.body.recommend) {
                this.data_split.RcmdCars = response.body.recommend;
              }
            }, response => {});

        }, response => {});

      let getAct_link = this.$store.state.ip + this.$store.state.location + "api/promotion";
      this.$http.post(getAct_link,{goods_id:cardetail_id},{emulateJSON:true})
        .then(response => {
          console.log("促销",response.body);
          //this.data_split.Act = response.body.promotion;
          if (response.body.promotion) {
            this.data_split.Act1 = response.body.promotion[0];
            this.data_split.Act2 = response.body.promotion[1];
          }
        }, response => {});

      let getAttr_link = this.$store.state.ip + this.$store.state.location + "api/parameter";
      this.$http.post(getAttr_link,{goods_id:cardetail_id},{emulateJSON:true})
        .then(response => {
          console.log("参数",response.body);
          this.parameters = response.body.parameters;
        }, response => {});

    },
    methods: {
      bookDrive(){
        this.givedata.isActive=true
      },
      changeCarColor(index,key){
        let obj = this.data_split.is_on;
        for (var i = 0; i < obj.length; i++) {
          //this.data_split.is_on[i]=false;
          this.$set(this.data_split.is_on,i,false);
        }
        this.$set(this.data_split.is_on,index,true);
        this.data_split.selectedColor = key;
      },
      hideshareModel(){
        this.ModelVisable=false
      },
      sharemodel(){
        this.ModelVisable=true
      },
      collect(){
        const ID = localStorage.getItem("user_id");
        if(!ID){
          MessageBox.confirm('请先登录').then(action => {//登录验证
            sessionStorage.setItem("returnLink","/GoodsDetail");
            this.$router.push('/myLogin')
          }).catch(err => {
            return false
          });
        }else{
          let postdata = {
            user_id:ID,
            type:"1",
            type_id:sessionStorage.getItem("GoodsDetail_ID")
          };
          this.iscollect?this.iscollect=0:this.iscollect=1;
          if(ID && this.iscollect){
            let collect_link = this.$store.state.ip + this.$store.state.location + "api/collectAdd";
            this.$http.post(collect_link,postdata,{emulateJSON:true}).then(response=>{
              Toast({
                message: '收藏成功',
                duration: 1500,
                iconClass: 'mintui mintui-success'
              });
            },response=>{})
          }else if(ID && !(this.iscollect)){
            let collectDel_link = this.$store.state.ip + this.$store.state.location + "api/collectDel";
            this.$http.post(collectDel_link,postdata,{emulateJSON:true}).then(response=>{

            },response=>{})
          }
        }
      },
      payBook(){//点击支付
        const ID = localStorage.getItem("user_id");
        if(!ID) {
          MessageBox.confirm('请先登录').then(action => {//登录验证
            sessionStorage.setItem("returnLink","/GoodsDetail");
            this.$router.push('/myLogin')
          }).catch(err => {
            return false
          });
        }else{
          let User_link = this.$store.state.ip + this.$store.state.location + "api/selUserInfo";
          this.$http.post(User_link,{user_id:ID},{emulateJSON:true}).then(response=>{
            console.log(response.body);
            const postdata = {
              user_id:ID,
              goods_id:this.detailData.id,
              name:this.detailData.name,
              price:this.detailData.deposit,
              thumb:this.data_split.banner[0],
              selectedColor:this.data_split.selectedColor,
              user:response.body.user_info
            };
            console.log(postdata);
            let Order_link = this.$store.state.ip + this.$store.state.location + "api/createOrder";
            if(this.detailData.is_oneprice){//一口价状态
              this.countDown.type = 2
            }
            this.$http.post(Order_link,{user_id:ID,goods_id:this.detailData.id,order_type:this.countDown.type},{emulateJSON:true}).then(response=>{
              this.$router.push("/Pay");
              postdata.order_sn = response.body.order_goods[0].order_sn;
              sessionStorage.setItem("paydata",JSON.stringify(postdata));
            },response=>{});

          },response=>{})

        }
      }
    },
    beforeDestroy () {
      clearInterval(this.secCount);
    }
  };
</script>
