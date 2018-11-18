<template lang="pug">
.footer
  p 2018 Marion Ma Copy Right
</template>
<script>
export default {
  name: 'foot'
}
</script>
<style lang="scss">
.footer{
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  z-index: 10;
  text-align: center;
  background-color: #000;
  color: antiquewhite;
}
.el-footer{
  padding: 0;
  height:unset;
}
</style>
