<template lang="pug">
.footer
  p 任何工作機會，都可以聯絡我。
  p 請點選右側Gmail圖示，或是寄信至allidareused@gmail.com
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
