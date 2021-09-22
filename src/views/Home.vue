<!--
@file    Home.vue
@brief   ホームページ
@date    2020/11
-->
<template>
  <div id="home">
    <img src="@/assets/img/lp_top.webp" style="object-fit: cover">
    <div class="sub-header">
      <h2>NEWS</h2>
    </div>
    <div class="news">
      <!-- PC版のテーブルニュース -->
      <template v-if="$mq !== 'sp'">
        <table class="news-table">
          <tr
            v-for="news in newsList"
            :key="news.id"
          >
            <th>{{ news.date }}</th>
            <td>{{ news.text }}</td>
          </tr>
        </table>
      </template>
      <!-- SP版のニュース -->
      <template v-else>
        <div
          v-for="news in newsList"
          :key="news.id"
          class="news-list"
        >
          <p class="date">{{ news.date }}</p>
          <p>{{ news.text }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      newsList: [
        {
          text: 'サイトを大幅リニューアル。公開しました。',
          date: '2020/12/31'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/prepends.scss";

#home {
  img {
    height: calc(100vh - 80px);
    width: 100%;
  }

  .sub-header {
    height: 80px;
    line-height: 2.2;
    box-shadow: 0px 3px 7px -4px rgba(0, 0, 0, 0.5);
  }

  .news {
    margin: 70px 30px;
    @include mq(base) {
      margin: 40px 30px;
    }

    // PC
    .news-table {
      width: 80vw;
      margin: 0 auto;
      border-collapse: collapse;
      @include mq(base) {
        width: 70vw;
      }

      tr {
        height: 70px;

        th {
          width: 20vw;
          border-bottom: 1px black dotted;
        }
        td {
          width: 50vw;
          padding-left: 10px;
          font-size: 14px;
          text-align: left;
          border-bottom: 1px black dotted;
          @include mq(base) {
            font-size: 16px;
          }
        }
      }
    }

    // SP
    .news-list {
      text-align: left;
      border-bottom: 1px black dotted;

      .date {
        font-weight: bold;
      }
    }
  }
}
</style>
