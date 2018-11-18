<template lang="pug">
header
  h1 Wanderlust
  .headerWarp
    a(v-for="(item,index) in headerMenu")(href="#", title="{item.title}").class
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
  a {
    color: #111;
    text-decoration: none;
    &:hover {
      color: #666;
      text-shadow:1px #111;
      margin-top:10px;
      transition: all .5s;
    }
  }
}
</style>
