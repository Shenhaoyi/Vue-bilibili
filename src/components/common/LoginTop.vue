<template>
  <div>
    <div class="login-top">
      <div>1</div>
      <div>{{middleTop}}</div>
      <div>1</div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class LoginTop extends Vue {
    @Prop() middleTop?: string
  }
</script>

<style lang="scss" scoped>
.login-top{
  height:50px;
  background: white;
  display: flex;
  > div{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
}
</style>