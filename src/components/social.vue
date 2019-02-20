<template lang="pug">
  .social-wrapper
    a(
      v-for="item in links"
      :key="item.index"
      :href="item.href"
      :class="{socialhover: showColor}"
      :title="item.title"
      @mouseover="removeFilter(index)"
      @mouseout="removeFilter(index)"
      )
      img.socialIcon(:src="item.imgSrc")
</template>
<script>
export default {
  name: 'socialLink',
  data: () => {
    return {
      insocial: false,
      showColor: false,
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
        {
          href:'',
          title: '',
          imgSrc:'',
        }
      ]
    }
  },
  methods: {
    removeFilter: function (index) {
      this.links[index].showColor = !this.links[index].showColor
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
        filter: grayscale(100%) brightness(100%);
      }
      &.socialhover {
        img {
          filter: grayscale(0%);
          transition: filter .5s;
        }
      }
    }
  }
</style>
