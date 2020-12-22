<!--
@file    TheTabMenu.vue
@brief   ヘッダーメニューコンポーネント
@date    2020/11
-->
<template>
  <div id="header">
    <div class="header-wrapper">
      <!-- ヘッダ左 -->
      <img
        class="header-left"
        src="@/assets/img/logo_black.png"
        @click="$router.push('/').catch(error => {})"
      >
      <!-- ヘッダ右：SP -->
      <div
        v-if="$mq === 'sp'"
        class="header-right-sp"
      >
        <!-- ハンバーガーメニュー -->
        <div
          class="hamburger"
          @click="isOpenSpMenu"
        >
          <span
            class="line line-top"
            :class="isXtop"
          ></span>
          <span
            class="line line-center"
            :class="isXcenter"
          ></span>
          <span
            class="line line-bottom"
            :class="isXbottom"
          ></span>
        </div>
        <!-- メニュー本体 -->
        <transition
          name="menu"
          appear
          @before-enter="isClick = true"
          @after-enter="isClick = false"
          @before-leave="isClick = true"
          @after-leave="isClick = false"
        >
          <div
            v-show="isMenuOpen"
            class="menu-wrapper"
          >
            <div class="menu">
              <template v-for="page in pages">
                <div
                  :key="page.id"
                  @click="onClickMenu(page)"
                  class="btn-menu"
                >
                  <p>{{ page.title }}</p>
                </div>
              </template>
            </div>
          </div>
        </transition>
      </div>
      <!-- ヘッダ右：PC -->
      <div
        v-else
        class="header-right-pc"
      >
        <template v-for="page in pages">
          <div
            :key="page.id"
            @click="$router.push(page.path).catch(error => {})"
            class="btn-page"
          >
            <p>{{ page.title }}</p>
          </div>
        </template>
      </div>
    </div>
    <!-- メニューマスク -->
    <transition
      v-if="$mq === 'sp'"
      name="mask"
      appear
    >
      <div
        v-show="isMenuOpen"
        class="mask"
        @click="isOpenSpMenu"
      ></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheTabMenu',
  data () {
    return {
      pages: [
        { title: 'HOME', path: '/' },
        { title: 'ABOUT', path: '/about' },
        { title: 'WORKS', path: '/works' },
        { title: 'MEMBER', path: '/member' },
        { title: 'CONTACT', path: '/contact' }
      ],
      isMenuOpen: false,
      isClick: false
    }
  },
  computed: {
    isXtop () {
      if (this.isMenuOpen) return 'x-top'
    },
    isXcenter () {
      if (this.isMenuOpen) return 'x-center'
    },
    isXbottom () {
      if (this.isMenuOpen) return 'x-bottom'
    }
  },
  methods: {
    isOpenSpMenu () {
      if (this.isClick) return
      this.isMenuOpen = !this.isMenuOpen
    },
    onClickMenu (page) {
      if (this.isClick) return
      this.isMenuOpen = false
      this.$router.push(page.path).catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>

/* ヘッダのCSS */
#header {
  position: sticky;
  z-index: 10;
  top: 0;
  height: 80px;

  .header-wrapper {
    position: relative;
    z-index: 10;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 3px 7px -4px rgba(0, 0, 0, 0.5);

    .header-left {
      width: 140px;
      margin-left: 10vw;
      cursor: pointer;
    }

    .header-right-sp {
      width: auto;
      margin-right: 10vw;

      .hamburger {
        position: relative;
        vertical-align: middle;
        width: 30px;
        height: 30px;
        background-color: #707070;
        cursor: pointer;

        // ハンバーガーアイコン横線の共通スタイル
        .line {
          position: absolute;
          right: 5px;
          width: 20px;
          height: 1px;
          background-color: #fcfcfc;
        }
        // 上線
        .line-top {
          top : 9px;
          transition: .3s;
        }
        .x-top {
          transform: translateY(6px) rotate(-45deg);
        }
        // 中線
        .line-center {
          top : 15px;
          transition: .3s;
        }
        .x-center {
          opacity: 0;
        }
        // 下線
        .line-bottom {
          top : 21px;
          transition: .3s;
        }
        .x-bottom {
          transform: translateY(-6px) rotate(45deg);
        }
      }

      .menu-wrapper {
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        color: #fcfcfc;
        background-color: #707070;

        .btn-menu {
          height: 50px;
          cursor: pointer;

          p {
            height: 100%;
            margin: 0;
            line-height: 3;
          }
        }
      }
    }

    .header-right-pc {
      width: 768px;

      .btn-page {
        box-sizing: border-box;
        display: inline-block;
        width: 105px;
        height: 80px;
        line-height: 3.5;
        font-size: 16px;
        color: #000b00;
        cursor: pointer;

        &:hover {
          border-bottom: #000b00 solid 2px;
        }
      }
    }
  }

  .menu {
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

  .mask {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #707070;
    opacity: .7;

    &-enter, &-leave-to {
      opacity: 0;
    }
    &-enter-to, &-leave {
      opacity: .7;
    }
    &-enter-active, &-leave-active {
      transition: all .3s ease;
    }
  }
}
</style>
