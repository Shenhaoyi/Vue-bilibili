<template>
  <div>
    <LoginTop middle-top="注册bilibili">
      <div slot="right" style="font-size: 13px;" @click="$router.push('/login')">切换到登录</div>
    </LoginTop>
    <LoginText label="姓名"
               style="margin:4.167vw 0;"
               placeholder="请输入姓名"
               @contentChanged="content=> user.name = content"
    ></LoginText>
    <LoginText label="账号"
               placeholder="请输入账号"
               @contentChanged="content=> user.username = content"
    ></LoginText>
    <LoginText label="密码 "
               placeholder="请输入密码"
               type="password"
               @contentChanged="content=> user.password = content"
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
    $msg: any;

    async registerSubmit() {
      const rule1 = new RegExp("^.{3,16}$")
      const rule2 = new RegExp("^.{6,16}$")
      if(this.user.name){
        if(rule1.test(this.user.username)){
          if(rule2.test(this.user.password)){
            try{
              const res = await this.$http.post('/register',this.user)
              this.$msg.success(res.data.msg)
            }catch(error){
              this.$msg.fail('服务器维护中，请稍后再试。')
            }
          }else{
            this.$msg.fail('密码输入错误，请输入 6~16 位有效字符。')
          }
        }else{
          this.$msg.fail('账号输入错误，请输入 3~16 位有效字符。')
        }
      }else{
        this.$msg.fail('姓名不能为空。')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>