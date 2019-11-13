<template>
  <div class='home' @keydown.ctrl="ctrlDownFunc" @keyup.ctrl="ctrlUpFunc">
    <div id="main" style="width: 100%;height:100vh;"></div>
    <BaseModel v-model="showModel"></BaseModel>
  </div>
</template>

<script>
  import { echartTree } from "echart-tree";
  import Util from "@@/common/getJson";
  import option from "@@/common/option";
  export default {
    async asyncData({ $axios }) {
      return {}
    },
    async fetch({ store, params, $axios }) {

    },
    mounted() {
      console.log(Util.MainBoCai);

      var realData = JSON.parse(Util.MainBoCai.genJson(200));
      let str = '708';
      var myChart = echartTree.init(document.getElementById('main'));
      myChart.setOption(option(realData, str, this.ctrlDown, () => {
        console.log('dsa');
        this.showModel = true;
      }));
      document.onkeydown = this.ctrlDownFunc
      document.onkeyup = this.ctrlUpFunc
    },
    destroyed() {
      document.onkeydown = null;
      document.onkeyup = null;
    },
    data() {
      return {
        ctrlDown: false,
        showModel: false
      }
    },
    methods: {
      ctrlDownFunc(event) {
        if (event.keyCode && event.keyCode == 17) { // ctrl 键
          //要做的事情
          this.ctrlDown = true;
        }
      },
      ctrlUpFunc(event) {
        if (event.keyCode && event.keyCode == 17) { // ctrl 键
          //要做的事情
          this.ctrlDown = false;
        }
      }
    }
  }
</script>

<style lang='scss'>
</style>
