<template>
  <transition name="fade">
    <div class="_model" v-show="value" v-focus @keyup.esc="onEsc">
      <div class="_mask" @click="hide"></div>
      <transition name="slide-fade">
        <div class="_panel" v-show="value">asssssssssssssssssss</div>
      </transition>
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        hideMe: false
      }
    },
    methods: {
      onEsc() {
        if (this.show && this.closeOnEsc) {
          this.$emit('input', false);
        }
      },
      hide() {
        this.$emit('input', false);
      }
    },
  }
</script>
<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.5s;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(-300%);
    opacity: 0;
  }
  ._model {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ._mask {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #00000038;
    }
    ._panel {
      position: fixed;
      width: 500px;
      top: 100px;
      left: 0;
      right: 0;
      margin: 0 auto;
      background-color: #ffffff;
    }
  }
</style>