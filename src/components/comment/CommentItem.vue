<template>
  <div class="commentItem">
    <div class="userImg">
      <img v-if="item.userinfo && item.userinfo.user_img" :src="item.userinfo.user_img" alt=""/>
      <img v-else src="@/assets/default_img.jpg" alt="">
    </div>
    <div class="commentContent">
      <p>
        <span v-if="item.userinfo">{{item.userinfo.name}}</span>
        <span v-else>此用户无姓名</span>
        <span>{{item.comment_date}}</span>
      </p>
      <div>
        {{item.comment_content}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class CommentItem extends Vue {
    @Prop() item: any;

  }
</script>

<style lang="scss" scoped>
  .commentItem {
    display: flex;
    margin: 2.778vw 0;
    padding: 2vw;
    border-bottom: 0.278vw solid #e7e7e7;

    .userImg {
      margin-right: 2.778vw;

      img {
        width: 9.722vw;
        height: 9.722vw;
      }
    }

    .commentContent {
      flex: 1;
      position: relative;

      p {
        font-size: 3.611vw;
        color: #555;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.389vw;
      }

      div {
        font-size: 3.611vw;
      }

    }
  }
</style>