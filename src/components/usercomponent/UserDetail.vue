<template>
  <div class="wrapper">
    <div class="part1">
      <img class='user-img' v-if="userInfo && userInfo.user_img" :src='userInfo.user_img' alt="">
      <img class='user-img' v-else src="../../assets/default_img.jpg" alt="">
      <div class="user-edit">
        <div>
          <p>
            <span>0</span>
            <span class="text">粉丝</span>
          </p>
          <p>
            <span>46</span>
            <span class="text">关注</span>
          </p>
          <p>
            <span>0</span>
            <span class="text">获赞</span>
          </p>
        </div>
        <div v-if="uperFlag" :class="['edit-data', follow?'follow':'']" @click="handleFollow">
          关注
        </div>
        <div v-else class="edit-data" @click="$router.push('/edit')">
          编辑资料
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="name-wrapper">
        <span class="name">{{userInfo.name}}</span>
        <span></span>
      </div>
      <div>
        <span class="brief-instr" v-if="userInfo.user_desc">{{userInfo.user_desc}}</span>
        <span class="brief-instr" v-else>这个人很神秘，神秘都没写。</span>
      </div>
    </div>
    <div v-if="!uperFlag" class="tabs">
      <span>动态</span>
      <span>视频</span>
    </div>
    <div v-if="!uperFlag" class="bottom-wrapper">
      <img class="bili-img" src="//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/noContent.png" alt="">
      <p>Ta还没有投过稿~</p>
      <p>快去发现新内容吧！</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import { Toast } from 'vant';

  @Component
  export default class UserDetail extends Vue {
    @Prop() userInfo!: any;
    @Prop() uperFlag!: any;
    //是否关注
    follow=false

    handleFollow(){
      if(localStorage.getItem('id') && localStorage.getItem('objtoken')){
        this.follow=!this.follow
        Toast.success(this.follow?'关注成功':'取消成功')
      }else{
        Toast.fail('请先登录')
      }
    }

  }
</script>

<style lang="scss" scoped>
  .wrapper {
    background: white;

    .part1 {
      display: flex;
      padding-left: 12px;
      padding-right: 12px;

      .user-img {
        border-radius: 50%;
        height: 85px;
        width: 85px;
        margin-right: 20px;
      }

      .user-edit {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        > div {
          display: flex;

          p {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: 13px;

            .text {
              color: #aaa;
            }
          }
        }
      }

      .edit-data {
        margin-top: 10px;
        padding: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #fb7a9f;
        color: #fb7a9f;
        border-radius: 5px;
      }
      .follow{
        color: white;
        background: #fb7a9f;
      }
    }

    .part2 {
      padding: 12px;

      .name-wrapper {
        .name {
          font-size: 4.8vw;
        }
      }

      .brief-instr {
        font-size: 3.46667vw;
        color: #999;
      }
    }

    .tabs {
      border-top: 1.5/360*100vw solid rgb(244, 244, 244);
      border-bottom: 1.5/360*100vw solid rgb(244, 244, 244);
      padding: 10px 12px;

      span {
        margin-right: 32px;
        font-size: 3.44447vw;
      }
    }

    .bottom-wrapper {
      padding: 22.66667vw 0 4.26667vw;
      text-align: center;
      .bili-img {
        width: 74.66667vw;
        margin-bottom: 4vw;
      }
    }
  }
</style>