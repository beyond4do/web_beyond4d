<!--
@file    TheMemberCard.vue
@brief   メンバーカードコンポーネント
@date    2020/12
-->
<template>
  <div id="member-card">
    <div class="membar-name-eng">
      <p>{{ nameEng }}</p>
    </div>
    <div class="member-name">
      <p>{{ name }}</p>
    </div>
    <div class="member-job">
      <p>{{ job }}</p>
    </div>
    <div class="member-brank"></div>
    <div class="member-icon">
      <div
        v-if="twitterId"
        class="member-icon-item"
      >
        <a
          :href="twitterLink"
          target="_blank"
          rel="noopener"
        >
          <i class="fa fa-twitter-square icon-twitter"></i>
        </a>
      </div>
      <div
        v-if="pixivId"
        class="member-icon-item"
      >
        <a
          :href="pixivLink"
          target="_blank"
          rel="noopener"
        >
          <img
            src="@/assets/img/pixiv_icon-02.svg"
            class="icon-pixiv"
          >
        </a>
      </div>
      <div
        v-if="noteId"
        class="member-icon-item"
      >
        <a
          :href="noteLink"
          target="_blank"
          rel="noopener"
        >
          <img
            src="@/assets/img/note_logo.svg"
            class="icon-note"
          >
        </a>
      </div>
      <div
        v-if="hatebuId"
        class="member-icon-item"
      >
        <a
          :href="hatebuLink"
          target="_blank"
          rel="noopener"
        >
          <img
            src="@/assets/img/hatenablog_logo.svg"
            class="icon-hatebu"
          >
        </a>
      </div>
      <div
        v-if="qiitaId"
        class="member-icon-item"
      >
        <a
          :href="qiitaLink"
          target="_blank"
          rel="noopener"
        >
          <img
            src="@/assets/img/qiita_logo.png"
            class="icon-qiita"
          >
        </a>
      </div>
      <div
        v-if="narouId"
        class="member-icon-item"
      >
        <a
          v-if="narouId"
          :href="narouLink"
          target="_blank"
          rel="noopener"
        >
          <img
            src="@/assets/img/narou_logo.gif"
            class="icon-narou"
          >
        </a>
      </div>
    </div>
    <div class="member-comments">
      <p v-for="comment in comments" :key="comment.id">{{ comment }}<br></p>
    </div>
    <div class="member-number">
      <p>{{ number }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheMemberCard',
  props: {
    nameEng: String,
    name: String,
    job: String,
    twitterId: String,
    pixivId: String,
    noteId: String,
    hatebuId: String,
    qiitaId: String,
    narouId: String,
    comments: Array,
    number: String
  },
  data () {
    return {
    }
  },
  computed: {
    twitterLink () {
      if (this.twitterId) return 'https://twitter.com/' + this.twitterId
    },
    pixivLink () {
      if (this.pixivId) return 'https://www.pixiv.net/users/' + this.pixivId
    },
    noteLink () {
      if (this.noteId) return 'https://note.com/' + this.noteId
    },
    hatebuLink () {
      if (this.hatebuId) return 'https://' + this.hatebuId + '.hateblo.jp/'
    },
    qiitaLink () {
      if (this.qiitaId) return 'https://qiita.com/' + this.qiitaId
    },
    narouLink () {
      if (this.narouId) return 'https://mypage.syosetu.com/' + this.narouId
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/prepends.scss";

#member-card {
  display: grid;
  text-align: left;
  align-items: end;
  grid-template-columns: 1fr 2.7fr 1fr 1.3fr 1.5fr;
  grid-template-rows: 1fr .6fr .4fr 1fr;
  @include mq(base) {
    grid-template-columns: 1fr 2.5fr 6fr 1.3fr 1.5fr;
    grid-template-rows: 1fr 80px repeat(2, 1fr);
  }

  .membar-name-eng {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
    p {
      margin: 0;
      font-size: 45px;
      color: #fff;
      letter-spacing : 2px;
      text-shadow    :
        1px  1px 0px rgba(0, 0, 0, 0.18),
        -1px  1px 0px rgba(0, 0, 0, 0.18),
        1px -1px 0px rgba(0, 0, 0, 0.18),
        -1px -1px 0px rgba(0, 0, 0, 0.18),
        1px  0px 0px rgba(0, 0, 0, 0.18),
        0px  1px 0px rgba(0, 0, 0, 0.18),
        -1px  0px 0px rgba(0, 0, 0, 0.18),
        0px -1px 0px rgba(0, 0, 0, 0.18);
    }
    @include mq(base) {
      p {
        font-size: 120px;
      }
    }
  }
  .member-name {
    grid-column: 2 / 4;
    grid-row: 2 / 3;

    p {
      margin: 0;
      font-size: 32px;
    }
    @include mq(base) {
      grid-column: 2 / 3;

      p {
        font-size: 40px;
      }
    }
  }
  .member-job {
    grid-column: 4 / 6;
    grid-row: 2 / 3;

    p {
      margin: 8px;
      font-size: 18px;
    }
    @include mq(base) {
      grid-column: 3 / 4;

      p {
        margin: 8px;
        font-size: 24px;
      }
    }
  }
  .member-brank {
    grid-column: 2 / 6;
    grid-row: 2 / 3;
    border-bottom: black 1px solid;
  }
  .member-icon {
    display: flex;
    margin: 5px 0;
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    @include mq(base) {
      // PC
      margin: 5px 15px;
      grid-column: 4 / 6;
      grid-row: 2 / 3;
    }

    &-item {
      position: relative;
      width: 30px;
      height: 30px;
      margin-right: 5px;
      cursor: pointer;

      img {
        position: absolute;
        width: 30px;
      }
      .icon-twitter {
        font-size: 30px;
        color: #00aced;
      }
      .icon-pixiv {
        top: -6px;
      }
      .icon-note {
        top: -4px;
        left: -4px;
        width: 38px;
        height: 38px;
      }
      .icon-hatebu {
        top: -3px;
        left: -3px;
        width: 36px;
        height: 36px;
      }
      .icon-qiita {
        top: 3px;
        left: 3px;
        width: 24px;
        height: 24px;
      }
      .icon-narou {
        top: 3px;
        left: 3px;
        width: 24px;
        height: 24px;
      }
    }
  }

  .member-comments {
    align-self: start;
    grid-column: 2 / 4;
    grid-row: 4 / 5;

    p {
      margin: 10px 0 0 0;
      font-size: 14px;
      line-height: 1.8;
    }

    // PC
    @include mq(base) {
      grid-column: 2 / 4;
      grid-row: 3 / 4;
      p {
        font-size: 18px;
      }
    }
  }
  .member-number {
    grid-column: 4 / 6;
    grid-row: 3 / 5;
    align-self: stretch;
    margin: auto 0;
    text-align: right;

    p {
      margin: 0;
      font-size: 120px;
      opacity: .2;
    }

    // PC
    @include mq(base){
      grid-column: 4 / 5;
      p {
        margin: 0;
        font-size: 220px;
        opacity: .2;
      }
    }
  }
}
</style>
