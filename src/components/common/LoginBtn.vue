<template>
  <div class="btn-wrapper" @click="registerClick">
    <div class="login-btn">{{btnText}}</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class LoginBtn extends Vue {
    @Prop() btnText?: string
    registerClick(){
      this.$emit('registerSubmit')
    }
  }
</script>

<style lang="scss" scoped>
  .btn-wrapper {
    padding:4.167vw 2.778vw;

    .login-btn {
      height: 45px;
      background: #ff9db5;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 22.5px;
      font-size: 4.44vw;
    }
  }
</style>