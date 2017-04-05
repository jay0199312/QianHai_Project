<style scoped lang="scss">
.my-CarKindlist{
	background: #fff;
	.wraper{
    padding:0.25rem;
    overflow:hidden;
    display: block;
	}
	.car-detail{
		margin-left: 2.7rem;
		.car-title{
			font-size:0.45rem;
	    text-align: left;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
      margin-bottom:0.1rem;
		}
		.tag-warm,.tag-primary,.tag-normal{
      color: #fff;
      padding:0.125rem;
      display:inline-block;
      border-radius:0.075rem;
      margin:0 5px;
		}
	 .tag-warm{
			background: rgb(247,216,91);
		}
		.tag-primary{
			background: rgb(254,155,121);
		}
		.tag-normal{
			background: rgb(121,202,255);
		}
	}
	.car-pic{
		width: 2.5rem;
		height: 1.875rem;
		float: left;
	}
	.car-price{
		color: red;
		margin:0.125rem 0;
		.big{
			font-size:0.4rem;
		}
	}
	&:after{
		content:'';
		background: #eaeaea;
		width:100%;
		height:1px;
		display:block;
    transform: scale(1,0.5);
	}
}
</style>
<template>
  <div class="my-CarKindlist" @click="GoDetail">
  	<div class="wraper">
			<img :src="this.src" alt="" class="car-pic">
			<div class="car-detail">
				<p class="car-title"><slot name="title"></slot></p>
				<div class="tag-box">
          <label  v-for="(item,index) of this.labels" :class="tag_class[index]">{{item}}</label>
				</div>
				<p class="car-price">
					¥<span class="big"><slot name="carPrice"></slot></span>万起
				</p>
			</div>
		</div>
  </div>
</template>
<script type="text/babel">
    export default{
      name:'myCarKindlist',
      props:['src','link_id','carPrice','labels'],
      data(){
        return{
          tag_class:['tag-warm','tag-primary','tag-normal']
        }
      },
      methods:{
        GoDetail(){
          sessionStorage.setItem("GoodsDetail_ID",this.link_id)
          this.$router.push("/GoodsDetail")
        }
      }
    }
</script>
