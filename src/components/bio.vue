<template lang="pug">
  .bio-wrapper
    h3 MY BIO
    u-animate-container
      u-animate(name="flipInX" :offset="150")
        .story-board(v-for="(item, key) in stories", key="index")
          h5.story-title {{item.title}}
          p {{item.story1}}
          p {{item.story2}}
          p {{item.story3}}
</template>
<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  name: 'bio',
  data() {
    return {
      stories: [
        {
          title: 'The beginning of my story',
          story1: 'I am not always spending time on the computer, but spent my teens on manga and school learning. Finally, I graduated from one of the best university in Taiwan, and my major was Russian.',
          story2: 'When I quit my third job, I decided to visit California, the States. My high school best friend worked as a web-designer in LA. I stayed with her for weeks. She showed me her works and inspired me to learn web design. In the next 6 months, I joined a program to teach people how to bulid a website and design.',
          story3: 'It had been 2 years since I changed my careers as a web designer. I think I would keep going and explore more about web development. '
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
.bio-wrapper{
  background: #acdcdd;
  // padding: 50px;
}
.story-board{
  padding: 30px 50px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: #f7f7f8;
  box-shadow: 5px 5px rgba(0,0,0,0.15);
    @media only screen and (max-width: 875px){
      padding: 20px 30px;
    }
    @media only screen and (max-width: 360px){
      padding: 10px;
    }
  &:last-child {
    margin-bottom: 0px;
  }
  .story-title{
    font-style: italic;
  }
  p{
    line-height: 1.5;
  }
}
</style>
