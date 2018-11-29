<template lang="pug">
header
  h1
    a.headerLink(
      href="javascript:void(0)"
      title="Lian's blog"
       ) Wanderlust
  .headerWarp
    a.headerLink(
      v-for="(item,index) in headerMenu"
      href="javascript:void(0)"
      title="item.title"
      @click.prevent="jump('#section'+index)"
      )
      .item
        h5 {{ item.nameEn}}
        h5(v-if="scrollTop") {{ item.nameCn}}
</template>
<script>
export default {
  name: 'headerWarp',
  data: function () {
    return {
      scrollTop: true,
      headerMenu: [
        {
          title: 'wow',
          nameEn: 'About me',
          nameCn: '關於我'},
        {
          title: 'wow',
          nameEn: 'My Obsesion',
          nameCn: '我著迷的'},
        {
          title: 'wow',
          nameEn: 'Portforio',
          nameCn: '作品集'}
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
      window.scrollY > 50 ? this.scrollTop = false : this.scrollTop = true
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
header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
    h1{
    font-family: 'Caveat', cursive;
    margin-left: 2rem;
    width: fit-content;
  }
}
.headerLink {
  color: #00ff00;
  text-decoration: none;
  padding: 10px;
  &:hover {
    color: #ff00ff;
    text-shadow:1px #111;
    margin-top:10px;
    transition: all .5s;
  }
  }
.headerWarp {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: fit-content;
  .item {
    margin: 0 20px;
    text-align: center;
    h5{
      margin: 0;
    }
  }
}
</style>
