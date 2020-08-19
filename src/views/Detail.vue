<template>
  <div @click="$router.push('/detail/'+detail.id)">
    <div class="father">
      <img :src="detail.img">

      <div class="wrapper">
        <span class="video">
        <van-icon class="icon" name="play-circle-o"/>
        123
        </span>
        <span class="comment">
          <van-icon class="icon" name="comment-o"/>
          {{detail.commentlen || 100}}
        </span>
      </div>

    </div>
    <p>{{detail.name}}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Detail extends Vue {
    @Prop() detail: any;

  }
</script>

<style lang="scss" scoped>
  .father {
    position: relative;

    img {
      width: 100%;
      height:107/360*100vw;
    }

    .wrapper {
      position: absolute;
      bottom:0;
      width:100%;
      display: flex;
      justify-content: space-between;
      padding:1vw;
      background: linear-gradient(0deg, rgba(0, 0, 0, .85), transparent);

      .video {
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
      }

      .comment {
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
      }

      .icon {
        margin-right: 1vw;
      }
    }

    p {
      font-size: 12/360*100vw;
      margin: 0;
    }
  }

</style>