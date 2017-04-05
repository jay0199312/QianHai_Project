<template>
  <div>
    <div class="page-header-main">

      <mt-header title="选择品牌" class="my-car-head">
        <router-link to="myCar" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>

      </mt-header>
    </div>

    <p>热门推荐</p>
    <div class="hot-car">
      <div class="carblock" v-for="(item,index,key) in alphabet.is_hot" @click="hotPop(index,item.thumb)">
        <img :src="item.thumb" alt="" class="carlogo">
        <label for="" class="carname">{{item.name}}</label>
        {{$store.state.count}}
      </div>
    </div>
    <div class="page-indexlist-wrapper">
      <mt-index-list>
        <mt-index-section v-for="(item,key) in alphabet.brand_first" :index="key">
          <mt-cell v-for="(cell,index) in item" :title="cell.name" @click.native="normalPop(key,index,cell.thumb)">
            <img slot="icon" :src="cell.thumb" width="24" height="24">
          </mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
    <mt-popup v-model="popupVisible3" position="right" class="mint-popup-3" :modal="true">
      <div class="singleCarlist" v-if="this.is_beginning">
        <div class="header">
          <img :src="this.brandList.brand.brand_thumb" alt="">
          <label>{{this.brandList.brand.brand_name}}</label>
        </div>
        <p>进口{{this.brandList.brand.brand_name}}</p>
        <ul>
          <li v-for="item of this.brandList.brand_list" @click="goDetail(item.id,item.name)">
            <img :src="item.thumb" alt="">
            <div class="detail">
              <p>{{item.name}}</p>

            </div>
          </li>

        </ul>
      </div>
      <!-- <mt-button @click.native="popupVisible3 = false" size="large" type="primary">关闭 popup</mt-button>-->
    </mt-popup>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        popupVisible3: false,
        alphabet:[],
        brandList:[],
        is_beginning:false,
        change:'',
      };
    },
    created() {
      this.change = sessionStorage.getItem('change');
      console.log(this.change);

      var brand = this.$store.state.ip + this.$store.state.location +"api/brand";
      this.$http.get(brand)
        .then(response => {
          this.alphabet =response.body;
          //console.log('cc',this.alphabet)
        }, response => {
          // error callback
        });
    },
    methods:{
      hotPop(index,thumb){
        this.popupVisible3 = true;
        const hot_id = this.alphabet.is_hot[index].id;
        this.carlogo = thumb;
        this.getPopData(hot_id);
        /*console.log(hot_id)*/
      },
      normalPop(key,index,thumb){
        this.popupVisible3 = true;
        const ad = eval("this.alphabet.brand_first."+key);
        const bid = ad[index].id;
        console.log('bid',bid);
        sessionStorage.setItem("brand_id",bid);
        this.carlogo = thumb;
        this.getPopData(bid);
        /*console.log("key",key);
         console.log("index",index);
         console.log(ad[index].id)*/
      },
      getPopData(bid){
        var brandList =  this.$store.state.ip + this.$store.state.location + "api/brandList";
        this.$http.post(brandList,{brand_id:bid},{emulateJSON:true}) //{emulateJSON:true}取数据时候必须传给后台
          .then(response => {
            this.brandList = response.body;
            this.is_beginning = true;
            //console.log("ad",this.brandList )
          }, response => {
            // error callback
          });
      },
      goDetail(id,name){
        let carobj = {
          id:id,
          name:name
        };

        sessionStorage.setItem("GoodsDetail_ID",id);
        if(this.change==null){
          this.$router.push("/carMessage")
        }
        if(this.change=='change'){
          sessionStorage.setItem('changeCar','changeCar');
          this.$router.push('/carMessageChange')
        }

      },

    }
  };

</script>

<style>
  .my-car-head{
    background-color: #ffffff;height: 1.2rem;font-size: 0.38rem;border-bottom: 1px solid #ebebeb;color: #4a4a4a;
  }
</style>
<style scoped lang="scss">
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
  .mint-popup-3 {
    width: 63%;
    height: 100%;
    background-color: #fff;
    box-shadow: -5px 0px 5px rgba(0,0,0,0.2);
  }
  /*pop*/
  .singleCarlist{
  .header {
    margin:0.15rem;
  &>img {
      width: 1.5rem;
      vertical-align: middle;
    }
  &> label {
       font-size: .5rem;
     }
  }
  &>ul{
      max-height: 12rem;
      overflow-y:scroll;
  li{
    display:flex;
    display:flex-box;
    padding:0.25rem;
    border-top:1px solid #efefef;
  img{
    width:2.0rem;
    height:1.7rem;
    display:inline-block;
  }
  .detail{
    flex:1;
    -webkit-flex:1;
    padding-left: 0.125rem;
  p{
    background: #fff;
    border-bottom:0;
    padding-right: 0;
  }
  span{
    color: #e73624;
    padding-left: 0.25rem;
  }
  }
  }
  }
  }
</style>
