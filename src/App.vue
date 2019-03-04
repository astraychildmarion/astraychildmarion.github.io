<template lang="pug">
  #app
    el-container
      my-header
      el-main
        hello
        bio
        skill
        project
      el-footer
        my-footer
</template>

<script>
import myHeader from './components/header'
import myFooter from './components/footer'
import bio from './components/bio'
import hello from './components/hello'
import project from './components/project'
import skill from './components/skill'
export default {
  name: 'App',
  components: {
    myHeader,
    myFooter,
    hello,
    bio,
    skill,
    project
  }
}
</script>
<style lang="scss">
$h-color: #424e6a;
$text-color: #606266;
$text-color-sec:#909399;

body{
  margin: 0;
  position: relative;
  background-color: #f7f7f8;
  color:$text-color;
  font-family: 'Raleway', sans-serif;
  // font-family: 'Noto Sans TC', sans-serif;
}
.el-header, .el-footer {
  background-color: #dce6ef;
  color: $text-color;
  text-align: center;
  line-height: 60px;
}
#app .el-main{
  padding: 0;
}
div[class$="-wrapper"]{
  padding: 50px;
  box-sizing: border-box;
  @media only screen and (max-width: 769px){
    padding: 20px 10px 40px;
  }
  h3{
    padding: 10px 0;
    font-size: 2em;
  }
}

</style>
