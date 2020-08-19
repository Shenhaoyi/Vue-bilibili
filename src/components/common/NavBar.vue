<template>
  <div class="nav-bar">
    <div class="logo" @click="handleHome">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="search">
      <van-search class='van-search' placeholder="请输入搜索关键词" />
    </div>
    <div >
      <img v-if="userInfo_img" :src='userInfo_img' @click="handlePersonal">
      <img v-else src="@/assets/default_img.jpg" @click="handlePersonal">
      <p>下载App</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class NavBar extends Vue {
    @Prop() userInfo_img?: string

    handleHome(){
      if(this.$router.currentRoute.path !=='/')
        this.$router.push('/')
    }

    handlePersonal(){
      if(this.$router.currentRoute.path !=='/userinfo')
        this.$router.push('/userinfo')
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    height: 12.5vw;
    background: white;
    display: flex;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 110px;
      img {
        width: 80%;
      }
    }

    .search{
      display: flex;
      justify-content: center;
      align-items: center;
      .van-search{
        padding-top:0;
        padding-bottom:0;
        border-radius: 3px;
      }
    }

    div:nth-child(3) {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
      p{
        padding:5px 10px;
        margin:0 5px;
        min-width:70px;
        background: #fb7299;
        color:white;
        font-size: 13px;
        border-radius: 3px;
      }
    }
  }
</style>