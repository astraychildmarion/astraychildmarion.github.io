<template lang="pug">
section#aboutMe
  .bgWrapper
    .bgLeft
    .bgCenter
    .bgRight
    .indexTitle
      .wordWrap
        .word K
        .word E
        .word E
        .word P
      .wordWrap
        .word M
        .word O
        .word V
        .word I
        .word N
        .word G
      .wordWrap
        .word O
        .word N
</template>
<script>
export default {
  name: 'aboutMe'
}
</script>
<style lang="scss">
.indexTitle{
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  align-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: min-content;
  .wordWrap{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 25px;
    font-size: 8em;
    color: azure;
  }
  .word{
    margin: 0 5px;
  }
}
.bgWrapper{
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  [class^="bg"]{
    background: transparent url('../assets/keepmovingon.jpg') no-repeat;
    flex-grow: 1;
    background-position: bottom left;
    background-size:auto 100%;
    opacity: .8;
    &:hover{
      flex-grow: 1.5;
      transition: flex-grow 1s;
    }
  }
  .bgRight{
    background-position: bottom right;
  }
  .bgCenter{
    flex-grow: 3;
    background-size: cover;
    opacity: 1;
    &:hover{
      flex-grow: 3.5;
      transition: flex-grow 1s;
    }
  }
}
</style>

