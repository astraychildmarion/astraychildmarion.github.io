<template lang="pug">
  .skill-wrapper
    h3 MY SKILL
    el-row(:gutter="20")
      u-animate-container
        el-col.stories(v-for="(item,index) in stories" :xs="8" :sm="4" :key="index")
          u-animate(name="flipInX" :offset="100" duration=".5s")
            .story-board
              u-animate(name="slideInUp" :offset="100" delay=".2s" duration=".5s")
                img(:src="item.src")
              h4 {{item.skill}}
              p {{item.story}}
</template>
<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  name: 'skill',
  data () {
    return {
      stories: [
        {
          src: require('../assets/icons/javascript.png'),
          skill: 'JavaScript'
        },
        {
          src: require('../assets/icons/vue.png'),
          skill: 'Vue.js'
        },
        {
          src: require('../assets/icons/css.png'),
          skill: 'CSS'
        },
        {
          src: require('../assets/icons/sass.png'),
          skill: 'SASS'
        },
        {
          src: require('../assets/icons/html.png'),
          skill: 'HTML'
        },
        {
          src: require('../assets/icons/pug.png'),
          skill: 'PUG'
        },
        {
          src: require('../assets/icons/jquery.png'),
          skill: 'Jquery'
        },
        {
          src: require('../assets/icons/bt.png'),
          skill: 'BootStrap'
        },
        {
          src: require('../assets/icons/photoshop.png'),
          skill: 'PhotoShop'
        }
      ]
    }
  },
  components: {
    UAnimateContainer,
    UAnimate
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
  .stories{
    border-radius: 8px;
    &:nth-child(2n+1) .story-board {
      box-shadow: 5px 5px #7EEFD8;
    }
    &:nth-child(2n) .story-board{
      box-shadow: 5px 5px #C3A0E4;
    }
  }
  .story-board{
    text-align: center;
    margin-bottom: 10px;
    padding: 30px 20px;
    border: 1px solid #333;
    img{
      width: 50px;
      height: 50px;
      @media only screen and (max-width: 360px){
        width: 40px;
        height: 40px;
        padding: 20px 10px;
      }
      &:hover{

      }
    }
  }
}
</style>
