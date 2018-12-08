<template lang="pug">
section#resume
  u-animate-container
    el-row(gutter="20")
      el-col(:xs="24" :sm="8")
        .block.personal
          u-animate(
          name="fadeInLeft"
          delay="s"
          duration=".5s"
          :iteration="1"
          :offset="100"
          animateClass="animated"
          :begin="false"
          )
            .block-title 馬麗安
            p WebDesigner and
            p FrontEnd Engineer
      el-col(:xs="24" :sm="8")
        u-animate(
          name="fadeInUp"
          delay="0s"
          duration=".5s"
          :iteration="1"
          :offset="100"
          animateClass="animated"
          :begin="false"
          )
          .block
            .block-title 基本資料
            .block-content
              p 
                b 出生年
                |&nbsp&nbsp1988
              p
                b 活動地點
                |&nbsp&nbsp台北、台中
              p 
                b 工作經驗
                |&nbsp&nbsp5年
      el-col(:xs="24" :sm="8")
        u-animate(
          name="fadeInUp"
          delay="0s"
          duration=".5s"
          :iteration="1"
          :offset="100"
          animateClass="animated"
          :begin="false"
          )
          .block
            .block-title 求學過程
            .block-content
              p 國立政治大學 斯拉夫語文學系 俄文組
              p 資策會 UI/UX 設計師養成班
      el-col(:xs="24" :sm="8")
        u-animate(
          name="fadeInUp"
          delay=".5s"
          duration=".5s"
          :iteration="1"
          :offset="100"
          animateClass="animated"
          :begin="false"
          )
          .block
            .block-title 工作經歷
            .block-content
              p 紐強國際實業 俄文業務
              p 愛酷3C 外電編譯
              p 9sPlay 行銷專員
              p 現職 網頁設計師
      el-col(:xs="24" :sm="8")
        u-animate(
          name="fadeInUp"
          delay=".5s"
          duration=".5s"
          :iteration="1"
          :offset="100"
          animateClass="animated"
          :begin="false"
          )
          .block
            .block-title 專業技能
            .block-content
              p pug/html
              p scss/css
              p javascript
              p vue.js
              p adobe photoshop
      el-col(:xs="24" :sm="8")
        u-animate(
          name="fadeInUp"
          delay=".5s"
          duration=".5s"
          :iteration="1"
          :offset="100"
          animateClass="animated"
          :begin="false"
          )
          .block
            .block-title 個人技能
            .block-content
              p
                b english
                |&nbsp&nbsp多益金色證書
              p 
                b russian
                |&nbsp&nbsp檢定三級證書
              p 美容丙級證照
              p 華語文教師證照
      el-col(:xs="24" :sm="8")
        u-animate(
          name="fadeInUp"
          delay=".5s"
          duration=".5s"
          :iteration="1"
          :offset="100"
          animateClass="animated"
          :begin="false"
          )
          .block
            .block-title 聯絡方式
            .block-content
              p
                b linkedin
                br
                br
                |https://www.linkedin.com/in/marion-ma-326248100
              p
                b e-mail
                br
                br
                |allidareused@gmail.com
</template>
<script>
import { UAnimateContainer, UAnimate } from 'vue-wow'

export default {
  name: "resume",
  components: {
    UAnimateContainer,
    UAnimate
  },
  data: function() {
    return {};
  }
};
</script>
<style lang="scss">
#resume {
  padding: 50px 20px 80px;
  counter-reset: num;
  background: #232526; /* fallback for old browsers */
  background: linear-gradient(
    to bottom,
    #000 5%,
    #2e1437 30%,
    #2a0845 60%,
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.block {
  background-color: rgba($color: #fff, $alpha: .2);
  box-shadow: 1px 1px 1px 1px rgba($color: #fff, $alpha: .4);
  border-radius: 5px;
  font-family: "Noto Sans TC", "Rokkitt", sans-serif;
  padding: 30px;
  padding-left: 80px;
  min-height: 250px;
  margin-bottom: 20px;
  &.personal {
    background-color: transparent;
    box-shadow: unset;
    .block-title {
      color: #61FBAD;
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: right;
      &:after,
      &:before {
        display: none;
      }
    }
    p {
      font-size: 36px;
      font-weight: bold;
      font-family: "Caveat", cursive;
      text-align: right;
      line-height: 0.5;
      color: #362fd1;
    }
  }
  &-title {
     color: #eee;
    border-bottom: 2px solid #999;
    font-size: 28px;
    margin-bottom: 20px;
    position: relative;
    padding-left: 10px;
    padding-bottom: 10px;
    &:before {
      content: "";
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background-color: #000;
      position: absolute;
      top: 0px;
      right: 0px;
      box-shadow: 1px 2px 1px 1px #aaa inset;
    }
    &:after {
      counter-increment: num;
      content: counter(num) ".";
      width: 30px;
      height: 30px;
      background-color: #666;
      color: #fff;
      display: block;
      position: absolute;
      padding: 3px;
      left: -50px;
      top: 0px;
      text-align: center;
    }
  }
  &-content {
    color: #aaa;
    font-size: 16px;
    line-height: 1.2;
    text-transform: uppercase;
    word-break: break-all;
  }
}
</style>
