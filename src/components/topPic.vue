<template lang="pug">
#index(ref="indexPage")
  .bgWrapper
    img(src="../assets/keepmovingon.jpg" :class="{ bigimg: noBlur}").indexImg
    .blurBg(v-if="noBlur == !true")
    .targetPoint(@mouseenter="noBlur = true" class="animated infinite flash")
  .indexTitle
    h5 Stay optimistic.
    h5 And
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
  watch: {
    indexh (val) {
      this.indexh = val
    }
  },
  mounted () {
    this.getIndexHeight()
    window.onresize = () => {
      this.getIndexHeight()
    }
  },
  methods: {
    getIndexHeight: function () {
      this.indexh = this.$refs.indexPage.clientHeight
      return this.indexh
    }
  }
}
</script>
<style lang="scss">
$gradientBg: rgba(255, 255, 255, 0.5);

.el-main {
  padding: 0;
}
#index {
  display: flex;
  padding-bottom: 100px;
  position: relative;
}
.bgWrapper {
  flex: 1;
  height: 100vh;
  display: inline-block;
  position: relative;
  overflow: hidden;
  .targetPoint {
    width: 30px;
    height: 30px;
    background: transparent url("../assets/target.png") no-repeat;
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
    &:hover {
      filter: brightness(0.2);
    }
  }
}
.indexTitle {
  display: flex;
  flex-direction: column;
  flex: 2;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  h5 {
    font-size: 2rem;
    margin: 10px auto;
    font-weight: 500;
    letter-spacing: 1px;
  }
  h2 {
    font-size: 4rem;
    letter-spacing: 5px;
    margin: 20px auto;
  }
}
.indexImg {
  width: auto;
  height: 100%;
  filter: blur(5px);
  transition: all 0.5s;
  &.bigimg {
    filter: blur(0);
    transform: scale(1.1);
    transition: all 1s;
  }
}
.blurBg {
  width: 100vw;
  height: 100vh;
  background: transparent url("../assets/blur.png") no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
