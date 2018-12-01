<template lang="pug">
section#section0(ref="aboutMe")
  .articleWrap
    .aboutMeHeader
      el-row
        el-col(:xs="24" :sm="12")
          .left
            h4 Who I am ?
        el-col(:xs="24" :sm="12")
          .right
            h4 馬麗安 , Marion Ma
            h5 網頁設計師. 跨前端
    u-animate-container
      el-row(:gutter="20")
        u-animate(
          name="fadeInLeft"
          delay="0s"
          duration=".5s"
          :iteration="1"
          :offset="100"
          animateClass="animated"
          :begin="false")
          el-col(:xs="24" :sm="12")
            .aboutMePic
              img(src="../assets/selfie.jpg")
        u-animate(
          name="fadeInRight"
          delay="s"
          duration=".5s"
          :iteration="1"
          :offset="100"
          animateClass="animated"
          :begin="false")
          el-col(:xs="24" :sm="12" :gutter="20")
            //- h4 馬麗安 , Marion Ma
            //- h5 網頁設計師:
            p  兩年之前進入網頁領域，過去擔任過: FB廣告投放手、英語文件翻譯、俄文業務、外電新聞編譯。
              br
              |目前持續自學Javascript以加強深度；目標是成為前端工程師。
            p  剛自學校畢業的時候，完全沒料到會過著敲鍵盤的日子。曾接受數位時代雜誌的文科生轉職專題採訪，連結在下方。
            p 在設計和程式這兩件事上面，我依然是麻瓜一枚。在浩瀚的網頁世界裡，相信自己能完成任務，保持樂觀，不服輸，然後繼續學習。
            p.btw 個人網頁使用Vue-cil為腳手架，scss + pug 做頁面開發。
            button.reportLink
              a(
                href="https://www.bnext.com.tw/article/48027/coding-change-marian-life"
                title="數位時代報導"
                target="_blank"
                ) 數位時代報導 - 文科麻瓜轉職RD
            u-animate.animatedTitle(
              name="slideInRight"
              delay="1s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
              ) KEEP CALM
              br
              | AND LEARNING
              br
              | JAVASCRIPT
</template>
<script>
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "aboutMe",
  data: function() {
    return {
      objoffsetTop: this.offsetTop
    };
  },
  components: {
    UAnimateContainer,
    UAnimate
  },
  methods: {
    // showOffset: function () {
    //   console.log(this.objoffsetTop)
    // }
  }
};
</script>
<style lang="scss">
#section0 {
  padding: 40px 80px 100px;
  @media only screen and (max-width: 786px) {
    padding: 30px 0 100px;
  }
}
.aboutMeHeader {
  padding: 0px 20px;
  margin-bottom: 60px;
  background-color: purple;
  background-image: linear-gradient(60deg, #2a2a2a 50%, #49d3c5 50%);
  .left {
    font-size: 2rem;
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: right;
    position: relative;
    h4 {
      position: relative;
      right: 30px;
      font-size: 1.8rem;
      letter-spacing: 2px;
      margin: 20px;
      @media only screen and (max-width: 786px) {
        margin: 10px;
      }
    }
  }
  .right {
    padding-left: 30px;
    font-size: 1rem;
    h4 {
      color: yellow;
      @media only screen and (max-width: 786px) {
        margin: 5px;
      }
    }
    h5 {
      margin: 10px 0;
      letter-spacing: 1px;
      padding-left: 30px;
      color: #363697;
    }
  }
}
.aboutMePic {
  position: relative;
  img {
    width: 80%;
  }
}
.articleWrap {
  position: relative;
  width: 90%;
  margin: 0 auto;
  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #fff;
    margin-bottom: 10px;
    &.btw {
      color: #aaa;
    }
  }
}
.reportLink {
  background-color: #f6a2ee;
  background-image: linear-gradient(-225deg, #96deda 0%, #57F2CC 48%, #50A7C2 100%);
  border-radius: 5px;
  border: 0;
  border-bottom: 2px solid rgb(59, 56, 56);
  padding: 5px;
  margin: 0 auto;
  color: #111;
  width: 80%;
  a {
    display: block;
    width: 100%;
    padding: 5px;
    text-decoration: none;
    font-size: 18px;
  }
  &:hover,
  &:active,
  &:focus {
    transition: 0.5s;
    background-image: linear-gradient(-135deg, #96deda 0%, #57F2CC 48%, #50A7C2 100%);
  }
}
.animatedTitle {
  position: absolute;
  bottom: -10%;
  font-size: 5rem;
  padding-left: 5%;
  font-style: italic;
  font-weight: bold;
  opacity: 0.8;
  color: #363697;
  font-family: "Caveat", cursive;
  z-index: -1;
}
</style>
