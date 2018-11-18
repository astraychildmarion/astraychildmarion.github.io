<template lang="pug">
section#index(ref="indexPage")
  .bgWrapper
    img(src="../assets/keepmovingon.jpg" :class="{ bigimg: noBlur}").indexImg
    .blurBg(v-if="noBlur == !true")
    .targetPoint(@mouseenter="noBlur = true" class="animated infinite flash")
  .indexTitle
    .whiteMask(:class="{ noMask: noBlur}")
    h2 KEEP GOING
  goDown(v-show="noBlur" :scrolld="indexh")
</template>
<script>
import goDown from './goDown'

export default {
  name: 'indexPic',
  data: function () {
    return {
      noBlur: false,
      indexh: ''
    }
  },
  components: {
    goDown
  },
  methods: {
    getIndexHeight: function () {
      this.indexh = this.$refs.indexPage.clientHeight
      console.log(this.indexh)
      return this.indexh
    }
  },
  mounted () {
    this.getIndexHeight()
  }
}
</script>
<style lang="scss">
$gradientBg:  rgba(255, 255, 255, .5);

.el-main{
  padding:0;
}
section#index{
  display: flex;
  padding-bottom: 100px;
  position: relative;
}
.bgWrapper{
  flex: 1;
  height:100vh;
  display: inline-block;
  position: relative;
  overflow: hidden;
  .targetPoint{
    width: 30px;
    height: 30px;
    background: transparent url('../assets/target.png') no-repeat;
    background-size: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 5;
    filter: brightness(1);
    cursor: pointer;
    &:hover{
      filter: brightness(.2);
    }
  }
}
.indexTitle {
display: flex;
flex: 2;
position: relative;
align-items: center;
justify-content: center;
text-align: center;
font-size: 4rem;
letter-spacing: 5px;
  .whiteMask{
   width: 100%;
   height:50%;
   position: absolute;
   top: 0;
  //  background-color: $gradientBg;
   background-image: linear-gradient(to top,$gradientBg 50%, transparent 0%);
   background-size: 10px 10px;
   transition: top .5s;
   &.noMask{
     top:-20%;
     transition: top 1s;
   }
  }
}
.indexImg{
  width:auto;
  height: 100%;
  filter: blur(5px);
  transition: all .5s;
    &.bigimg{
      filter: blur(0);
      transform:scale(1.1);
      transition: all 1s;
  }
}
.blurBg{
  width:100vw;
  height:100vh;
  background: transparent url('../assets/blur.png') no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
