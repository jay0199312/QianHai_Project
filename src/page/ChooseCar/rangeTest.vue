<style scoped lang="scss">

</style>

<template>
  <div>
    <mt-range
      v-model="rangeValue"
      :min="10"
      :max="90"
      :step="10"
      :bar-height="5">
    </mt-range>
  </div>
</template>

<script>
  import range from '../../components/range/index.vue';

  export default{
    name:'test-range',
    components:{range},
    methods: {

    },
    mounted() {

    },
    data(){
      return {
        rangeValue:1
      }
    }
  }
</script>

