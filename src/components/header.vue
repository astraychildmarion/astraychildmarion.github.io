<template lang="pug">
header
  .headerWarp
    a(href="#", title="title").class
      .item
        h5 About me
        h5 關於我
    a(href="#", title="title").class
      .item
        h5 My Obsesion
        h5 我著迷的
    a(href="#", title="title").class
      .item
        h5 Portforio
        h5 作品
</template>
<script>
export default {
  name: "headerWarp"
};
</script>
<style lang="scss">
body{
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
    position: relative;
}
.headerWarp {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #96a1a1;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .item {
    margin: 0 20px;
    text-align: center;
    h5{
      margin: 0;
      &:first-child{
        margin-bottom: 10px;
        font-size: 1em;
      }
    }
  }
  a {
    color: #eee;
    text-decoration: none;
    &:hover {
      color: #1f1f1f;
    }
  }
}
</style>
