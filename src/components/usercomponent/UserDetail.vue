<template>
  <div class="wrapper">
    <div class="part1">
      <img class='user-img' src="@/assets/me.jpg" alt="">
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
        <div class="edit-data">
          编辑资料
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="name-wrapper">
        <span class="name">小黑</span>
        <span></span>
      </div>
      <div>
        <span class="brief-instr">这个人很神秘，神秘都没写。</span>
      </div>
    </div>
    <div class="tabs">
      <span>动态</span>
      <span>视频</span>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class UserDetail extends Vue {

  }
</script>

<style lang="scss" scoped>
  .wrapper {
    background: white;

    .part1 {
      display: flex;
      padding-left:12px;
      padding-right:12px;

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
        margin-top:10px;
        padding:3px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #fb7a9f;
        color: #fb7a9f;
        border-radius: 5px;
      }
    }
    .part2{
      padding:12px;
      .name-wrapper{
        .name{
          font-size: 4.8vw;
        }
      }
      .brief-instr{
        font-size: 3.46667vw;
        color:#999;
      }
    }
    .tabs{
      border-top:1px solid rgb(244,244,244);
      padding:10px 12px;
      span{
        margin-right:32px;
        font-size:3.44447vw;
      }
    }
  }
</style>