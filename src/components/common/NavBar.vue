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
      <img v-else src="//s1.hdslb.com/bfs/static/jinkela/long/images/login.png@48w_48h_1c.png" @click="handlePersonal">
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
      if(this.$router.currentRoute.path !=='/'){
        this.$router.push('/')
      }else{
        this.$emit('firstPage')
      }
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
      width: 110/360*100vw;
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
        border-radius: 3/360*100vw;
      }
    }

    div:nth-child(3) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right:2vw;
      img {
        width: 24/360*100vw;
        height: 24/360*100vw;
        border-radius: 50%;
      }
      p{
        white-space:nowrap;
        text-align: center;
        padding:5/360*100vw 5/360*100vw;
        margin:0 5/360*100vw;
        min-width:70/360*100vw;
        background: #fb7299;
        color:white;
        font-size: 13/360*100vw;
        border-radius: 3/360*100vw;
      }
    }
  }
</style>