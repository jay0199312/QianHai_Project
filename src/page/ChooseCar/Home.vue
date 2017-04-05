<style scoped lang="scss">

  .page-navbar{

    .navbar{

    }
    .navbar~.container{
      margin-top: 3px;
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
      border-bottom:1px solid #eee;
      padding:10px;
      box-sizing:borderbox;
      -webkit-box-sizing:borderbox;
      .src_none{
        color: #999;
        font-size:12px;
        margin: .2rem auto;
        display: block;
        text-align: center;
      }
      .src_block{
        padding: .2rem;
        border: 1px solid #eee;
        display: inline-block;
        overflow: hidden;
        max-width:3rem;
        font-size:14px;
        border-radius:.125rem;
        color: #666;
        margin-right: .15rem;
        margin-bottom: .1rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:active{
           color: #fff;
           background: #3aa9fd;
         }
      }
      .btn{
        color: #999;
        border:1px solid #ccc;
        padding: .3rem .5rem;
        margin:0 .2rem;
        margin-bottom:.1rem;
        border-radius:5px;
        display: inline-block;
        &.on{
           color: #1060c6;
           border-color: #1060c6;
         }
      }
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

<template>
  <div class="">
    <div class="page-navbar">
      <mt-header  title="选车"></mt-header>
      <div class="navbar">
        <mt-navbar class="page-part" v-model="selected">
          <mt-tab-item id="1">按品牌</mt-tab-item>
          <mt-tab-item id="2">按条件</mt-tab-item>
        </mt-navbar>
      </div>
      <div class="container">
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <carnamelist></carnamelist>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <p>最近看过</p>
            <div class="cell" >
              <span class="src_none" v-if="!SRC">暂无历史记录...</span>
              </span><span class="src_block" v-for="item of SRC" @click="SRC_detail(item.id)">{{item.name}}</span>
            </div>
            <p>价格</p>
            <div class="rangeCell" >
             <div class="transparent-button-1 slide-opacity-in-bottom">
                 <!-- <p>请调整购车预算</p> -->
                 <div class="budget-price" data-min="40" data-max="61">{{less}}-{{more}}万</div>
                 <div class="budget-price-choose">
                     <span class="min-budget">0</span>
                     <div id="ScrollToChoose" class="Scroll-to-choose">
                         <div class="price-choose-bar" ref="line"></div>
                         <div class="price-choose-spacing"  :style="{width:lineWidth+'%',left:less+'%'}"></div>
                         <div class="price-choose-slider" ref="thumb" :style="{left: position+'%'}"><div></div></div>
                         <div class="price-choose-slider2" ref="thumb2" :style="{left: position2+'%'}"><div></div></div>
                     </div>
                     <span class="max-budget">100</span>
                 </div>
             </div>
            </div>
            <p>级别</p>
            <carKinds @carkind="getclick"></carKinds>
            <p>驱动</p>
            <div class="cell" >
              <span :class="[{btn:true},{on:item.on}]" v-for="(item,index) of condition.drive" @click="changedrive(index)">{{item.name}}</span>
            </div>
            <p>国家/地区</p>
            <div class="cell" >
              <span :class="[{btn:true},{on:item.on}]" v-for="(item,index) of condition.country" @click="changecountry(index)">{{item.name}}</span>
            </div>
            <div class="cell" >
              <mt-button size="large" type="primary" @click.native="finishChoose">去看看</mt-button>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import carKinds from '../../components/carKind.vue';
  import carnamelist from '../../components/carNameList.vue';
  import draggable from'../../assets/js/draggable';
  import '../../assets/css/ad.css';

  export default{
    name:'page-navbar',
    components:{carnamelist,carKinds},
     data(){
      return{
        selected: '1',
        less:0,
        more:100,
        position:0,
        position2:100,
        lineWidth:100,
        condition:{
          seem:{},
          drive:[
            {
              name:"不限驱动",
              on:true
            },{
              name:"前驱",
              on:false
            },{
              name:"后驱",
              on:false
            },{
              name:"四驱",
              on:false
            }
          ],
          country:[
            {
              name:"不限国家",
              on:true
            },{
              name:"美国",
              on:false
            },{
              name:"中东",
              on:false
            },{
              name:"科威特",
              on:false
            },{
              name:"越南",
              on:false
            },{
              name:"法国",
              on:false
            },{
              name:"德国",
              on:false
            },{
              name:"日本",
              on:false
            }
          ]
        },
        choosenCondition:{},
        SRC:[]
      }
    },
    created(){
      this.SRC = JSON.parse(localStorage.getItem("setRecCar"))
    },
    methods: {
      changedrive (index) {//选择驱动
        var aa =  this.condition.drive[index].on;
        if(!aa){
          for(var i=0;i<this.condition.drive.length;i++){
            this.condition.drive[i].on = false
          }
          this.condition.drive[index].on=true
        }
        this.choosenCondition.drive = this.condition.drive[index].name
      },
      changecountry (index) {//选择国家
        var bb = this.condition.country[index].on;
        if(!bb){
          for(var i=0;i<this.condition.country.length;i++){
            this.condition.country[i].on = false
          }
          this.condition.country[index].on=true
        }
        this.choosenCondition.country = this.condition.country[index].name
      },
      getclick(aa){//选择车型
        this.choosenCondition.carbody=aa.name;
      },
      finishChoose (){//点击去看看
        this.choosenCondition.min	= this.less;
        this.choosenCondition.max = this.more;
        //console.log(this.choosenCondition);
        const choosenCondition = JSON.stringify(this.choosenCondition);
        sessionStorage.setItem("choosenCondition",choosenCondition);
        const link  = this.$store.state.ip + this.$store.state.location + "api/search";
        this.$http.post(link,this.choosenCondition,{emulateJSON:true})
          .then(response => {
            if(response.body.status_code==1){
              const sr = JSON.stringify(response.body);
              sessionStorage.setItem("searchResult",sr);
             /* this.$store.state.searchResult =[];
              this.$store.state.searchResult = response.body;*/
              this.$router.push("/ChooseCarSearchResult");
            }else {
              let instance = this.$toast({message:response.body.result_msg,position: 'bottom'});
              setTimeout(() => {
                instance.close();
              }, 1000);
            }
          }, response => {
            // error callback
          });


      },
      SRC_detail(id){
        sessionStorage.setItem("GoodsDetail_ID",id)
        this.$router.push('/GoodsDetail')
      }
    },
    mounted() {
      const thumb = this.$refs.thumb;
      const thumb2 = this.$refs.thumb2;
      const content = this.$refs.line;

       draggable(thumb, {
        drag: (event) => {
          if (this.disabled) return;
          const contentBox = content.getBoundingClientRect().width;//
          const contentBoxleft = content.getBoundingClientRect().left;//
          const deltaX = Math.floor((event.pageX-contentBoxleft)/contentBox*100);
          this.position = deltaX;
          this.lineWidth = Math.abs(this.more - this.less);

          if (this.position < 0) {
            this.position = 0;
          } else if (this.position > 100) {
            this.position = 100;
          }

          if (this.position > this.position2) {
            this.less = this.position2;
            this.more = this.position
          } else {
            this.less = this.position;
            this.more = this.position2
          }
        }
      });
       draggable(thumb2, {
        drag: (event) => {
          if (this.disabled) return;
          const contentBox = content.getBoundingClientRect().width;//
          const contentBoxleft = content.getBoundingClientRect().left;//
          const deltaX = Math.floor((event.pageX-contentBoxleft)/contentBox*100);
          this.position2 = deltaX;
          this.lineWidth = Math.abs(this.more - this.less);

          if (this.position2 < 0) {
            this.position2 = 0;
          } else if (this.position2 > 100) {
            this.position2 = 100;
          }

          if (this.position > this.position2) {
            this.less = this.position2;
            this.more = this.position
          } else {
            this.more = this.position2;
            this.less = this.position
          }
        }
      });
    }
  }
</script>

