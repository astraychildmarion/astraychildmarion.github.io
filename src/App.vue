<template lang="pug">
  #app
    el-container
      el-header
        headerWarp
      el-main
        indexPic
        aboutMe
        //- favorite
        works
        socialFloat
    el-footer
      foot
</template>

<script>
import headerWarp from './components/header'
import aboutMe from './components/aboutMe'
import favorite from './components/favorite'
import socialFloat from './components/rightFloat'
import works from './components/works'
import indexPic from './components/topPic'
import foot from './components/footer'

export default {
  name: 'App',
  components: {
    headerWarp,
    aboutMe,
    favorite,
    socialFloat,
    works,
    indexPic,
    foot
  }
}
</script>
<style lang="scss">
*{
  font-family: 'Rokkitt', serif;
}
body{
    margin: 0;
    position: relative;
}
</style>
