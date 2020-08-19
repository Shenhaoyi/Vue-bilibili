<template>
  <div>
    <NavBar></NavBar>
    <div class="wrapper">
      <div class="video">
        <video controls width="100%" :src="model.content" preload :poster="model.img">
          资源找不到啦！
        </video>
      </div>
      <div class="info">
        <div class="info1">
          <span class="title" @click="$router.push('/')">{{model.category.title}}</span>
          <span class="name">{{model.name}}</span>
        </div>
        <div class="info2">
          <span class="user-name">
            <van-icon class="user-icon" name="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
            {{model.userinfo.name}}
          </span>
          <span class="watch">97.8万观看</span>
          <span class="bullet">1538弹幕</span>
          <span class="date">{{model.date}}</span>
        </div>
        <div class="info3">
          <span class="icon">
            <van-icon size="7vw"  name="good-job"/>点赞
          </span>
          <span class="icon">
            <van-icon size="7vw" name="star"/>收藏
          </span>
          <span class="icon">
            <van-icon size='7vw' name="share"/>分享
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NavBar from '@/components/common/NavBar.vue';

  @Component({
    components: {NavBar}
  })
  export default class Article extends Vue {
    $http: any;

    //不给出category和userinfo会报错
    model = {category: {}, userinfo: {}};

    created() {
      this.articleData();
    }

    async articleData() {
      const res = await this.$http.get(this.$route.path);
      this.model = res.data[0];
      console.log(this.model);
    }

  }
</script>

<style lang="scss" scoped>
  .wrapper {
    .info {
      background: white;
      padding: 4.167vw;

      .info1 {
        .title {
          font-size: 3.2vw;
          color: #fb7299;
          line-height: 5.33333vw;
          background-color: #fff;
          border-radius: 3.2vw;
        }

        .name {
          padding: 0 10px;
          font-size: 4.26667vw;
          font-weight: 400;
          color: #212121;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 86.66667vw;
        }
      }

      .info2 {
        padding: 2.778vw;
        display: flex;
        /*justify-content: flex-start;*/
        align-items: center;

        .user-name {
          padding-right: 3.2vw;
          font-size: 4vw;
          color: #212121;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          transform: translateY(-8%);
        }

        .watch, .bullet, .date {
          font-size: 3.2vw;
          color: #999;
          margin-right: 2.13333vw;
        }
      }

      .info3 {
        display: flex;
        justify-content: flex-start;
        font-size: 2.66667vw;
        color: #999;

        .icon {
          display: flex;
          margin-right: 30/360*100vw;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
</style>