<template>
  <div>
    1
    <LoginTop middle-top="注册bilibili"></LoginTop>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import LoginTop from '@/components/common/LoginTop.vue';
  @Component({
    components: {LoginTop}
  })
  export default class Register extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>