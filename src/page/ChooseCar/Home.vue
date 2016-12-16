<style scoped lang="scss">
  .page-navbar{
    top:87px;
    position:absolute;
    width:100%;
    .navbar{
      position: fixed;
      width:100%;
      top: 40px;
      z-index: 10;
    }
    .navbar~.container{
      margin-bottom: 48px;
    }
    .hot-car{
      position: relative;
      display: flex;
      height: 56px;
      background: #fff;
      border-bottom: 1px solid #d4d4d4;
      padding:5px;
      .mint-tabbar{
        background: #fff;
      }
      .carblock{
        img{
          width:45%;
          margin:auto;
          display: block;
        }
        label{
          text-align: center;
          display: block;
          font-size: 14px;
          margin-top:3px;
        }
      }
    }
    p{
      display: block;
      margin: 0px;
      background: #fafafa;
      padding: 10px;
      border-bottom:1px solid #ededed;
    }
    .cell{
      background: #fff;
      padding:10px;
      box-sizing:borderbox;
      -webkit-box-sizing:borderbox;
      .car{
        display: flex;
        display:-webkit-box;
        width:100%;
        .carblock{
          flex: 3;

          width:33%;

            img{
              width:60%;
              margin: auto;
              display: block;
            }
            .carkind{
              width:60%;
              height: 50px;
              display: block;
              margin: auto;
            }
            .ck1{
              background:  url(../../assets/images/car/car8-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck1.on{
              background:  url(../../assets/images/car/car8.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck2{
              background:  url(../../assets/images/car/car6-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck2.on{
              background:  url(../../assets/images/car/car6.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck3{
              background:  url(../../assets/images/car/car2-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck3.on{
              background:  url(../../assets/images/car/car2.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck4{
              background:  url(../../assets/images/car/car1-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck4.on{
              background:  url(../../assets/images/car/car1.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck5{
              background:  url(../../assets/images/car/car7-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck5.on{
              background:  url(../../assets/images/car/car7.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck6{
              background:  url(../../assets/images/car/car4-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck6.on{
              background:  url(../../assets/images/car/car4.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck7{
              background:  url(../../assets/images/car/car3-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck7.on{
              background:  url(../../assets/images/car/car3.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck8{
              background:  url(../../assets/images/car/car5-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck8.on{
              background:  url(../../assets/images/car/car5.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            p{
              border: none;
              background: #fff;
              text-align: center;
              color: #666;
            }
        }
      }
    }
  }
</style>
<style>
  .rangeCell .mt-range {
    width: 100%;
  }
  .rangeCell .mint-cell-value {
    flex: 2.50;
    position: relative;
  }
</style>
<template>
  <div class="">
    <mt-header fixed title="选车"></mt-header>

      <!-- tab-container -->
    <div class="page-navbar">
      <div class="navbar">
        <mt-navbar class="page-part" v-model="selected">
          <mt-tab-item id="1">按品牌</mt-tab-item>
          <mt-tab-item id="2">按条件</mt-tab-item>
        </mt-navbar>
      </div>

      <mt-tabbar fixed>
        <mt-tab-item id="外卖">
          <img slot="icon" src="../../assets/logo.png">
          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="../../assets/logo.png">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="../../assets/logo.png">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="../../assets/logo.png">
          我的
        </mt-tab-item>
      </mt-tabbar>

      <div class="container">
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <p>热门推荐</p>
            <div class="hot-car">
              <div class="carblock">
                <img src="../../assets/logo.png" alt="" class="carlogo">
                <label for="" class="carname">车名</label>
              </div>
              <div class="carblock">
                <img src="../../assets/logo.png" alt="" class="carlogo">
                <label for="" class="carname">车名</label>
              </div>
              <div class="carblock">
                <img src="../../assets/logo.png" alt="" class="carlogo">
                <label for="" class="carname">车名</label>
              </div>
              <div class="carblock">
                <img src="../../assets/logo.png" alt="" class="carlogo">
                <label for="" class="carname">车名</label>
              </div>
              <div class="carblock">
                <img src="../../assets/logo.png" alt="" class="carlogo">
                <label for="" class="carname">车名</label>
              </div>
            </div>
            <carnamelist></carnamelist>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <p>最近看过</p>
            <div class="cell" >
              <mt-button type="default" size="small">default</mt-button>
              <mt-button type="default" size="small">default</mt-button>
            </div>
            <p>价格</p>
            <div class="rangeCell" >
              <mt-cell v-for="item in cells2" :title="item.title" :label="'value:' + item.value">
                <mt-range v-model="item.value" :min="item.min || 0" :max="item.max || 100" :step="item.step || 1" :bar-height="item.barHeight || 1" :disabled="item.disabled">
                  <div slot="start" v-if="item.start">{{ item.start }}</div>
                  <div slot="end" v-if="item.end">{{ item.end }}</div>
                </mt-range>
              </mt-cell>
            </div>
            <p>级别</p>
            <div class="cell" >

              <div class="car">
                <div class="carblock">
                  <div class="carkind ck1"></div>
                  <!-- <img src="../../assets/images/car/car8-g.png" alt=""> -->
                  <p>两厢轿车</p>
                </div>
                <div class="carblock">
                  <div class="carkind ck2"></div>
                  <!-- <img src="../../assets/images/car/car6-g.png" alt=""> -->
                  <p>三厢轿车</p>
                </div>
                <div class="carblock">
                  <div class="carkind ck3"></div>
                  <!-- <img src="../../assets/images/car/car2-g.png" alt=""> -->
                  <p>SVU</p>
                </div>
              </div>
              <div class="car">
              <div class="carblock">
                <div class="carkind ck4"></div>
                <!-- <img src="../../assets/images/car/car1-g.png" alt=""> -->
                <p>MPV</p>
              </div>
                <div class="carblock">
                  <div class="carkind ck5"></div>
                  <!-- <img src="../../assets/images/car/car7-g.png" alt=""> -->
                  <p>旅行车</p>
                </div>

                <div class="carblock">
                  <div class="carkind ck6"></div>
                  <!-- <img src="../../assets/images/car/car4-g.png" alt=""> -->
                  <p>跑车</p>
                </div>
              </div>
              <div class="car">
                <div class="carblock">
                  <div class="carkind ck7"></div>
                  <!-- <img src="../../assets/images/car/car3-g.png" alt=""> -->
                  <p>皮卡</p>
                </div>
                <div class="carblock">
                  <div class="carkind ck8"></div>
                  <!-- <img src="../../assets/images/car/car5-g.png" alt=""> -->
                  <p>不限</p>
                </div>
              </div>
            </div>
            <p>驱动</p>
            <div class="cell" >
              <mt-button type="default" size="small">default</mt-button>
              <mt-button type="default" size="small">default</mt-button>
            </div>
            <p>国家/地区</p>
            <div class="cell" >
              <mt-button type="default" size="small">default</mt-button>
              <mt-button type="default" size="small">default</mt-button>
            </div>
            <div class="cell" >
              <mt-button size="large" type="primary">去看看</mt-button>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>

  </div>
</template>

<script>
  import carnamelist from '../../components/carNameList.vue';

  export default{
    name:'page-navbar',
    components:{carnamelist},
    methods: {
      change:function () {

      }
    },
    mounted() {
      this.cells2 = [ {
        title: '定义区间',
        value: this.value5,
        start: '20',
        end: '180',
        step: 20,
        min: 20,
        max: 180
      } ];
      $('.carblock').click(function () {
        if ($(this).children('.carkind').hasClass('on')) {
          $(this).children('.carkind').removeClass('on')
        }else{
          $(this).children('.carkind').addClass('on')
        }
      })
    },
    data(){
      return{
        selected: '1',
        test:'primary',
        value1: 0,
        value2: 20,
        value3: 0,
        value4: 0,
        value5: 10,
        value6: 0,
        value7: 40,
        value8: 14,
        cells1: null,
        cells2: null,
        cells3: null,
        /*carkinds:[
          {line1:[
            {
              src:'../../assets/images/car/car8-g.png',
              src1:'../../assets/images/car/car8.png',
              title:'两厢轿车',
              index:1
            },{
              src:'../../assets/images/car/car6-g.png',
              src1:'../../assets/images/car/car6.png',
              title:'三厢轿车',
              index:2
            },{
              src:'../../assets/images/car/car2-g.png',
              src1:'../../assets/images/car/car2.png',
              title:'SVU',
              index:3
            }
          ]},
          {line2:[
            {
              src:'../../assets/images/car/car1-g.png',
              src1:'../../assets/images/car/car1.png',
              title:'MPV',
              index:1
            },{
              src:'../../assets/images/car/car7-g.png',
              src1:'../../assets/images/car/car7.png',
              title:'旅行车',
              index:2
            },{
              src:'../../assets/images/car/car4-g.png',
              src1:'../../assets/images/car/car4.png',
              title:'跑车',
              index:3
            }
          ]},
          {line3:[
            {
              src:'../../assets/images/car/car3-g.png',
              src1:'../../assets/images/car/car3.png',
              title:'皮卡',
              index:1
            },{
              src:'../../assets/images/car/car5-g.png',
              src1:'../../assets/images/car/car5.png',
              title:'不限',
              index:2
            }
          ]}
        ]*/
      }

    }
  }
</script>

