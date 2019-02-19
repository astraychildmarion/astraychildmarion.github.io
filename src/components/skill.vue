<template lang="pug">
  .skill-wrapper
    h3 MY SKILL
    el-row(:gutter="10")
     el-col(v-for="item in stories" :xs="12" :sm="8")
      .story-board
        img(:src="item.src")
        h5 {{item.skill}}
        p {{item.story}}
</template>
<script>
export default {
  name: 'skill',
  data() {
    return {
      stories: [
        {
          src: '../assets/icons/css.png',
          skill:'CSS',
          // story: 'I am familiar to CSS3 and SCSS pre-processor. I do want to learn more about CSS grid.'
        },
        {
          src: './assets/icons/html.png',
          skill:'HTML',
          // story: 'Usually, I use JADE/PUG.'
        },
        {
          src: '../assets/icons/javascript.png',
          skill:'JavaScript',
          // story: 'I learned Jquery before'
        },
        {
          src: '../assets/icons/jquery.png',
          skill:'Jquery',
          story: ''
        },
        {
          src: '../assets/icons/bt.png',
          skill:'BootStrap',
          story: ''
        },
        {
          src: '../assets/icons/element.svg',
          skill:'element-ui',
          story: ''
        },
        {
          src: '../assets/icons/vue.png',
          skill:'Vue.js',
          story: ''
        },
        {
          src: '../assets/icons/photoshop.png',
          skill:'PhotoShop',
          story: ''
        },
        {
          src: '../assets/icons/axure.png',
          skill:'Axure',
          story: ''
        },
      ]
    }
  }
}
</script>
<style lang="scss">
.skill-wrapper{
  background: #fab4cc;
  .el-col{
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .story-board{
    text-align: center;
  }
}
</style>
