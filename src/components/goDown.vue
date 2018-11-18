<template lang="pug">
  .goDown(@click="moveNext(300)" class="animated infinite pulse slower")
    i.fa.fa-arrow-circle-down
    //- span Scroll down
</template>
<script>
export default {
  name: 'goDown',
  data: function () {
    return {
      distance: 0
    }
  },
  props: ['scrolld'],
  methods: {
    handleScroll () {
      this.scrollTop = window.pageYOffset
      // console.log(this.scrollTop)
    },
    moveNext (duration) {
      // console.log('interval run')
      let pace = (this.scrolld / duration)
      this.interval = setInterval(() => {
        // console.log(pace + 'pce++')
        this.distance += pace
        window.scrollTo(0, this.distance)
        if (this.scrollTop > this.scrolld) {
          window.scrollTo(0, this.scrolld)
          clearInterval(this.interval)
        }
      }, 10)
    }
  },
  watch: {
    scrolld (val) {
      console.log('renew')
      this.scrolld = val
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
}
</script>
<style lang="scss">
.goDown{
  width:50px;
  height:50px;
  color:pink;
  position: absolute;
  left: 0;
  right:0;
  bottom:20%;
  transform: translateY(0);
  margin: auto;
  font-size: 2.8rem;
  transition: all .5s;
  cursor: pointer;
  &:hover{
    transform: translateY(10px);
    transition: all .5s;
    transform-origin: center;
  }
  span{
    font-size: 1rem;
    color: #111;
  }
}
</style>
