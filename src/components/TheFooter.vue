<!--
@file    TheFooter.vue
@brief   フッターページ
@date    2020/11
-->
<template>
  <div id="footer">
    <div class="footer-wrapper">
      <div class="footer-top">
        <a
          class="link"
          @click="openTerms"
        >利用規約</a>
        <span>|</span>
        <a
          class="link"
          @click="openPrivacyPolicy"
        >プライバシーポリシー</a>
      </div>
      <div class="footer-bottom">
        <img src="@/assets/img/logo_white.png">
        <p>Copyright (c) B4° All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  methods: {
    openTerms () {
      const routeData = this.$router.resolve({path: '/terms'})
      window.open(routeData.href, '_brank', 'noopener')
    },
    openPrivacyPolicy () {
      const routeData = this.$router.resolve({path: '/privacy_policy'})
      window.open(routeData.href, '_brank', 'noopener')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/prepends.scss";

#footer {
  display: flex;
  justify-content: center;
  background-color: #3c3c3c;

  .footer-wrapper {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @include mq(base) {
      height: 80%;
    }

    .footer-top {
      margin: 20px 0;

      a, span {
        padding-right: 10px;
        color: #fff;
      }
      a {
        cursor: pointer;
      }
    }

    .footer-bottom {
      margin: 30px;

      img {
        width: 220px;
      }

      p {
        color: #fff;
      }

      @include mq(base) {
        display: flex;

        p {
          margin: 35px 0 10px 30px;
        }
      }
    }
  }
}
</style>
