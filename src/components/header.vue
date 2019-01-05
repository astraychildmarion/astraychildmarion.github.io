<template lang="pug">
.headerWrap
  .headerLink(
    title="a front-end engineer wanna-be"
      )
    b MarionDesign.
  a.headerItemLink(
    v-for="(item,index) in headerMenu"
    href="javascript:void(0)"
    title="item.title"
    @click.prevent="jump('#section'+index)"
    )
    .item(:class="{ moveDown : !scrollTop }")
      b {{ item.nameEn}}
      b(v-if="scrollTop") {{ item.nameCn}}
</template>
<script>
export default {
  name: "headerWarp",
  data: function() {
    return {
      scrollTop: true,
      headerMenu: [
        {
          title: "關於我",
          nameEn: "AboutMe",
          nameCn: "關於我"
        },
        // {
        //   title: 'wow',
        //   nameEn: 'My Obsesion',
        //   nameCn: '我著迷的'
        // },
        {
          title: "作品集",
          nameEn: "Portforio",
          nameCn: "作品集"
        }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    console.log('scrolling Injected')
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    console.log('scrolling Destroyed')
  },
  methods: {
    handleScroll: function (e) {
      window.scrollY > 50 ? (this.scrollTop = false) : (this.scrollTop = true)
    },
    jump (selector) {
      let sectionTag = document.querySelector(selector)
      console.log(sectionTag)
      document.body.scrollTop = sectionTag.offsetTop
      document.documentElement.scrollTop = sectionTag.offsetTop
      window.pageYOffset = sectionTag.offsetTop
    }
  }
}
</script>
<style lang="scss">
.el-header {
  width: 100%;
  position: fixed;
  background-color: rgba($color: #000000, $alpha: 0.3);
  background-image: linear-gradient(
    to bottom,
    rgba($color: #16222a, $alpha: 0.5),
    rgba($color: #3a6073, $alpha: 0.3)
  );
  z-index: 10;
  display: flex;
  padding: 10px 0 0 20px;
}
.headerWrap {
  background-color: transparent;
  display: flex;
  padding: 0;
  text-decoration: none;
  b {
    font-family: "Caveat", serif;
     font-size: 14px;
  }
}
.headerLink {
  text-decoration: none;
  padding: 0 2rem;
  font-size: 36px;
  font-weight: bold;
  b {
    color: #fff;
    font-size: 28px;
    vertical-align: text-top;
    &:hover {
      color: #dbd31c;
      text-shadow: 1px #111;
      transition: all 0.5s;
    }
  }
  @media (max-width: 480px) {
    padding: 0px;
    font-size: 16px;
    // margin-top: 10px;
  }
}
.headerItemLink {
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 767px) {
    width: 100%;
  }
  .item {
    color: #ccc;
    margin: 0 20px;
    text-align: center;
    @media (max-width: 480px) {
      margin: 0 10px;
    }
    &:hover {
      color: #dbd31c;
      text-shadow: 1px #111;
      transition: all 0.5s;
    }
    &.moveDown {
      margin-top: 10px;
      transition: all 0.5s;
    }
    b {
      margin: 0;
      font-weight: bold;
      display: block;
    }
  }
}
</style>
