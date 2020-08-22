<template>
  <div class="nav-bar">
    <div class="logo" @click="handleHome">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div class="search">
      <van-search class='van-search' placeholder="请输入搜索关键词" @focus="handleFocus"/>
    </div>
    <div>
      <img v-if="userInfo_img" :src='userInfo_img' @click="handlePersonal" alt="">
      <img v-else-if="loginFlag" src="@/assets/default_img.jpg" @click="handlePersonal" alt="">
      <img v-else src="//s1.hdslb.com/bfs/static/jinkela/long/images/login.png@48w_48h_1c.png" @click="handlePersonal" alt="">
      <p>
        <a href="http://d.bilibili.com/download_app.html">下载App</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import {Toast} from 'vant';

  @Component
  export default class NavBar extends Vue {
    @Prop() userInfo_img?: string;
    loginFlag = false

    created(){
      this.loginFlag = localStorage.getItem('id') !== null && localStorage.getItem('objtoken') !==null
    }

    handleHome() {
      if (this.$router.currentRoute.path !== '/') {
        this.$router.push('/');
      } else {
        this.$emit('firstPage');
      }
    }

    handlePersonal() {
      if (this.$router.currentRoute.path !== '/userinfo') {
        if (localStorage.getItem('objtoken') && localStorage.getItem('id')) {
          this.$router.push('/userinfo');
        } else {
          this.$router.push('/login');
        }
      }
    }

    handleFocus() {
      Toast.fail('搜索功能待开发');
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

    .search {
      display: flex;
      justify-content: center;
      align-items: center;

      .van-search {
        padding-top: 0;
        padding-bottom: 0;
        border-radius: 3/360*100vw;
      }
    }

    div:nth-child(3) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 2vw;

      img {
        width: 34/360*100vw;
        height: 34/360*100vw;
        border-radius: 50%;
      }

      p {
        white-space: nowrap;
        text-align: center;
        padding: 5/360*100vw 5/360*100vw;
        margin: 0 5/360*100vw;
        min-width: 70/360*100vw;
        background: #fb7299;
        color: white;
        font-size: 13/360*100vw;
        border-radius: 3/360*100vw;

        a:link,
        a:visited,
        a:hover,
        a:active {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
</style>