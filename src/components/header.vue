<template lang="pug">
  .lang-btn
    el-select(v-model="$i18n.locale")
      el-option(v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang") {{ lang }}
    label(for="locale") {{ $t('langChoose') }}
</template>
<script>
export default {
  name: 'myHeader',
  data () {
    return {
      langs: ['en', 'tw']
    }
  },
  watch: {
    lang (value) {
      this.$i18n.locale = value
    }
  }
}
</script>
<style lang="scss">
.lang-btn{
  padding: 5px 20px;
  background-color: #000;
  color: #fff;
  label{
    line-height: 30px;
    float: right;
    padding: 0 10px;
  }
  .el-select{
    float: right;
    width: 80px;
  }
  .el-input__inner{
    background: transparent;
    height: 30px;
    line-height: 30px;
    color: lightblue;
    &:hover{
      border:1px solid mediumorchid;
    }
  }
  .el-input__icon{
    line-height: 30px;
  }
  .el-select .el-input.is-focus .el-input__inner,
  .el-select .el-input__inner:focus{
      border-color: mediumorchid;
  }
}
.el-select-dropdown__item.selected{
  color: mediumorchid;
}
</style>
