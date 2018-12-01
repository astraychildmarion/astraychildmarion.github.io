<template lang="pug">
  .socialWarp(@mouseover="insocial = true" @mouseout="insocial = false" :class="{socialhover: insocial}")
    .circle(v-for="(item,index) in socialMedia" :key="index")
      a(:href="item.href", :title="item.title")
        img(:src='item.imgSrc')
</template>
<script>
export default {
  name: 'socialFloat',
  data: function () {
    return {
      insocial: false,
      socialMedia: [
        // {
        //   title: '@astraychildalisha',
        //   href: '#',
        //   imgSrc: '../assets/instagram.png'
        // },
        {
          title: 'Marion LinkedIn',
          href: '#',
          imgSrc: '../assets/linkedin.png'
        },
        {
          title: 'Contact Me!',
          href: '#',
          imgSrc: '../assets/gmail.png'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.socialWarp {
  position: fixed;
  right: 0;
  top:40%;
  z-index: 10;
  &.socialhover {
    img {
      filter: grayscale(80%);
      transition: filter .5s;
    }
  }
  .circle {
    background-color: #1f1f1f;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px 0;
    a {
      width: 100%;
      height: 100%;
      display: block;
      padding-top: 10px;
    }
    img {
      width: 30px;
      margin: 0 auto;
      display: block;
    }
    &:hover{
      img{
        filter: grayscale(0%);
      }
    }
  }
}
</style>
