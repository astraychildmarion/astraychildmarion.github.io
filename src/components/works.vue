<template lang="pug">
  section#section2(ref="work")
    .list-item(v-for="(item, index) in portfolio" :key="item.index")
      .mask(v-show="item.mask")
      .list-content(@mouseenter="showSwitch(index)" @mouseleave="showSwitch(index)")
        .meta
          p.type {{item.type}}
          p.des {{item.description}}
          button.reportLink(v-show="item.link !== ''")
            a(
              :href="item.link"
              target="_blank"
              ) Visit project
        .main
          p.company {{item.company}}
          h3.list-title {{item.name}}
</template>
<script>
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "works",
  components: {
    UAnimateContainer,
    UAnimate
  },
  data: function() {
    return {
      giveEffect: false,
      contentShow: false,
      portfolio: [
        {
          name: "Alchemycoin",
          description:
            "Alchemy P2P 網路借貸平台的第二版網站，業主在北美地區運作。此網站與另外一位設計師合作。我們產出整個網站的Layout，還有切版以及CSS撰寫。",
          link: "https://alchemycoin.io/#",
          company: "Alchemy",
          type: "網頁設計 + 切版 + 動態",
          mask: true
        },
        {
          name: "Archimist back",
          description:
            "Alchemy P2P 網路借貸平台的第一版網站的後台，此網站與另外一位設計師合作，我擔綱主視覺設計、CSS架構發想。此專案導入Bootstrap3,依循OOCSS的規範方式，架構專屬該後台的CSS libary。",
          link: "",
          company: "Alchemy",
          type: "網頁設計 + 切版 + 動態",
          mask: true
        },
        {
          name: "Pocket_Rus",
          description:
            "資策會的畢業作品，使用套件Skrollr，生動地展現首頁動畫。動畫素材取自網路上的刺繡線稿，由Photoshop後製成手繪風格。我負責網頁主視覺及首頁動畫，另外一位夥伴負責資料庫。連結內展示Demo影片。",
          link: "https://www.youtube.com/embed/C9QW6P98oTc",
          company: "資策會",
          type: "網頁設計 + 切版 + 動態",
          mask: true
        },
        {
          name: "Vue PhoneBook",
          description:
            "曾經面試過的公司出的試題，隨著對Vue知識的增加，一再回去更改作法。從笨作法到比較不笨的作法，漸漸活用Vue.js",
          link: "https://codepen.io/MarionMa/pen/pQRoOK",
          company: "",
          type: "JS練習",
          mask: true
        },
        {
          name: "午餐救星",
          description:
            "原本為了練習css3 的Transform效果，結果越寫越開心。一開始手動寫出所有的食物，後來改用陣列，最近加入隨機數。下一步要用Vue改寫",
          link: "https://codepen.io/MarionMa/pen/eGpvLY",
          company: "",
          type: "JS練習",
          mask: true
        },
        {
          name: "Gaming",
          description: "任職公司期間所執行的專案。底圖經過模糊化處理",
          link: "",
          company: "Keep secret",
          type: "網頁設計 + 切版 + 動態",
          mask: true
        }
      ]
    };
  },
  methods: {
    showSwitch: function(index) {
      this.portfolio[index].mask = !this.portfolio[index].mask;
      // 建立mask的個別性
    }
  }
};
</script>
<style lang="scss">
$mask: #362fd1;
$neon_word: #00ff00;
#section2 {
  padding: 100px 0%;
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
  @media (max-width: 767px) {
      background-color: rgba(#362fd1, .3);
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
    font-size: 70px;
    color: $neon_word;
  }
  .main {
    position: relative;
    min-height: 200px;
    padding-left: 20px;
    flex: 2;
    @media (max-width: 767px) {
      padding-top: 20px;
      flex: 1;
      h3 {
        margin-top: 40px;
      }
    }
  }
  .meta {
    padding: 0 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    line-height: 20px;
    .reportLink {
      width: 30%;
      position: relative;
      bottom: 0;
      margin: 0;
      @media (max-width: 767px) {
        width: 40%;
        top: 10px;
      }
    }
  }

  .company {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 10px;
  }
  .title {
    font-size: 40px;
    line-height: 1;
    margin-bottom: 0;
  }
  .type {
    font-size: 14px;
    line-height: 1;
    margin-bottom: 5px;
    color: #aaa;
  }
  .des {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 0;
    opacity: 0.5;
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
