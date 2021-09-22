<!--
@file    Works.vue
@brief   ワークスページ
@date    2020/11
-->
<template>
  <div id="not-found">
    <!-- タイトル -->
    <p class="title">Not Found</p>
    <router-link to="/" class="link">Go to HOME</router-link>
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
          date: 'YYYY/MM/DD',
          title: 'Coming soon...',
          src: 'https://unsplash.it/300/300?random',
          url: '',
          creater: 'with you...',
          type: WORKS_TAB_TYPE.SCENARIO,
          sort: 0
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

#not-found {
  min-height: calc(100vh - 300px);

  // タイトル
  .title {
    padding: 10px 0;
  }

  .link {
    text-decoration: underline;
  }
}
</style>
