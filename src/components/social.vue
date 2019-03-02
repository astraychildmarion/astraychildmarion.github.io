<template lang="pug">
  .social-wrapper
    a(
      v-for="(item,index) in links"
      :key="index"
      :href="item.href"
      :title="item.title"
      target="_blank"
      @mouseenter="addStyle"
      @mouseleave="removeStyle"
      )
      img.socialIcon(:src="item.imgSrc")
</template>
<script>
export default {
  name: 'socialLink',
  data: function () {
    return {
      insocial: false,
      links: [
        {
          href:'https://www.linkedin.com/in/marion-ma-326248100',
          title: 'Marion LinkedIn',
          imgSrc: require('../assets/icons/linkedin.png'),
          showColor: false
        },
        {
          href:'',
          title: 'Contact Me!',
          imgSrc:require('../assets/icons/instagram.png'),
          showColor: false
        },
        {
          href:'mailto:allidareused@gmail.com',
          title: 'Contact Me!',
          imgSrc: require('../assets/icons/gmail.png'),
          showColor: false
        },
      ]
    }
  },
  mounted() {

  },
  methods: {
    addStyle: function (elem) {
        this.getSiblings(elem).forEach(function (sib) {
        sib.classList.add('socialNonActive')
      })
    },
    removeStyle: function (elem) {
        this.getSiblings(elem).forEach(function (sib) {
        sib.classList.remove('socialNonActive')
      })
    },
    getSiblings: function (elem){
      let target = elem.target
      let siblings = []
      let previous = target.previousSibling
      let next = target.nextSibling
      while (previous) {
        if (previous.nodeType === 1 && previous !== target) {
          siblings.push(previous)
        }
          previous = previous.previousSibling
      }
      while (next) {
        if (next.nodeType === 1 && next !== target) {
          siblings.push(next)
        }
          next = next.nextSibling
      }
      return siblings
    }
  },
}
</script>
<style lang="scss">
  .social-wrapper{
    margin-top: 20px;
    a{
      display: inline-block;
      margin: 0 10px 0 0;
      width: 30px;
      height: 30px;
      img{
        width: 100%;
        transition: filter .5s;
      }
      &.socialNonActive {
        img {
          filter: grayscale(100%) brightness(100%);
          transition: filter .5s;
        }
      }
    }
  }
</style>
