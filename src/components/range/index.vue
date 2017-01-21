<template>
  <div class="transparent-button-1 slide-opacity-in-bottom">
    <!-- <p>请调整购车预算</p> -->
    <div class="budget-price" data-min="40" data-max="61">{{less}}-{{more}}万</div>
    <div class="budget-price-choose">
      <span class="min-budget">0</span>
      <div id="ScrollToChoose" class="Scroll-to-choose" ref="content">
        <div class="price-choose-bar"></div>
        <div class="price-choose-spacing" ref="longline" :style="{ width: lineWidth + '%',left: lineLeft + '%'}"></div>
        <div class="price-choose-slider" ref="thumb" :style="{ left: nowprogress + '%' }"><div></div></div>
        <div class="price-choose-slider2" ref="thumb2" :style="{ left: nowprogress2 + '%' }"><div></div></div>
      </div>
      <span class="max-budget">100</span>
    </div>
  </div>
</template>


<script type="text/babel">
  import draggable from './draggable';

  export default {
    name: 'jay-range',
    data(){
      return {
        value:100,
        step:1,
        lineWidth:100,
        lineLeft:0,
        min:0,
        max:100,
        less:0,
        more:100,
        nowprogress:0,
        nowprogress2:100,
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
      const thumb = this.$refs.thumb;
      const thumb2 = this.$refs.thumb2;
      const content = this.$refs.content;
      //const longline = this.$refs.longline;

      const getThumbPosition = () => {
        const contentBox = content.getBoundingClientRect();
        const thumbBox = thumb.getBoundingClientRect();

        return {
          left: thumbBox.left - contentBox.left
        };
      };

     /* let dragState = {};
      let dragState2 = {};*/
      draggable(thumb, {
        start: () => {
          if (this.disabled) return;
         /* const position = getThumbPosition();
          dragState = {
            thumbStartLeft: position.left
          };*/
        },
        drag: (event) => {
          if (this.disabled) return;
          const contentBox = content.getBoundingClientRect();
          const deltaX = event.clientX - contentBox.left;
          const position = Math.floor(deltaX / contentBox.width *100) ;
          this.nowprogress = position;

          this.lineWidth = Math.floor(this.more - this.less);
          this.lineLeft = this.less;

          if (this.nowprogress < 0) {
            this.nowprogress = 0;
          } else if (this.nowprogress > 100) {
            this.nowprogress = 100;
          }

          this.less = this.nowprogress >= this.nowprogress2 ? this.nowprogress2 : this.nowprogress;
          this.more = this.nowprogress <= this.nowprogress2 ? this.nowprogress2 : this.nowprogress;
          //console.log('滑块1滑动距离'+deltaX,'占百分比'+position)
        },
        end: () => {
          if (this.disabled) return;
          /*dragState = {};*/
        }
      });
      draggable(thumb2, {
        start: () => {
          if (this.disabled) return;
            /*const position = getThumbPosition();
            dragState2 = {
              thumbStartLeft: position.left
            };*/

        },
        drag: (event) => {
          if (this.disabled) return;
          const contentBox = content.getBoundingClientRect();
          const deltaX = event.pageX - contentBox.left;
          const position = Math.floor(deltaX / contentBox.width *100) ;
          this.nowprogress2 = position;

          if (position < 0) {
            this.nowprogress2 = 0;
          } else if (position > 100) {
            this.nowprogress2 = 100;
          }

          //两点距离线条
          this.lineWidth = Math.floor(this.more - this.less);
          this.lineLeft = this.less;

          // 两点间互换位置处理
          this.less = this.nowprogress >= this.nowprogress2 ? this.nowprogress2 : this.nowprogress;
          this.more = this.nowprogress <= this.nowprogress2 ? this.nowprogress2 : this.nowprogress;

          //console.log('滑块2滑动距离'+deltaX,'占百分比'+position)
        },
        end: () => {
          if (this.disabled) return;
          /*dragState2 = {};*/
        }
      });
    }
  };
</script>
