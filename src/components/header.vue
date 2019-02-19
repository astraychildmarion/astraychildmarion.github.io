<template lang="pug">
  .header-btn
    span M
</template>
<script>
export default {
  name: 'myHeader',
  data() {
    return {
      
    }
  }
}
</script>
<style lang="scss">
  .header-btn{
    position: fixed;
    background: #dc0e0e;
    margin: 10px;
    border: 5px solid #424e6a;
    border-radius: 8px;
    width: 50px;
    height: 50px;
    color: #424e6a;
    text-align: center;
    span{
      font-size: 36px;
      line-height: 50px;
    }
  }
</style>
