<template lang="pug">
  section#section1(ref="work")
    .list-item(v-for="(item, index) in portfolio" :key="item.index")
      .mask(v-show="item.mask")
      .list-content(@mouseenter="showSwitch(index)" @mouseleave="showSwitch(index)")
        .meta
          .type(v-for="(p,index) in item.type") {{p}}
          p.des {{item.description}}
        .main
          h3.list-title {{item.name}}
          button.reportLink(v-show="item.link !== ''")
            a(
              :href="item.link"
              target="_blank"
              ) Visit this project
</template>
<script>
import { UAnimateContainer, UAnimate } from 'vue-wow'

export default {
  name: 'works',
  components: {
    UAnimateContainer,
    UAnimate
  },
  data: function () {
    return {
      giveEffect: false,
      contentShow: false,
      portfolio: [
        {
          name: 'Alchemycoin',
          description:
            'Alchemy P2P 網路借貸平台的第二版網站，業主在北美地區運作。此專案與接案夥伴合作。我們產出整個網站的Layout圖檔，切版以及CSS撰寫。',
          link: 'https://alchemycoin.io/#',
          company: 'Alchemy',
          type: ['網頁設計','scss/css3','pug/html','JQuery','Design Guideline','Bootstrap3'],
          mask: true
        },
        {
          name: 'Archimist back',
          description:
            'Alchemy P2P 網路借貸平台的第一版網站的後台，此專案與接案夥伴合作。我擔綱主視覺設計、產出Guideline、css切版。此專案導入Bootstrap3，依循OOCSS的規範方式，架構專屬該後台的CSS libary。',
          link: '',
          company: 'Alchemy',
          type: ['網頁設計','UX規劃','scss/css3','pug/html', 'JQuery','Design Guideline','Bootstrap3'],
          mask: true
        },
        {
          name: 'Pocket_Rus',
          description:
            '人生第一個完整的作品--資策會的畢業作品，使用套件Skrollr生動地展現首頁動畫。我負責網頁主視覺及首頁動畫，另外一位夥伴負責資料庫。連結內展示Demo影片。',
          link: 'https://www.youtube.com/embed/C9QW6P98oTc',
          company: '資策會',
          type: ['網頁設計','UX規劃','scss/css3','html', 'JQuery','Bootstrap3','Skrollr'],
          mask: true
        },
        {
          name: 'Vue PhoneBook',
          description:
            'Vue.js試題，隨著對Vue知識的增加，一再回去更改作法。從笨作法到比較不笨的作法，漸漸活用Vue.js',
          link: 'https://codepen.io/MarionMa/pen/pQRoOK',
          company: '',
          type: ['Vue.js'],
          mask: true
        },
        {
          name: '午餐救星',
          description:
            'css3 的Transform作業，結果越寫越開心。一開始手動寫出所有的食物，後來改用陣列，最近加入隨機數。下一步要用Vue改寫',
          link: 'https://codepen.io/MarionMa/pen/eGpvLY',
          company: '',
          type: ['Javascript','css3'],
          mask: true
        },
        {
          name: 'Gaming',
          description: '任職公司期間所執行的專案。底圖經過模糊化處理。主要工作內容是設計版面、切版、規劃公版以及系統化css，後期使用vue.js與前端工程師協作。',
          link: '',
          company: 'Keep secret',
          type: ['網頁設計','UX規劃','pug/html','scss/css3', 'Vue.js','SPA','vue element'],
          mask: true
        }
      ]
    }
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
$mask: #362fd1;
$neon_word: #dbd31c;
#section1 {
  padding: 0;
  overflow: hidden;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #362fd1;
  opacity: 1;
  transition: opacity 0.5s;
  @media (max-width: 1200px) {
      background-color: rgba(#362fd1, .8);
    }
}
.list-item {
  width: 100vw;
  height: auto;
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  align-content: space-between;
  flex-direction: column;
  padding: 40px 0;
  border-top: 1px solid #171270;
  .list-content {
    display: flex;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
  p {
    font-weight: bold;
    font-size: 22px;
    color: $neon_word;
  }
  .list-title {
    word-break: break-all;
    font-size: 70px;
    word-wrap:break-word;
    overflow: hidden;
    color: $neon_word;
    font-family: 'Rokkitt', serif;
  }
  .main {
    position: relative;
    min-height: 200px;
    padding-left: 20px;
    flex: 1;
    @media (max-width: 767px) {
      min-height: 150px;
      padding-top: 20px;
      h3 {
        margin: 30px 0;
        font-size: 60px;
      }
    }
  }
  .meta {
    padding: 0 20px;
    flex: 1;
    flex-direction: column;
    position: relative;
    line-height: 20px;
  }
  .reportLink {
    width: 50%;
    margin: 10px 0 0;
    z-index: 1;
    @media (max-width: 767px) {
      margin-bottom: 30px;
      width: 80%;
    }
  }
  .company {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 10px;
    font-family: 'Rokkitt', serif;
  }
  .title {
    font-size: 40px;
    line-height: 1;
    margin-bottom: 0;
    font-family: 'Rokkitt', serif;
  }
  .type {
    display: inline-block;
    margin: 0 5px 5px 0;
    // font-size: 14px;
    color: #aaa;
    line-height: 34px;
    height: 34px;
    padding: 0 20px;
    border: 1px solid #aaa;
    border-radius: 36px;
    overflow: hidden;
  }
  .des {
    color: #eee;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 0;
    opacity: 0.8;
  }
}
.list-item:nth-child(1) {
  background-image: url("../assets/archpage.jpg");
}
.list-item:nth-child(2) {
  background-image: url("../assets/archback.jpg");
}
.list-item:nth-child(3) {
  background-image: url("../assets/pocketrus.jpg");
}
.list-item:nth-child(4) {
  background-image: url("../assets/vuephonebook.jpg");
}
.list-item:nth-child(5) {
  background-image: url("../assets/whattoeat.jpg");
}
.list-item:nth-child(6) {
  background-image: url("../assets/gaming.jpg");
  background-position: center bottom;
}
.fade-enter-active {
  animation: fade 0.5s;
}
.fade-leave-active {
  animation: fade 0.5s reverse;
}
@keyframes fade {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
