<!--
@file    BaseModal.vue
@brief   モーダルコンポーネント
@date    2020/12
-->
<template>
  <transition name="modal" appear>
    <div id="base-modal">
      <div
        class="modal-back"
        @click="close()"
      >
      </div>
      <div
        class="modal-x"
        @click="close()"
      >
        <span class="line line-left"></span>
        <span class="line line-right"></span>
      </div>
      <div class="modal-contents">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BaseModal',
  data () {
    return {
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/prepends.scss";

#base-modal {
  z-index: 15;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .modal-back {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 11, 0, .85);
    cursor: pointer;
  }

  .modal-x {
    position: fixed;
    z-index: 15;
    top: 14%;
    left: 16%;
    width: 30px;
    height: 30px;
    cursor: pointer;

    .line {
      position: absolute;
      width: 30px;
      height: 7px;
      background-color: #fff;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
    }
    .line-left {
      top: 40%;
      right: 5%;
      transform: rotate(-45deg);
    }
    .line-right {
      top: 40%;
      right: 5%;
      transform: rotate(45deg);
    }
  }

  .modal-contents {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 65%;
    transform: translateX(-50%) translateY(-50%);
    @include mq(base) {
      height: 50%;
    }
  }
}

// アニメーション
.modal {
  &-enter, &-leave-to {
    opacity: 0;
  }
  &-enter-to, &-leave {
    opacity: 1;
  }
  &-enter-active, &-leave-active {
    transition: all .3s ease;
  }
}
</style>
