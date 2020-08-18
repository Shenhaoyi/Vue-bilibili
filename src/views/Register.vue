<template>
  <div>
    <LoginTop middle-top="注册bilibili"></LoginTop>
    <LoginText label="姓名"
               style="margin:4.167vw 0;"
               placeholder="请输入姓名"
               rule="^.{6,16}$"
               @validInput="content=> user.name = content"
    ></LoginText>
    <LoginText label="账号"
               placeholder="请输入账号"
               rule="^.{6,16}$"
               @validInput="content=> user.accountNumbers = content"
    ></LoginText>
    <LoginText label="密码 "
               placeholder="请输入密码"
               type="password"
               rule="^.{6,16}$"
               @validInput="content=> user.password = content"
    ></LoginText>
    <LoginBtn btn-text="注册" @click.native="handle"></LoginBtn>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import LoginTop from '@/components/common/LoginTop.vue';
  import LoginText from '@/components/common/LoginText.vue';
  import LoginBtn from '@/components/common/LoginBtn.vue';

  @Component({
    components: {LoginBtn, LoginText, LoginTop}
  })
  export default class Register extends Vue {
    user: Record<string, any> = {
      name: '',
      accountNumbers: '',
      password: ''
    };
    handle(){
      console.log(this.user)
    }
  }
</script>

<style lang="scss" scoped>

</style>