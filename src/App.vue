<!--
 * Lottie v5.7.5 (https://airbnb.io/lottie/#/)
 * Copyright (c) 2015 Bodymovin
 * Licensed under MIT (https://github.com/airbnb/lottie-web/blob/master/LICENSE.md)
-->

<!--
@file    App.vue
@brief   SPAの親ページ
@date    2020/11
-->
<template>
  <div id="app">
    <TheTabMenu />
    <router-view />
    <TheFooter />
    <!-- lottie -->
    <transition name="logo-anime">
      <div
        v-show="isLogoAnime"
        class="logo-anime"
        ref="logoAnime"
      ></div>
    </transition>
  </div>
</template>

<script>
import TheTabMenu from '@/components/TheTabMenu'
import TheFooter from '@/components/TheFooter'
import lottie from 'lottie-web'
import animationData from '@/assets/animation/logo_anime'

export default {
  name: 'App',
  components: {
    TheTabMenu,
    TheFooter
  },
  data () {
    return {
      isLogoAnime: true
    }
  },
  mounted () {
    // アニメーションのロード
    this.logoAnimation = lottie.loadAnimation({
      container: this.$refs.logoAnime, // document.getElementbyId('lottie') などでも OK
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData
    })
    // 再生完了後は非表示
    this.logoAnimation.onComplete = function () {
      this.logoAnimation.stop()
      this.isLogoAnime = false
    }.bind(this)
    // 少し待ってから再生
    setTimeout(() => {
      // 利用規約とプライバシーポリシーは出さない。
      if (this.$router.history.current.path !== '/terms' &&
          this.$router.history.current.path !== '/privacy_policy') {
        this.logoAnimation.play()
      } else {
        this.isLogoAnime = false
      }
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000b00;

  .logo-anime {
    position: fixed;
    z-index: 16;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fcfcfc;

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
}
</style>
