<style scoped lang="scss">
.my-CarKindlist{
	background: #fff;
	.wraper{
	padding:0.25rem;
	overflow:hidden;
	display: block
	}
	.car-detail{
		margin-left: 2.7rem;
		.car-title{
			font-size:0.45rem;
	    text-align: left;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
		}
		.tag-warm,.tag-primary,.tag-default{
				color: #fff;
				padding:0.125rem;
				display:inline-block;
				border-radius:0.075rem
		}
	 .tag-warm{
			background: rgb(247,216,91);
		}
		.tag-primary{
			background: rgb(254,155,121);
		}
		.tag-default{
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
  <div class="my-CarKindlist">
  	<div class="wraper">
			<img src="http://121.40.78.200/pic/shop/article/98769753226215688556746.jpg" alt="" class="car-pic">
			<div class="car-detail">
				<p class="car-title" slot="title">穿越者2016超级SUV穿越者2016超级SUV</p>
				<div class="tag-box">
					<label for="" class="tag-warm" slot="tag">动力十足</label>
					
				</div>
				<p class="car-price">
					¥<span class="big">39.5</span>万起
				</p>
			</div>
		</div>
  </div>
</template>
<script type="text/babel">
    export default{
      name:'my-CarKindlist',
      
    }
</script>
