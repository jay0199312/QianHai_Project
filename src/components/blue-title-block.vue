<style scoped lang="scss">
.buyway{
  .header{
    color: #1867d6;
    border-left:3px solid #1867d6;
    background: #fff;
    padding:0.25rem;
    font-size:16px;
    border-bottom: 1px solid #efefef;
  }
}


</style>
<template>
  <div class="buyway">
    <p class="header"><slot></slot></p>
  </div>
</template>
<script type="text/babel">
    export default{
    	name:'titleBlock'
    }
</script>
