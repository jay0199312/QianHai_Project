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
            .ck1.on{
              background:  url(../assets/images/car/car8.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck2{
              background:  url(../assets/images/car/car6-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck2.on{
              background:  url(../assets/images/car/car6.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck3{
              background:  url(../assets/images/car/car2-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck3.on{
              background:  url(../assets/images/car/car2.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck4{
              background:  url(../assets/images/car/car1-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck4.on{
              background:  url(../assets/images/car/car1.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck5{
              background:  url(../assets/images/car/car7-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck5.on{
              background:  url(../assets/images/car/car7.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck6{
              background:  url(../assets/images/car/car4-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck6.on{
              background:  url(../assets/images/car/car4.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck7{
              background:  url(../assets/images/car/car3-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck7.on{
              background:  url(../assets/images/car/car3.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck8{
              background:  url(../assets/images/car/car5-g.png) center center no-repeat;
              -webkit-background-size:100%;
              background-size:100%;
            }
            .ck8.on{
              background:  url(../assets/images/car/car5.png) center center no-repeat;
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
</style>
<template>
    <div class="cell" >
      <div class="car">
        <div class="carblock" v-for="(value, key, index) of carkinds">
          <div :class="value.ck[index]">{{index}}</div>
          <!-- <img range="../assets/Spray/car/car8-g.png" alt=""> -->
          <p>两厢轿车</p>
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
    				on:false,
            ck:["ck1","ck2","ck3","ck4","ck5","ck6","ck7"]
    			}
    		}
    	}
    }
</script>
