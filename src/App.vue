<template lang="pug">
  #app
    el-container
      el-header
        headerWarp
      el-main
        indexPic
        aboutMe
        resume
        //- favorite
        works
        socialFloat
    el-footer
      foot
</template>

<script>
import headerWarp from './components/header'
import aboutMe from './components/aboutMe'
import resume from './components/resume'
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
    resume,
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
  font-family: 'Noto Sans TC', 'Rokkitt', 'Caveat', serif;
}
body{
    margin: 0;
    position: relative;
    background-color: #000;
}
</style>
