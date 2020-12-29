<!--
@file    Member.vue
@brief   メンバーページ
@date    2020/11
-->
<template>
  <div id="member">
    <div class="member-top">
      <p class="title">MEMBER</p>
      <div class="member-icon">
        <!-- 春風Kieß -->
        <transition appear name="top">
          <div
            class="kies"
            @click="onClickIcon($refs.kies)"
          >
            <transition appear name="top">
              <!-- TODO: 画像 -->
            </transition>
            <transition appear name="top">
              <p>春風Kieß</p>
            </transition>
            <transition appear name="top">
              <p>writer</p>
            </transition>
          </div>
        </transition>
        <!-- Yussiy -->
        <transition appear name="bottom">
          <div
            class="yussiy"
            @click="onClickIcon($refs.yussiy)"
          >
            <transition appear name="bottom">
              <img src="@/assets/img/icon_yussiy.png"/>
            </transition>
            <transition appear name="bottom">
              <p>Yussiy</p>
            </transition>
            <transition appear name="bottom">
              <p>engineer</p>
            </transition>
          </div>
        </transition>
        <!-- セカ -->
        <transition appear name="top">
          <div
            class="seka"
            @click="onClickIcon($refs.seka)"
          >
            <transition appear name="top">
              <img src="@/assets/img/icon_seka.png"/>
            </transition>
            <transition appear name="top">
              <p>セカ</p>
            </transition>
            <transition appear name="top">
              <p>designer</p>
            </transition>
          </div>
        </transition>
        <!-- Rafits -->
        <transition appear name="bottom">
          <div
            class="rafits"
            @click="onClickIcon($refs.rafits)"
          >
            <transition appear name="bottom">
              <img src="@/assets/img/icon_rafits.png"/>
            </transition>
            <transition appear name="bottom">
              <p>Rafits</p>
            </transition>
            <transition appear name="bottom">
              <p>engineer</p>
            </transition>
          </div>
        </transition>
        <!-- Qued -->
        <transition appear name="top">
          <div
            class="qued"
            @click="onClickIcon($refs.qued)"
          >
            <transition appear name="top">
              <img src="@/assets/img/icon_qued.jpg"/>
            </transition>
            <transition appear name="top">
              <p>Qued</p>
            </transition>
            <transition appear name="top">
              <p>planner</p>
            </transition>
          </div>
        </transition>
      </div>
    </div>
    <div>
      <div class="sub-header">
        <h2>MEMBER</h2>
      </div>
      <TheMemberCard
        ref="kies"
        :nameEng="'Harukaze Kieß'"
        :name="'春風きいす'"
        :job="'ライター'"
        :twitter-id="'kies_hal'"
        :pixiv-id="''"
        :comments="['聖地巡礼好きのサッカーファンです。', '兵庫県に住むのが夢。']"
        :number="'01'"
      />
      <TheMemberCard
        ref="yussiy"
        :nameEng="'Yussiy'"
        :name="'Yussiy'"
        :job="'エンジニア'"
        :twitter-id="''"
        :pixiv-id="''"
        :comments="['Unityチョットデキマス。', '光のエンジニア']"
        :number="'02'"
      />
      <TheMemberCard
        ref="seka"
        :nameEng="'Seka'"
        :name="'セカ'"
        :job="'デザイナー'"
        :twitter-id="'nearfark'"
        :pixiv-id="'6985688'"
        :comments="['ゲーム、グラフィックUIのデザインをします。', 'スニーカーやアパレルが好き']"
        :number="'03'"
      />
      <TheMemberCard
        ref="rafits"
        :nameEng="'Rafits'"
        :name="'空兎'"
        :job="'エンジニア'"
        :twitter-id="'0rafits1'"
        :pixiv-id="''"
        :note-id="'0rafits1'"
        :hatebu-id="'rafits'"
        :qiita-id="'0rafits1'"
        :narou-id="'2072038'"
        :comments="['しがないエンジニアをやっています。「らふぃっつ」か「くうと」とお呼びください', '趣味は音ゲーと家計簿。日本酒がすこ']"
        :number="'04'"
      />
      <TheMemberCard
        ref="qued"
        class="member-card-last"
        :nameEng="'Qued'"
        :name="'Qued'"
        :job="'プランナー'"
        :twitter-id="'Qued_ga'"
        :pixiv-id="'4665053'"
        :comments="['イラスト描いたり、作曲したり、ギター弾いたりする企画者です。器用貧乏です。', '多趣味の権化。']"
        :number="'05'"
      />
    </div>
  </div>
</template>

<script>
import TheMemberCard from '@/components/TheMemberCard'
export default {
  name: 'Member',
  components: {
    TheMemberCard
  },
  methods: {
    /**
     * トップのアイコン押下時に対になるカードへ移動する
     * @param element:Document 各メンバーカードのDOM
     */
    onClickIcon (element) {
      element.$el.scrollIntoView({behavior: 'smooth', block: 'center'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/prepends.scss";

#member {

  .member-top {
    position: relative;
    min-height: calc(100vh - 60px);
    margin-bottom: 60px;

    .title {
      padding: 10px;
    }

    .member-icon {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
      @include mq(base) {
        position: absolute;
        display: flex;
        width: 100%;
        height: 80%;
        justify-content: space-around;
        align-items: center;
      }

      div {
        position: relative;
        height: 100px;
        width: 100px;
        margin: 0 auto;
        border: solid 1px black;
        object-fit: cover;
        cursor: pointer;

        // PC
        @include mq(base) {
          height: 200px;
          width: 200px;
          margin: 2%;
        }

        img {
          width: 100%;
          height: inherit;
          object-fit: cover
        }

        p {
          position: absolute;
          bottom: -40px;
          right: 0;
          left: 0;
          text-shadow    :
            1px  1px 0px rgba(255, 255, 255, 0.6),
            -1px  1px 0px rgba(255, 255, 255, 0.6),
            1px -1px 0px rgba(255, 255, 255, 0.6),
            -1px -1px 0px rgba(255, 255, 255, 0.6),
            1px  0px 0px rgba(255, 255, 255, 0.6),
            0px  1px 0px rgba(255, 255, 255, 0.6),
            -1px  0px 0px rgba(255, 255, 255, 0.6),
            0px -1px 0px rgba(255, 255, 255, 0.6);

          &:first-of-type {
            top: 20px;
            font-size: 20px;
            font-weight: bolder;
            @include mq(base) {
              top: 50px;
              font-size: 30px;
            }
          }
        }
      }
      .kies {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
      .yussiy {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
      .seka {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
      .rafits {
        grid-column: 2 / 3;
        grid-row: 4 / 5;
      }
      .qued {
        grid-column: 1 / 2;
        grid-row: 5 / 6;
      }

    }
  }

  .sub-header {
    height: 60px;
    box-shadow: 0px 3px 7px -4px rgba(0, 0, 0, 0.5);
  }

  .member-card-last {
    margin-bottom: 50px;
  }

  .top-enter-active, .top-leave-active {
    transform: translate(0px, 0px);
    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
  .top-enter, .top-leave-to {
    transform: translateY(-100vh) translateY(0px);
  }
  .bottom-enter-active, .bottom-leave-active {
    transform: translate(0px, 0px);
    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
  .bottom-enter, .bottom-leave-to {
    transform: translateY(100vh) translateY(0px);
  }
}
</style>
