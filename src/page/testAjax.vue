<style scoped lang="scss">

</style>
<template>
    <div>

    </div>
</template>
<script type="text/babel">
    export default{

      data(){
        return {
          data1:122
        }
      },
      created(){

        $.ajax({
         url: 'http://192.168.0.187/index.php/Api/news',
          type: 'post',
          dataType: 'jsonp',
          jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
          jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
          data: {
            say:"hey"
          }
        })
        .done(function(data) {
           console.log(data);
        })
        .fail(function() {
          console.log("error");
        })
      }
    }
</script>
