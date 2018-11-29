<template lang="pug">
section#section1(ref="favorite")
  .frame
    //- h2.pageTitle Things I love
    u-animate-container
      .swiperPosition
        swiper.blockWrap(:options="swiperOption" ref="mySwiper")
          .swiper-slide.blockLove(v-for="(item,index) in lovelist")
            u-animate(
              name="fadeInDown"
              delay="1s"
              duration=".5s"
              :iteration="1"
              :offset="100"
              animateClass="animated"
              :begin="false"
              )
              .picLove
                .cube
                  h5.title {{item.name}}
            u-animate(
              name="fadeInUp"
              delay=".5s"
              duration=".5s"
              :iteration="1"
              :offset="100"
              animateClass="animated"
              :begin="false"
            )
              p.blockp {{item.text}}
        .swiper-button-prev(slot="button-prev")
        .swiper-button-next(slot="button-prev")
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  name: 'favorite',
  data: function () {
    return {
      loveHover: false,
      lovelist: [
        {
          name: 'Travel',
          text: '在旅行中得到「成為網頁設計師」的靈感；從此之後，每年都要出國走走。是有些奢侈沒錯，但是有花錢的慾望才有賺錢的動力。'
        },
        {
          name: 'Sport',
          text: '最初因為膚淺的理由而開始運動，後來養成了運動習慣。對我來說，破除懶惰不是最難的部分，「放下比較的心」以及「接受自己」才是最難的。'
        },
        {
          name: 'Makeup',
          text: '大學時失戀，為了找事情做，就去考彩妝師執照。化妝就是在臉上畫畫，有時候創造一點心情，有時候遮掩一點疲倦。'
        },
        {
          name: 'Tarot',
          text: '屏除神秘的元素，塔羅之於我是一面鏡子，映照出當下的狀態。很實際阿!我們能掌握的也只有當下，當下才構成未來。'
        },
        {
          name: 'Coffee',
          text: '吃甜點配咖啡，是我最喜歡的事情之一。早上也要喝咖啡才真正醒來。喜歡中淺焙手沖與無糖熱拿鐵，練習過拉花但往往拉出抽象作品。'
        }
      ],
      swiperOption: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1
          },
          500: {
            slidesPerView: 1,
            slidesPerGroup: 1
          }
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    UAnimateContainer,
    UAnimate
  }
}
</script>
<style lang="scss">
$green: #2b7c93;
$blue: #b7d1e2;
$red: #c9728b;
$pink: rgba(#f7cdd6, .5) ;
$white: #f4f4f4;
.frame {
  padding: 120px 10% 150px;
  @media only screen and (max-width: 786px) {
    padding: 150px 10px;
  }
  @media only screen and (max-width: 550px) {
    padding: 40px 10px 50px;
  }
}
.swiperPosition{
  position: relative;
}
.pageTitle {
  text-align: center;
}
.blockWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.blockLove {
  width: 30%;
  @media only screen and (max-width: 7680px) {
    width: 50%;
  }
  @media only screen and (max-width: 550px) {
    width: 80%;
  }
    p.blockp {
    font-family: 'Rokkitt', serif;
    color: #111;
    font-size: 1em;
    margin: 0px auto 50px;
    padding: 60px 10px 10px;
    background-color: aliceblue;
    min-height: 80px;
  }
}
.picLove {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  @media only screen and (max-width: 768px) {
    min-width: 200px;
  }
  &:before{
    content: '';
    width: 100%;
    height:100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0, transparent 30%,transparent 70%, rgba(255, 255, 255, 0.5));
  }
  .cube {
    width: 60%;
    min-width: 100px;
    height: 80px;
    // background-color: $pink;
    background-size: 30px 30px;
    background-image: linear-gradient(135deg,$pink 0,$pink 25%, transparent 0,transparent 50%,$pink 0,$pink 75%, transparent 0,transparent 100%);
    position: absolute;
    bottom: -15%;
    left: 0;
    right: 0;
    margin: 0 auto;
    @media only screen and (max-width: 786px) {
      min-width: 80px;
      height: 80px;
    }
    h5 {
      font-family: "Caveat", cursive;
      margin: 10px 0 0;
      font-size: 3em;
      color: $green;
    }
  }
}
.blockLove:first-child .picLove {
  background-image: url("../assets/travel.jpg");
}
.blockLove:nth-child(2) .picLove {
  background-image: url("../assets/sport.jpg");
}
.blockLove:nth-child(3) .picLove {
  background-image: url("../assets/makeup.jpg");
}
.blockLove:nth-child(4) .picLove {
  background-image: url("../assets/tarot.jpg");
}
.blockLove:nth-child(5) .picLove {
  background-image: url("../assets/coffee.jpg");
}
.swiper-container{
  position:relative;
  .swiper-slide{
    &:after{
      content: '\f21e';
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 2rem;
      color: #D03075;
      position: absolute;
      display: block;
      width: 30px;
      height:30px;
      border-radius: 50%;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      animation: pulse 2s 1s infinite;
    }
  }
}
  .swiper-button-next, .swiper-button-prev{
    // position: relative;
    background-image: unset;
    // top: unset;
    // bottom: -20px;
  }
  .swiper-button-next{
    &:after{
    content: '\f0a9';
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 2.5rem;
      color: $green;
      // background-color: #fff;
      position: absolute;
      display: block;
      width: 30px;
      height:30px;
      // border-radius: 50%;
      // bottom: 0;
      right: -20px;
    }
  }
  .swiper-button-prev{
    &:after{
      content: '\f0a8';
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 2.5rem;
      color: $green;
      // background-color: #fff;
      position: absolute;
      display: block;
      width: 30px;
      height:30px;
      // border-radius: 50%;
      // bottom: 0;
      left: -20px;
    }
  }
</style>
