<style scoped lang="scss">
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
              background:  url(../assets/images/car/car8-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck2{
              background:  url(../assets/images/car/car6-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck3{
              background:  url(../assets/images/car/car2-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck4{
              background:  url(../assets/images/car/car1-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck5{
              background:  url(../assets/images/car/car7-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck6{
              background:  url(../assets/images/car/car4-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck7{
              background:  url(../assets/images/car/car3-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck8{
              background:  url(../assets/images/car/car5-g.png) center center no-repeat;
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
        .carblock.on{
        		p{color:#1867d6;}
        	  .ck1{
              background:  url(../assets/images/car/car8.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }

            .ck2{
              background:  url(../assets/images/car/car6.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }

            .ck3{
              background:  url(../assets/images/car/car2.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }

            .ck4{
              background:  url(../assets/images/car/car1.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }

            .ck5{
              background:  url(../assets/images/car/car7.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }

            .ck6{
              background:  url(../assets/images/car/car4.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }

            .ck7{
              background:  url(../assets/images/car/car3.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }

            .ck8{
              background:  url(../assets/images/car/car5.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }

        }
      }
    }
</style>
<template>
    <div class="cell" >
      <!--<div class="car">
        <div class="carblock">
          <div class="carkind ck1"></div>
          <p>两厢轿车</p>
        </div>
        <div class="carblock">
          <div class="carkind ck2"></div>
          <p>三厢轿车</p>
        </div>
        <div class="carblock">
          <div class="carkind ck3"></div>
          <p>SVU</p>
        </div>
      </div>-->
      <div class="car" v-for="(cars,carIndex) of carkinds.car">
        <div class="carblock" :class="{on:item.on}" v-for="(item,itemIndex) of cars.ck" @click="carKind_changeStatus(carIndex,itemIndex)">
          <div :class="item.class" class="carkind"></div>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
</template>
<script type="text/babel">
    export default{
    	name: "carKind",
    	data (){
    		return{
    			carkinds:{
            car:[{
              ck:[{
                class:"ck1",
                on:false,
                name:"两厢"
              },{
                class:"ck2",
                on:false,
                name:"三厢"
              },{
                class:"ck3",
                on:false,
                name:"SUV"
              }]
            },{
              ck:[{
                class:"ck4",
                on:false,
                name:"MPV"
              },{
                class:"ck5",
                on:false,
                name:"旅行车"
              },{
                class:"ck6",
                on:false,
                name:"跑车"
              }]
            },{
              ck:[{
                class:"ck7",
                on:false,
                name:"皮卡"
              },{
                class:"ck8",
                on:true,
                name:"不限车身"
              }]
            }]
    			}
    		}
    	},
    	methods:{
    		carKind_changeStatus(carIndex,itemIndex){
          var ifon = 	this.carkinds.car[carIndex].ck[itemIndex].on;

          if(!ifon){
            for (var i = 0; i < this.carkinds.car.length; i++) {
              for(var j = 0, length2 = this.carkinds.car[i].ck.length; j < length2; j++){
                this.carkinds.car[i].ck[j].on = false;
              }
            }
            this.carkinds.car[carIndex].ck[itemIndex].on = true;
          }
          this.$emit("carkind",{name:this.carkinds.car[carIndex].ck[itemIndex].name})
    		}
    	}
    }
</script>
