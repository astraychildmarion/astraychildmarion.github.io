<template lang="pug">
  section#works
    el-row.blockWork(:xs="24" :sm="12" v-for="(item) in portfolio" :key="item.index")
      el-col.blockPic(:xs="24" :sm="12")
        .workPic
      el-col(:xs="24" :sm="12")
        .workArticle
          h5 {{item.name}}
          p {{item.description}}
          a(:href="item.link" v-if="item.link !== ''")
</template>
<script>
export default {
  name: 'works',
  data: function () {
    return {
      giveEffect: false,
      portfolio: [
        {
          name: 'Alchemycoin',
          description:
            'Alchemy P2P 網路借貸平台。業主在北美地區運作。此網站與另外一位設計師合作，我負責各大區塊框架設定、影片區塊、前景規劃。',
          link: 'https://alchemycoin.io/#'
        },
        {
          name: 'Archimist back',
          description:
            'Alchemy P2P 網路借貸平台的後台。我擔綱網頁設計，並且系統化css，所以做完貸方的頁面，另一位設計師接手借方的頁面，就很快很輕鬆',
          link: 'https://alchemycoin.io/#'
        },
        {
          name: 'Pocket_Rus',
          description:
            '資策會的畢業作品，特色是大量使用css動畫。素材取自網路上的刺繡線稿，Photoshop成手繪風格。我負責網頁主視覺以及首頁的動畫，另外一位夥伴負責資料庫',
          link: 'https://www.youtube.com/embed/C9QW6P98oTc'
        },
        {
          name: 'Vue phone book',
          description:
            '曾經面試過的公司出的試題，隨著對Vue知識的增加，慢慢改寫這份試題。',
          link: ''
        },
        {
          name: 'What to eat',
          description:
            '「中午要吃什麼?」這個問題真的很困擾...。一開始為了練習css3 的翻牌效果，越寫越開心。後來加入隨機數以及用vue改寫。',
          link: ''
        },
        {
          name: 'Gaming',
          description: '前公司的作品不能放上來~殘念。',
          link: ''
        }
      ]
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
#works {
  // background-image: linear-gradient(to left, gray 20%, white 20%, white 80%, gray 80%, gray 100% );
  background-attachment: fixed;
  min-height: 100vh;
  background-image: url("../assets/cloud.png");
  background-size: 100%;
  background-position: bottom;
  padding: 100px 10%;
}
.blockPicLink {
  width: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.6);
  color: #000;
}
a:hover {
  color: plum;
}
.workPic{
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  @media only screen and (max-width: 786px) {
    width: 80%;
    height: 200px;
    margin: 0 auto;
    background-size: cover;
  }
}
.workArticle{
  padding: 30px 10% 0 15%;
  h5 {
    font-family: "Caveat", cursive;
    font-size: 24px;
    margin: 10px 0;
    padding-left: 20px;
  }
}
.blockWork{
  padding: 20px 30px;
  // background-color: #EBA2AF;
  background-image: linear-gradient(45deg, rgba(235, 162, 175, .5) 20%, rgba(248, 224, 228, 0.5) 100%);
  border-radius: 18px;
  margin-bottom: 30px;
}

.blockWork:nth-child(1) .workPic {
  background-image: url("../assets/archpage.jpg");
}
.blockWork:nth-child(2) .workPic {
  background-image: url("../assets/archback.jpg");
}
.blockWork:nth-child(3) .workPic {
  background-image: url("../assets/pocketrus.jpg");
}
.blockWork:nth-child(4) .workPic {
  background-image: url("../assets/vuephonebook.jpg");
}
.blockWork:nth-child(5) .workPic {
  background-image: url("../assets/whattoeat.jpg");
}
.blockWork:nth-child(6) .workPic {
  background-image: url("../assets/gaming.jpg");
  background-position: center bottom;
}
</style>
