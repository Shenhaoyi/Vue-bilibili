<template>
  <div>
    <div class="login-top">
      <div class="logo" @click="$router.push('/')">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div>{{middleTop}}</div>
      <div>
        <slot name="right"></slot>
      </div>
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

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110/360*100vw;

    img {
      width: 80%;
    }
  }

  > div{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
}
</style>