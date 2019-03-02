<template lang="pug">
  .bio-wrapper
    h3 MY BIO
    u-animate-container
      u-animate(name="flipInX" :offset="150")
        .story-board(v-for="(item, key) in stories", key="index")
          h5.story-title {{ $t('stories.title') }}
          p {{ $t('stories.story1') }}
          p {{ $t('stories.story2') }}
          p {{ $t('stories.story3') }}
</template>
<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  name: 'bio',
  data () {
    return {
      stories: [
        {
          title: 'stories.title',
          story1: 'stories.story1',
          story2: 'stories.story2',
          story3: 'stories.story3'
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
