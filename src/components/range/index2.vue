<template>
  <div class="transparent-button-1 slide-opacity-in-bottom">
    <!-- <p>请调整购车预算</p> -->
    <div class="budget-price" data-min="40" data-max="61"></div>
    <div class="budget-price-choose">
      <span class="min-budget">0</span>
      <div id="ScrollToChoose" class="Scroll-to-choose" ref="content">
        <div class="price-choose-bar"></div>
        <div class="price-choose-spacing" ></div>
        <div class="price-choose-slider" ref="thumb" ><div></div></div>
        <div class="price-choose-slider2" ref="thumb1"><div></div></div>
      </div>
      <span class="max-budget">1000</span>
    </div>
  </div>
</template>

<style>

</style>

<script type="text/babel">
  import draggable from './draggable';

  export default {
    name: 'jay-range',
    data(){
      return {
        value:100,
        step:1,
        min:0,
        max:100,
        nowprogress:0,
        nowprogress1:100,
        priceChooseSlider:0,
        priceChooseSlider2:10
      }
    },
    computed: {
      progress() {
        const value = this.value;
        if (typeof value === 'undefined' || value === null) return 0;
        return Math.floor((value - this.min) / (this.max - this.min) * 100);
      }
    },
    mounted() {
      //购车预算选择
      // var price_choose_slider = $(".price-choose-slider");
      var $ScrollToChoose = $("#ScrollToChoose");


      if ($ScrollToChoose.html()) {
        var price_choose_slider = $ScrollToChoose.find(".price-choose-slider");
        var price_choose_slider2 = $ScrollToChoose.find(".price-choose-slider2");
        var price_choose_spacing = $ScrollToChoose.find(".price-choose-spacing");

        //价格选择条
        var price_text_small = 1, price_text_big = 100, spacing_width = 100;
        var Left = $ScrollToChoose.offset().left;
        var Width = price_choose_spacing.width();

        price_choose_slider.on("touchmove", function (e) {

          //获取各种参数
          var page_X = e.changedTouches[0].clientX;
          //计算部分
          var roundNum = page_X - Left <= 0 ? 0 : page_X - Left;//第一个拖拽点长度
          //var percent = (roundNum / Width >= 1 ? 1 : (page_X - Left) / Width) <= 0 ? 0 : (roundNum / Width >= 1 ? 1 : (page_X - Left) / Width);
          var percent = roundNum / Width * 100;//第一个拖拽点百分比(小数)
          var slide_left_2 = parseInt(price_choose_slider2.css("left"));//第二个拖拽点百分比
          slide_left_2 = slide_left_2 >100 ? 100 : parseInt(price_choose_slider2.css("left"));

          if(percent>=100){
            percent = 100;
          } else if(percent<=0){
            percent = 0;
          }
          price_text_small = Math.ceil(percent) == 0 ? 1 : Math.ceil(percent);
          price_text_big = Math.ceil(slide_left_2) == 0 ? 1 : Math.ceil(slide_left_2);
          spacing_width = Math.abs(percent - slide_left_2);

          //输出部分
          price_choose_spacing.width(spacing_width + "%");
          price_choose_slider.css({"left": percent + "%"});
          if (price_text_small <= price_text_big) {
            /////////////////////////////////////////////////////
            $(".budget-price").attr("data-min",price_text_small);
            $(".budget-price").attr("data-max",price_text_big);
            /////////////////////////////////////////////////////
            $(".budget-price").text(price_text_small + "-" + price_text_big + "万");
            price_choose_spacing.css({"left": percent + "%"});//这是那个左边进度条的左边
          } else {
            /////////////////////////////////////////////////////
            $(".budget-price").attr("data-min",price_text_big);
            $(".budget-price").attr("data-max",price_text_small);
            /////////////////////////////////////////////////////
            $(".budget-price").text(price_text_big + "-" + price_text_small + "万");
            price_choose_spacing.css({"left": slide_left_2 + "%"});
          }
        });
        price_choose_slider.on("touchend", function () {
          // $("#btn_go").attr("href", selurl);
          touchEnd(price_choose_slider, price_choose_slider2);
        });

        price_choose_slider2.on("touchmove", function (e) {
          //获取各种参数
          var page_X = e.changedTouches[0].clientX;
//          var slide_left_1 = parseInt(price_choose_slider.css("left")) / Width * 100;
          var slide_left_1 = parseInt(price_choose_slider.css("left"));
          slide_left_1 = slide_left_1 >100 ? 100 : parseInt(price_choose_slider2.css("left"));

          //计算部分
          var roundNum = page_X - Left <= 0 ? 0 : page_X - Left;
          var percent = roundNum / Width * 100;

          if(percent>=100){
            percent = 100;
          } else if(percent<=0){
            percent = 0;
          }
          price_text_small = Math.ceil(percent) == 0 ? 1 : Math.ceil(percent);
          price_text_big = Math.ceil(slide_left_1) == 0 ? 1 : Math.ceil(slide_left_1);
          spacing_width = Math.abs(percent - slide_left_1);

          //输出部分
          price_choose_spacing.width(spacing_width + "%");
          price_choose_slider2.css({"left": percent + "%"});
          if (price_text_small <= price_text_big) {
            /////////////////////////////////////////////////////
            $(".budget-price").attr("data-min",price_text_small);
            $(".budget-price").attr("data-max",price_text_big);
            /////////////////////////////////////////////////////
            $(".budget-price").text(price_text_small + "-" + price_text_big + "万");
            price_choose_spacing.css({"left": percent + "%"});
          } else {
            /////////////////////////////////////////////////////
            $(".budget-price").attr("data-min",price_text_big);
            $(".budget-price").attr("data-max",price_text_small);
            /////////////////////////////////////////////////////
            $(".budget-price").text(price_text_big + "-" + price_text_small + "万");
            price_choose_spacing.css({"left": slide_left_1+ "%"});
          }
        });
        price_choose_slider2.on("touchend", function () {
          touchEnd(price_choose_slider2, price_choose_slider);
        });

        function touchEnd(oDiv1, oDiv2) {
          oDiv2.css({"z-index": "5"});
          oDiv1.css({"z-index": "6"});
          if (price_text_big == price_text_small) {
            if (price_text_small != 1) {
              price_text_small--;
              oDiv1.css({"left": price_text_small + "%"});
              price_choose_spacing.css({"left": price_text_small + "%"});
              price_choose_spacing.width("1%");
              /////////////////////////////////////////////////////
              $(".budget-price").attr("data-min",price_text_small);
              $(".budget-price").attr("data-max",price_text_big);
              /////////////////////////////////////////////////////
              $(".budget-price").text(price_text_small + "-" + price_text_big + "万");
            } else {
              price_text_small++;
              oDiv1.css({"left": price_text_small + "%"});
              price_choose_spacing.css({"left": price_text_small + "%"});
              price_choose_spacing.width("1%");
              /////////////////////////////////////////////////////
              $(".budget-price").attr("data-min",price_text_big);
              $(".budget-price").attr("data-max",price_text_small);
              /////////////////////////////////////////////////////
              $(".budget-price").text(price_text_big + "-" + price_text_small + "万");
            }
          }
        }
      }


    }
  };
</script>
