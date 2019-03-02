<template lang="pug">
  .hello-wrapper
    .text-block
      h2 Hello, I'm
      h1
        strong MARION MA
      social-link
</template>
<script>
import socialLink from './social'

export default {
  name: 'hello',
  data () {
    return {
    }
  },
  components: {
    socialLink
  }
}
</script>
<style lang="scss">
.hello-wrapper {
  background: fixed transparent url('../assets/selfie_deer.jpg') right/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
    @media only screen and (max-width: 769px){
      height: 500px;
      background-position: center;
    }
  .text-block{
    text-align: center;
    color: #fff;
    h1{
      position: relative;
      font-size: 3em;
      margin: 0;
      @media only screen and (max-width: 1367px){
        font-size: 4em;
      }
      @media only screen and (max-width: 600px){
        // font-size: 3em;
      }
    &:before{
      content: "";
      background: #fff;
      display: inline-block;
      height: 2px;
      margin: 0 10px;
      position: absolute;
      top: 50%;
      right: 100%;
      width: 50px;
      zoom: 1;
        @media only screen and (max-width: 875px){
          display: none;
        }
      }
    &:after{
      content: "";
      background: #fff;
      display: inline-block;
      height: 2px;
      margin: 0 10px;
      position: absolute;
      top: 50%;
      width: 50px;
      zoom: 1;
      @media only screen and (max-width: 875px){
          top: unset;
          bottom: -20%;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: 80px;
        }
      }
    }
    h2{
      margin: 0 0 20px 0;
      font-style: italic;
      font-size: 2em;
      font-weight: 300;
    }
  }
}
</style>
