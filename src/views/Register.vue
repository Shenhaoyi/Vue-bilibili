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
               @validInput="content=> user.username = content"
    ></LoginText>
    <LoginText label="密码 "
               placeholder="请输入密码"
               type="password"
               rule="^.{6,16}$"
               @validInput="content=> user.password = content"
    ></LoginText>
    <LoginBtn btn-text="注册" @registerSubmit="registerSubmit"></LoginBtn>
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
    user = {
      name: '',
      username: '',
      password: '',
    };
    $http: any;

    registerSubmit() {
      if (this.user.name && this.user.username && this.user.password) {
        this.$http.post('/register',this.user).then(res=>{
          console.log(res)
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>