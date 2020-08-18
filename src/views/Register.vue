<template>
  <div>
    <LoginTop middle-top="注册bilibili"></LoginTop>
    <LoginText></LoginText>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import LoginTop from '@/components/common/LoginTop.vue';
  import LoginText from '@/components/common/LoginText.vue';
  @Component({
    components: {LoginText, LoginTop}
  })
  export default class Register extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>