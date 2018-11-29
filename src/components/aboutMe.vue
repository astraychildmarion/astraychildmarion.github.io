<template lang="pug">
section#section0(ref="aboutMe")
  .articleWrap
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
          el-col(:xs="24" :sm="12")
            p Hi, there! I am Lian, a web developer bases in Taiwan.
              |I started web developer career in February 2017.So far, I love my job and keep learning new stuff with passion.
            p 你好啊! 我是Lian，歡迎來到我的個人網站。在此簡單地陳列一點作品；同時也使用自己會的技巧，建構這個空間。
              |我是台北人，現任網頁設計師。以前擔任過FB廣告投放手、英語文件翻譯、俄文業務、外電新聞影片編譯。
              |本來以為這是一份純設計的工作，卻因工作需求學會Vue.js，目前正自學以加強深度；目標是成為前端工程師。
              |程式語言的確改變了我的人生，數位時代雜誌在2018年初曾採訪我
            button.reportLink
              a(href="https://www.bnext.com.tw/article/48027/coding-change-marian-life", title="數位時代報導" target="_blank") click me
            p 直至今日，程式語言依舊是生活中一大挫折的來源(苦笑)，也只能把它當成第三外語，用心磨，每天磨。
            u-animate.animatedTitle(
              name="slideInRight"
              delay="1s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false" ) KEEP CALM
              br
              | AND LEARNING
              br
              | JAVASCRIPT
</template>
<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  name: 'aboutMe',
  data: function () {
    return {
      objoffsetTop: this.offsetTop
    }
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
}
</script>
<style lang="scss">
#section0{
  padding: 100px 80px;
    @media only screen and (max-width: 786px){
      padding: 50px 0 100px;
  }
}
.aboutMePic{
  position: relative;
  img{
    width:80%;
  }
}
.articleWrap{
  position: relative;
  width: 90%;  margin: 0 auto;
  p{
    font-weight: 300;
    font-size: 18px;
    line-height: 38px;
  }
}
.reportLink{
  background-color: pink;
  border-radius: 10px;
  padding: 5px;
  margin-left: 10px;
  color:#111;
  a{
    padding: 5px;
    text-decoration: none;
    &:hover,&:active,&:focus{
      color: red;
    }
  }
}
.animatedTitle{
  position: absolute;
  bottom: -10%;
  font-size: 5rem;
  padding-left:5%;
  font-style: italic;
  font-weight: bold;
  opacity: .8;
  color:#F8E0E4;
  font-family: 'Caveat', cursive;
  z-index: -1;
}
</style>
