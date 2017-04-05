<style scoped lang="scss">
  .header{
    background: #e9e9e9;
    border-bottom:1px solid #ddd;
    color: #333;
    position: fixed;
    top:0;
    z-index:2;
    width:100%;
  }
  .title{
    margin-top:1rem;
    padding:.25rem;
    h2{
      font-size:22px;
      font-weight: bold;
    }
    p{
      padding: .25rem 0;
    }
    label{
      float: right;
    }
  }
  .detail{
    overflow: hidden;
    display: block;
    padding:0 .25rem;
    img{
      max-width: 100%;
    }
  }
  .otherDetail{
    margin:.5rem .25rem;
    background: #fff;
    border-radius:3px;
    display: block;
    >p{
       color: #e76c6b;
       padding:.25rem;
       font-weight: bold;
       border-bottom:1px solid #eee;
     }
     li{
       padding: .25rem;
       padding-left:0;
       margin-left:.25rem;
       border-bottom:1px solid #eee;
       display: flex;
       display: -webkit-flex;
       img{
         width:2.5rem;
         height:auto;
       }
       .news{
         color: #999;
         flex:1;
         -webkit-flex: 1;
         margin-left:.25rem;
         .tt{
           color: #000;
           font-size:14px;
           height: 0.96rem;
           overflow: hidden;
           text-overflow: ellipsis;
           display: -webkit-box;
           -webkit-line-clamp: 2;
           -webkit-box-orient: vertical;
           margin-bottom:.2rem;
         }
       }
       &:last-child{
          border-bottom:0;
        }
     }
  }
  .ctr{
    position: fixed;
    z-index: 3;
    width:3rem;
    right:0;
    top:0;
    background: #e9e9e9;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.9);
    p{
      padding:.25rem;
      font-size:16px;
      &:active{
         background-color: #e1e1e1;
       }
    }
    .collect{
      background: url("../../assets/images/goodsdetail/goodsdetail_09.png") no-repeat .5REM center;
      -webkit-background-size:.6rem ;
      background-size:.6rem ;
      padding-left:1.3rem;
      &.on{
         background: url("../../assets/images/goodsdetail/goodsdetail.png") no-repeat .5REM center;
         -webkit-background-size:.6rem ;
         background-size:.6rem ;
       }
    }
    .share{
      padding-left:1.3rem;
      background: url("../../assets/images/goodsdetail/share.png") no-repeat .5REM center;
      -webkit-background-size:.5rem ;
      background-size:.5rem ;
    }
  }
  .sharelog{
    position: fixed;
    z-index: 10;
    background: rgba(0,0,0,0.8);
    width:100%;
    height:100%;
    display: block;
    top:0;
    left:0;
    img{
      width: 8rem;
      float: right;
      display: block;
    }
    .btn{
      padding:1rem;
      clear: both;
    }
  }
</style>
<template>
    <div class="newsDetail">
      <mt-header title="" :class="header">
        <mt-button icon="back" slot="left" @click.native="$router.go(-1)"></mt-button>
        <mt-button icon="more" slot="right" @click.native="is_show=1"></mt-button>
      </mt-header>
      <div class="ctr" v-show="is_show">
        <p class="collect" :class="{on:iscollect}" @click="collectNews">收藏</p>
        <p class="share" @click="shareNews">分享</p>
      </div>
      <div class="title">
        <h2>{{detail.title}}</h2>
        <p>
          <span>车网通</span>
          <span>原创</span>
          <span>{{detail.author}}</span>
          <label for="">{{detail.add_date}}</label>
        </p>
      </div>
      <div class="detail" v-html="detail.content" @click="hide"></div>
      <div class="otherDetail">
        <p>相关资讯</p>
        <ul>
          <li v-for="item of otherNews" @click="loadNews(item.id)">
            <div class="newsimg">
              <img :src="item.thumb" alt="">
            </div>
            <div class="news">
              <p class="tt">{{item.title}}</p>
              <p>车网通 {{item.add_date}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="sharelog" v-show="log">
        <img src="../../assets/images/goodsdetail/sharelog.png" alt="">
        <div class="btn">
          <mt-button type="primary" size="large" @click.native="hideLog">朕知道到了</mt-button>
        </div>
      </div>
    </div>
</template>
<script type="text/babel">
  import wx from 'weixin-js-sdk'//微信分享
  import { MessageBox,Toast } from 'mint-ui'
    export default{
      data(){
        return {
          detail:"",
          otherNews:[],
          header:"header",
          iscollect:0,
          is_show:0,
          news_id:"",
          log:0
        }
      },
      created(){
        this.loadNews();
      },
      methods:{
        loadNews(news_id){
          let uid = localStorage.getItem('user_id');
          this.news_id = uid;
          if (news_id){
            sessionStorage.setItem('newsID',news_id);
          }
          let Id = sessionStorage.getItem('newsID');
          let detailLink = this.$store.state.ip + this.$store.state.location + "api/newsDetail";
          let myurl = window.location.href;
          this.$http.post(detailLink,{notice_id:Id,user_id:uid,url:myurl},{emulateJSON:true}).then(
            function (rsp) {
              console.log(rsp.body);
              this.detail = rsp.body.news_detail[0];
              this.iscollect = parseInt(this.detail.is_collect);

              //微信分享
              const mywx = rsp.body.wx;
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
              let title = this.detail.title;
              let link = window.location.href+'?id='+this.news_id;
              let imgUrl  = this.detail.thumb;
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

            }
            ,function (response) {
              // 处理失败的结果
            });
          let newsRecommend = this.$store.state.ip + this.$store.state.location + "api/newsRecommend"
          this.$http.post(newsRecommend,{notice_id:Id},{emulateJSON:true}).then(
            function (rsp) {
              console.log(rsp.body);
              this.otherNews = rsp.body.news_recommend;
            }
            ,function (response) {
              // 处理失败的结果
            });
        },
        collectNews(){
          const ID = localStorage.getItem("user_id");
          if(!ID){
            MessageBox.confirm('请先登录').then(action => {//登录验证
              sessionStorage.setItem("returnLink","/NewsDetail");
              this.$router.push('/myLogin')
            }).catch(err => {
              return false
            });
          }else{
            let postdata = {
              user_id:ID,
              type:"2",
              type_id:sessionStorage.getItem("newsID")
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
                this.is_show = 0;
              },response=>{})
            }else if(ID && !(this.iscollect)){
              let collectDel_link = this.$store.state.ip + this.$store.state.location + "api/collectDel";
              this.$http.post(collectDel_link,postdata,{emulateJSON:true}).then(response=>{
                this.is_show = 0;
              },response=>{})
            }
          }
        },
        hide(){
          this.is_show = 0;
        },
        shareNews(){
          this.log = 1;this.is_show = 0;
        },
        hideLog(){

          this.log = 0;
        }
      }
    }
</script>
