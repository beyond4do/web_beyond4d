<!--
@file    About.vue
@brief   アバウトページ
@date    2020/11
-->
<template>
  <div id="about">
    <div class="about-wrapper">
      <p class="title">ABOUT</p>
      <h2 class="mission">スキなことをカタチ創る</h2>
      <img
        class="logo"
        src="@/assets/img/256-256.png"
      >
      <div class="explain">
        <p>見返せ、会社を。</p>
        <p>遊びで作ってます</p>
        <p>Life is motivation</p>
        <p>好きなことで世界を広げる</p>
        <p>気ままに作る</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/prepends.scss";

#about {
  height: calc(100vh - 60px);
  margin: 0 10%;

  p, h2 {
    margin: 0;
    padding: 10px;
  }

  .about-wrapper {
    display: grid;
    grid-template-rows: 1fr 1fr 4fr;
    grid-template-columns: 36% 1fr;

    .title {
      grid-row: 1;
      grid-column: 1 / span 2;
      line-height: 3;
    }

    .mission {
      grid-row: 2;
      grid-column: 1 / span 2;
      line-height: 3;
      @include mq(base) {
        grid-column: 2 / 3;
        text-align: left;
      }
    }

    .logo {
      grid-row: 3;
      grid-column: 1;
      margin: auto 0;
      width: 100%;
    }

    .explain {
      grid-row: 3;
      grid-column: 2;
      margin: auto 0;
      padding: 10px;
      text-align: left;
      line-height: 1.4;
    }

  }
}
</style>
