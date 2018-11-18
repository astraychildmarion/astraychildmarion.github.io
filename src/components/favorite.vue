<template lang="pug">
section#favorite
  .frame
    //- h2.pageTitle Things I love
    .swiperPosition
      swiper.blockWrap(:options="swiperOption" ref="mySwiper")
        .swiper-slide.blockLove(v-for="(item,index) in lovelist")
          .picLove(@mouseover="loveHover = true" @mouseleave="loveHover = false")
            .cube
              h5.title {{item.name}}
          p.blockp(v-show="loveHover") {{item.text}}
      .swiper-button-prev(slot="button-prev")
      .swiper-button-next(slot="button-prev")
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

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
          text: '五歲的時候就拿老媽的口紅來玩，大學時失戀，為了找事情做，就去考彩妝師執照。有人喜歡隨筆塗鴉，對我來說，化妝就是在臉上畫畫，有時候創造一點心情，有時候遮掩一點疲倦。'
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
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss">
$green: #2b7c93;
$blue: #b7d1e2;
$red: #c9728b;
$pink: #f7cdd6;
$white: #f4f4f4;
.frame {
  padding: 100px 10% 200px;
  @media only screen and (max-width: 786px) {
    padding: 50px;
  }
  @media only screen and (max-width: 550px) {
    padding: 30px 10px;
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
  @media only screen and (max-width: 550px) {
    width: 80%;
  }
    p.blockp {
    font-family: "Caveat", cursive;
    color: #111;
    font-size: 1em;
    margin: 60px auto 50px;
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
    width: 40%;
    min-width: 100px;
    height: 80px;
    background-color: $pink;
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
  &:after{
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height:3px;
    background-color: rgba(208, 48, 117, 0.6);
    bottom: 0;
  }
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
    top: unset;
    bottom: -20px;
  }
</style>
