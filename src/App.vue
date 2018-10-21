<template lang="pug">
  #app
    headerWarp
    .content-wrapper
      aboutMe
      favorite
      works
    socialFloat
    footer
</template>

<script>
import headerWarp from './components/header'
import aboutMe from './components/aboutMe'
import favorite from './components/favorite'
import socialFloat from './components/rightFloat'
import works from './components/works'

export default {
  name: 'App',
  components: {
    headerWarp,
    aboutMe,
    favorite,
    socialFloat,
    works
  },
}
</script>
<style lang="scss">
.content-wrapper{
  padding-top: 84px;
}
</style>
