<!--
 * Lottie v5.7.5 (https://airbnb.io/lottie/#/)
 * Copyright (c) 2015 Bodymovin
 * Licensed under MIT (https://github.com/airbnb/lottie-web/blob/master/LICENSE.md)
-->

<!--
@file    Contact.vue
@brief   コンタクトページ
@date    2020/11
-->
<template>
  <div id="contact">
    <div class="contact-wrapper">
      <p class="title">CONTACT</p>
      <form v-if="showForm">
        <template class="group">
          <label for="textBox1">会社名・団体名</label>
          <input
            type="text"
            id="textBox1"
            v-model="group"
          >
        </template>
        <template class="name">
          <label class="required" for="textBox2">お名前</label>
          <input
            type="text"
            id="textBox2"
            v-model="name"
            @change="validationName($event.target.value)"
          >
        </template>
        <template class="email">
          <label class="required" for="textBox3">メールアドレス</label>
          <input
            type="text"
            id="textBox1"
            v-model="email"
            @change="validationEmail($event.target.value)"
          >
        </template>
        <template class="contents">
          <label class="required" for="textBox4">お問い合わせ内容</label>
          <textarea
            type="text"
            id="textBox1"
            v-model="message"
            @change="validationMessage($event.target.value)"
          ></textarea>
        </template>
        <div class="privacy">
          <p>
            ※
            <a
              class="link"
              @click="openPrivacyPolicy"
            >プライバシーポリシー</a>
            にご同意いただいた上で送信してください
          </p>
        </div>
        <div class="submit">
          <p
            v-for="error in errorTextList"
            class="submit-error"
            :key="error.id"
          >{{ error }}</p>
          <a class="btn-submit" @click="submit()">
            <p>同意して送信</p>
          </a>
        </div>
      </form>
      <div v-else>
        <p>お問い合わせありがとうございます。送信が完了しました。<br>返信をお待ちください。</p>
      </div>
    </div>
    <!-- lottie -->
    <div
      v-show="isSending"
      class="sending"
      ref="send_mail"
    ></div>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import animationData from '@/assets/animation/send_mail'
import axios from 'axios'
import { ERROR_TEXT } from '@/const'

export default {
  name: 'Contact',
  data () {
    return {
      showForm: true,
      isApi: false,
      isSending: false,
      errorTextList: [],
      group: '',
      name: '',
      email: '',
      message: '',
      sendAnimation: null
    }
  },
  /**
   * ページ離脱時にアニメを消す
   */
  beforeRouteLeave (from, to, next) {
    this.sendAnimation.destroy()
    this.sendAnimation = null
    next()
  },
  mounted () {
    // アニメーションのロード
    this.sendAnimation = lottie.loadAnimation({
      container: this.$refs.send_mail, // document.getElementbyId('lottie') などでも OK
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData
    })
    // ループ完了時にAPIが終わってたらアニメーションを終了する。
    this.sendAnimation.onLoopComplete = function () {
      if (this.isApi === false) {
        this.sendAnimation.stop()
        this.isSending = false
      }
    }.bind(this)
  },
  methods: {
    validationName (value) {
      if (value === '') {
        const nameError = this.errorTextList.filter(e => e === ERROR_TEXT.REQUIRED_NAME)
        if (nameError.length < 1) this.errorTextList.push(ERROR_TEXT.REQUIRED_NAME)
      } else {
        this.errorTextList = this.errorTextList.filter(e => e !== ERROR_TEXT.REQUIRED_NAME)
      }
    },
    validationEmail (value) {
      if (value === '') {
        const emailError = this.errorTextList.filter(e => e === ERROR_TEXT.REQUIRED_EMAIL)
        if (emailError.length < 1) this.errorTextList.push(ERROR_TEXT.REQUIRED_EMAIL)
      } else {
        this.errorTextList = this.errorTextList.filter(e => e !== ERROR_TEXT.REQUIRED_EMAIL)
      }
    },
    validationMessage (value) {
      if (value === '') {
        const messageError = this.errorTextList.filter(e => e === ERROR_TEXT.REQUIRED_MESSAGE)
        if (messageError.length < 1) this.errorTextList.push(ERROR_TEXT.REQUIRED_MESSAGE)
      } else {
        this.errorTextList = this.errorTextList.filter(e => e !== ERROR_TEXT.REQUIRED_MESSAGE)
      }
    },
    submit () {
      this.errorTextList = this.errorTextList.filter(e => e !== ERROR_TEXT.FAILD_SEND)
      // 入力チェック
      this.validationName(this.name)
      this.validationEmail(this.email)
      this.validationMessage(this.message)

      if (this.isApi || this.errorTextList.length > 0) return
      this.isApi = true
      this.isSending = true
      this.sendAnimation.play()
      const submitParams = new FormData()
      submitParams.append('entry.1667038442', this.group)
      submitParams.append('entry.459134805', this.name)
      submitParams.append('entry.490746179', this.email)
      submitParams.append('entry.1823922308', this.message)

      // CORSエラー対策
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
      // Googleフォームのaction属性値
      const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdFXfqHeTwKXNUpxXks5UxwkGDsv6OIYi4wqIImgbhTkTkzWA/formResponse'

      // Ajax POST通信
      axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams).then(res => {
        // フォーム非表示
        this.showForm = false
        this.isApi = false
      }).catch(() => {
        this.errorTextList.push(ERROR_TEXT.FAILD_SEND)
        this.isApi = false
      })
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

#contact {
  min-height: calc(105vh - 60px);

  .contact-wrapper {
    margin:  0 10%;
    height: 100%;

    .title {
      padding: 10px;
      grid-row: 1;
      grid-column: 1 / span 2;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      min-height: 70vh;
      text-align: left;

      @include mq(base) {
        // PC
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 4fr .5fr 165px;
        grid-template-columns: 30% 40% 1fr;
        row-gap: 20px;
      }

      label {
        grid-column: 1;
        padding: 10px 0;
        font-size: 14px;
        @include mq(base) {
          // PC
          font-size: 16px;
        }
      }
      input {
        height: 5vh;
        border: none;
        background-color: #EFEFEF;
        font-size: 18px;
        @include mq(base) {
          // PC
          grid-column: 2;
          height: auto;
        }
      }
      textarea {
        height: 20vh;
        resize: none;
        border: none;
        background-color: #EFEFEF;
        font-size: 18px;
        @include mq(base) {
          // PC
          grid-column: 2;
          height: auto;
        }
      }

      .group {
        margin : 10% 0;
        grid-row: 1;
      }

      .required {
        display: block;

        &::after {
          content: "必須";
          background-color: #fff;
          color: #FF6C36;
          border: #FF6C36 solid 1px;
          font-size: 12px;
          font-weight: bold;
          min-width: 10px;
          padding: 3px 7px;
          margin: 0px 5px 3px 5px;
          line-height: 1;
          vertical-align: middle;
          white-space: nowrap;
          text-align: center;
          border-radius: 10px;
          display: inline-block;
        }
      }

      .name {
        grid-row: 2;
      }

      .email {
        grid-row: 3;
      }

      .contents {
        grid-row: 4;
      }

      .privacy {
        grid-row: 5;
        grid-column: 1 / 4;
        text-align: center;

        p {
          margin: 10px auto;
          @include mq(base) {
            margin: 0 auto;
          }

          .link {
            text-decoration-line: underline;
            cursor: pointer;
          }
        }
      }

      .submit {
        grid-row: 6;
        grid-column: 2;
        display: flex;
        height: 130px;
        margin: 10px 0;
        text-align: center;
        justify-content: end;
        flex-direction: column;
        @include mq(base) {
          height: auto;
        }

        .submit-error {
          color: #eb6100;
          line-height: 1.5;
          @include mq(base) {
            line-height: 2;
          }
        }

        .btn-submit {
          width: 130px;
          height: 40px;
          margin: 0 auto;
          color: #fff;
          background-color: #eb6100;
          border-radius: 100vh;
          cursor: pointer;

          &:hover {
            color: #fff;
            background: #f56500;
          }
        }

        p {
          margin: 0;
          line-height: 2.3;
        }
      }
    }
  }

  .sending {
    position: fixed;
    z-index: 16;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#fcfcfc, .7);
  }
}
</style>
