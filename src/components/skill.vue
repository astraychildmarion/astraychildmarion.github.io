<template lang="pug">
  .skill-wrapper
    h3 MY SKILL
    el-row(:gutter="10")
     el-col(v-for="item in stories" :xs="8" :sm="4")
      .story-board
        img(:src="item.src")
        h4 {{item.skill}}
        p {{item.story}}
</template>
<script>
export default {
  name: 'skill',
  data() {
    return {
      stories: [
        {
          src: require('../assets/icons/css.png'),
          skill:'CSS',
          // story: 'I am familiar to CSS3 and SCSS pre-processor. I do want to learn more about CSS grid.'
        },
        {
          src: require('../assets/icons/sass.png'),
          skill:'SASS',
          // story: 'Usually, I use JADE/PUG.'
        },
        {
          src: require('../assets/icons/html.png'),
          skill:'HTML',
          // story: 'Usually, I use JADE/PUG.'
        },
        {
          src: require('../assets/icons/pug.png'),
          skill:'PUG',
          // story: 'Usually, I use JADE/PUG.'
        },
        {
          src: require('../assets/icons/javascript.png'),
          skill:'JavaScript',
          // story: 'I learned Jquery before'
        },
        {
          src: require('../assets/icons/jquery.png'),
          skill:'Jquery',
          story: ''
        },
        {
          src: require('../assets/icons/bt.png'),
          skill:'BootStrap',
          story: ''
        },
        // {
        //   src: require('../assets/icons/element.svg'),
        //   skill:'element-ui',
        //   story: ''
        // },
        {
          src: require('../assets/icons/vue.png'),
          skill:'Vue.js',
          story: ''
        },
        {
          src: require('../assets/icons/photoshop.png'),
          skill:'PhotoShop',
          story: ''
        },
        // {
        //   src: require('../assets/icons/axure.png'),
        //   skill:'Axure',
        //   story: ''
        // },
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
    img{
      width: 50px;
      height: 50px;
      @media only screen and (max-width: 360px){
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
