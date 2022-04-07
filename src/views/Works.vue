<!--
@file    Works.vue
@brief   ワークスページ
@date    2020/11
-->
<template>
  <div id="works">
    <!-- タイトル -->
    <p class="title">WORKS</p>
    <!-- タブ -->
    <div class="tabs">
      <!-- ALL -->
      <input
        v-model="tabType"
        id="all"
        type="radio"
        name="item"
        :value="WORKS_TAB_TYPE.ALL"
        @change="onChangeTab"
      >
      <label
        class="tab_item"
        for="all"
      >
        <span>ALL</span>
      </label>
      <!-- GAME -->
      <input
        v-model="tabType"
        id="game"
        type="radio"
        name="item"
        :value="WORKS_TAB_TYPE.GAME"
        @change="onChangeTab"
      >
      <label
        class="tab_item"
        for="game"
      >
        <span>GAME</span>
      </label>
      <!-- DESIGN -->
      <input
        v-model="tabType"
        id="design"
        type="radio"
        name="item"
        :value="WORKS_TAB_TYPE.DESIGN"
        @change="onChangeTab"
      >
      <label
        class="tab_item"
        for="design"
      >
        <span>DESIGN</span>
      </label>
      <!-- MOVIE -->
      <input
        v-model="tabType"
        id="movie"
        type="radio"
        name="item"
        :value="WORKS_TAB_TYPE.MOVIE"
        @change="onChangeTab"
      >
      <label
        class="tab_item"
        for="movie"
      >
        <span>MOVIE</span>
      </label>
      <!-- SCENARIO -->
      <input
        v-model="tabType"
        id="scenario"
        type="radio"
        name="item"
        :value="WORKS_TAB_TYPE.SCENARIO"
        @change="onChangeTab"
      >
      <label
        class="tab_item"
        for="scenario"
      >
        <span>SCENARIO</span>
      </label>
    </div>
    <!-- コンテンツ -->
    <div class="contents">
      <div class="flexbox">
        <div
          v-for="workData in showWorks"
          class="each_content"
          :key="workData.id"
        >
          <img
            :src="workData.src"
            @click="openModal(workData)"
          />
          <p>{{ workData.title }}</p>
        </div>
      </div>
    </div>

    <!-- モーダル -->
    <BaseModal
      v-if="isModalOpen"
      @close="closeModal"
    >
      <div class="works-modal">
        <img
          class="works-modal-img"
          :src="showWorkData.src"
        />
        <div class="works-modal-text">
          <p>{{ showWorkData.date }}</p>
          <p>{{ showWorkData.title }}</p>
          <p class="link">
            <a
              v-if="showWorkData.url"
              :href="showWorkData.url"
              target="_blank"
              rel="noopener"
              >▶ Link</a>
          </p>
          <p style="color: #fff">{{ showWorkData.creater }}</p>
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from '@/components/BaseModal'
import { WORKS_TAB_TYPE } from '@/const'
const defaultSrc = require('@/assets/img/works_be4d.png')

export default {
  name: 'Works',
  components: {
    BaseModal
  },
  data () {
    return {
      WORKS_TAB_TYPE,
      tabType: WORKS_TAB_TYPE.ALL,
      isModalOpen: false,
      showWorkData: null,
      works: [
        {
          date: '2019/08/31',
          title: 'I always think of you',
          src: defaultSrc,
          url: 'https://novelgame.jp/games/show/2338',
          creater: 'B4°',
          type: WORKS_TAB_TYPE.GAME,
          sort: 1
        },
        {
          date: '2020/12/31',
          title: 'This website',
          src: defaultSrc,
          url: '',
          creater: 'B4°',
          type: WORKS_TAB_TYPE.DESIGN,
          sort: 2
        },
        {
          date: '2020/12/27',
          title: 'This jacket',
          src: defaultSrc,
          url: '',
          creater: 'セカ',
          type: WORKS_TAB_TYPE.DESIGN,
          sort: 3
        },
        {
          date: 'YYYY/MM/DD',
          title: 'Coming soon...',
          src: 'https://unsplash.it/250/250?random',
          url: '',
          creater: 'with you...',
          type: WORKS_TAB_TYPE.MOVIE,
          sort: 0
        },
        {
          date: '2022/01/01',
          title: 'モンスターテイマーは世界で最も適当な',
          src: defaultSrc,
          url: 'https://ncode.syosetu.com/n2391hk/',
          creater: 'Rafits',
          type: WORKS_TAB_TYPE.SCENARIO,
          sort: 1
        }
      ],
      showWorks: []
    }
  },
  mounted () {
    this.onChangeTab()
  },
  methods: {
    /**
     * タブを切り替える
     * @param e:Event
     */
    onChangeTab (e) {
      if (e) {
        this.tabType = e.target.value
      } else {
        this.tabType = WORKS_TAB_TYPE.ALL
      }
      if (this.tabType === WORKS_TAB_TYPE.ALL) {
        this.showWorks = this.works
      } else {
        this.showWorks = this.works.filter(element => element.type === this.tabType)
      }
    },
    /**
     * モーダルを開く
     * @param e:Event
     */
    openModal (data) {
      this.isModalOpen = true
      this.showWorkData = data
    },
    /**
     * モーダルを閉じる
     */
    closeModal () {
      this.isModalOpen = false
      this.showWorkData = null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/prepends.scss";

#works {
  // タイトル
  .title {
    padding: 10px 0;
  }

  // タブ
  .tabs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    @include mq(base) {
      // PC
      justify-content: space-between;
      width: 50vw;
    }

    // タブの各アイテム
    .tab_item {
      height: 26px;
      line-height: 2;
      font-size: 14px;
      cursor: pointer;
      @include mq(base) {
        // PC
        margin: 10px;
      }

      span {
        padding: 10px;
      }
    }

    input {

      &[name="item"] {
        display: none;
      }

      /*選択されているタブのスタイルを変える*/
      &:checked + .tab_item {
        background-color: #ff7227;
        border-radius: 30px;
        color: white;
      }
    }
  }

  // flexbox wrapper
  .contents {
    width: 90%;
    margin: 0 auto;
    @media print, screen and (min-width: 767px) {
      max-width: 100%;
      margin: 20px auto;
    }

    .flexbox {
      display: flex;
      flex-wrap: wrap;
      margin: 40px -10px;
      @include mq(base) {
        margin: 0 -20px;
      }

      .each_content {
        height: 280px;
        width: auto;
        box-sizing: border-box;
        flex-basis: 50%;
        max-width: 50%;
        padding: 15px;
        @include mq(base) {
          // PC
          flex-basis: 25%;
          max-width: 25%;
        }

        img {
          max-width: 80%;
          max-height : 80%;
        }

        p {
          margin: 2px 0;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          @include mq(base) {
            // PC
            margin: 2px 60px;
          }
        }
      }
    }
  }

  .works-modal {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    // SP
    height: 100%;
    flex-direction: column;

    p, a {
      margin: 0;
      line-height: 1.5;
      font-size: 24px;
      text-align: center;
      color: #fff
    }
    a {
      text-decoration-line: underline;
    }

    @include mq(base) {
      // PC
      flex-direction: unset;

      p, a {
        text-align: left;
      }
      .link {
        text-indent: 24px;
      }
    }

    .works-modal-img {
      // SP
      height: auto;
      width: 60vw;
      margin-bottom: 30px;

      @include mq(middle) {
        height: auto;
        width: 40vw;
      }
      @include mq(base) {
        // PC
        height: 40vh;
        width: auto;
      }
    }
  }
}
</style>
