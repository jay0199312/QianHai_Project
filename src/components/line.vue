<style scoped lang="scss">
 .line{
    display:flex;
    display:-webkit-flex;
    padding:0 1.05rem;
    div{
      height:1px;
      flex:3;
      -webkit-flex:3;
      background: #d4d4d4;
      margin-top: 0.15rem;
    }
    span{
      margin:0 .5rem;
      color: #999;
    }
  }
</style>
<template>
  <div class="line">
    <div></div> <span><slot></slot></span> <div></div>
  </div>
</template>
<script type="text/babel">
    export default{
    	name:'myline'
    }
</script>
