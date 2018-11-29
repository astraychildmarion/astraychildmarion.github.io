<template lang="pug">
  section#section2(ref="work")
    .list-item(v-for="(item, index) in portfolio" :key="item.index")
      .mask(v-show="item.mask")
      .list-content(@mouseenter="showSwitch(index)" @mouseleave="showSwitch(index)")
        .meta
          p.type {{item.type}}
          p.des {{item.description}}
          button(v-show="item.link !== ''")
            a(:href="item.link") click me
        .main
          p.company {{item.company}}
          h3.list-title {{item.name}}
</template>
<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  name: 'works',
  data: function () {
    return {
      giveEffect: false,
      contentShow: false,
      portfolio: [
        {
          name: 'Alchemycoin',
          description:
            'Alchemy P2P 網路借貸平台。業主在北美地區運作。此網站與另外一位設計師合作，我負責各大區塊框架設定、影片區塊、前景規劃。',
          link: 'https://alchemycoin.io/#',
          company: 'Alchemy',
          type: '網頁設計 + 切版 + 動態',
          mask: true
        },
        {
          name: 'Archimist back',
          description:
            'Alchemy P2P 網路借貸平台的後台。我擔綱網頁設計，並且系統化css，所以做完貸方的頁面，另一位設計師接手借方的頁面，就很快很輕鬆',
          link: 'https://alchemycoin.io/#',
          company: 'Alchemy',
          type: '網頁設計 + 切版 + 動態',
          mask: true
        },
        {
          name: 'Pocket_Rus',
          description:
            '資策會的畢業作品，特色是大量使用css動畫。素材取自網路上的刺繡線稿，Photoshop成手繪風格。我負責網頁主視覺以及首頁的動畫，另外一位夥伴負責資料庫',
          link: 'https://www.youtube.com/embed/C9QW6P98oTc',
          company: '資策會',
          type: '網頁設計 + 切版 + 動態',
          mask: true
        },
        {
          name: 'Vue phone book',
          description:
            '曾經面試過的公司出的試題，隨著對Vue知識的增加，慢慢改寫這份試題。',
          link: '',
          company: 'None',
          type: 'JS練習',
          mask: true
        },
        {
          name: 'What to eat',
          description:
            '「中午要吃什麼?」這個問題真的很困擾...。一開始為了練習css3 的翻牌效果，越寫越開心。後來加入隨機數以及用vue改寫。',
          link: '',
          company: 'None',
          type: 'JS練習',
          mask: true
        },
        {
          name: 'Gaming',
          description: '前公司的作品不能放上來~殘念。',
          link: '',
          company: 'Keep secret',
          type: '網頁設計 + 切版 + 動態',
          mask: true
        }
      ]
    }
  },
  components: {
    UAnimateContainer,
    UAnimate
  },
  methods: {
    showSwitch: function (index) {
      this.portfolio[index].mask = !this.portfolio[index].mask
      // 建立mask的個別性
    }
  }
}
</script>
<style lang="scss">
$green: #2b7c93;
$blue: #b7d1e2;
$red: #c9728b;
$pink: #f7cdd6;
$white: #f4f4f4;
#section2 {
  padding: 100px 0%;
}
.mask{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: #362fd1;
  opacity: 1;
  transition: opacity .5s;
}
.list-item{
  width: 100vw;
  height: auto ;
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  align-content: space-between;
  flex-direction: column;
  padding: 40px 0;
  border-top: 1px solid rgba(0,0,0,.5);
  .list-content{
    display: flex;
  }
  p{
    font-weight: bold;
    font-size: 22px;
    color: #00ff00;
  }
  .list-title{
    font-size: 70px;
    color: #00ff00;
  }
  .main{
    position: relative;
    min-height: 170px;
    padding-left: 20px;
    flex:2;
  }
  .meta{
    padding-left: 20px;
    flex:1;
    display: flex;
    flex-direction: column;
    position: relative;
    button{
      position: absolute;
      bottom: 0;

    }
  }
  .company{
    font-size: 18px;
    line-height: 1;
    margin-bottom: 10px;
  }
  .title{
    font-size: 40px;
    line-height: 1;
    margin-bottom: 0;
  }
  .type{
    font-size: 14px;
    line-height: 1;
    margin-bottom: 5px;
    color: #aaa;
  }
  .des{
    font-size: 14px;
    line-height: 1.1;
    margin-bottom: 0;
    opacity: .5;
  }

}

.list-item:nth-child(1){
  background-image: url("../assets/archpage.jpg");
}
.list-item:nth-child(2){
  background-image: url("../assets/archback.jpg");
}
.list-item:nth-child(3){
  background-image: url("../assets/pocketrus.jpg");
}
.list-item:nth-child(4){
  background-image: url("../assets/vuephonebook.jpg");
}
.list-item:nth-child(5){
  background-image: url("../assets/whattoeat.jpg");
}
.list-item:nth-child(6){
  background-image: url("../assets/gaming.jpg");
  background-position: center bottom;
}
</style>
