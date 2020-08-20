<template>
  <div>
    <NavBar></NavBar>
    <div class="wrapper">
      <div class="video">
        <video controls width="100%" :src="model.content" autoplay :poster="model.img">
          资源找不到啦！
        </video>
      </div>
      <div class="info">
        <div class="info1">
          <span class="title" @click="$router.push('/')">{{model.category.title}}</span>
          <span class="name">{{model.name}}</span>
        </div>
        <div class="info2">
          <div>
            <span class="user-name">
            <van-icon class="user-icon" name="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
            {{model.userinfo.name}}
          </span>
          </div>
          <div>
            <span class="watch">97.8万观看</span>
            <span class="bullet">1538弹幕</span>
            <span class="date">{{model.date}}</span>
          </div>
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

    <van-tabs v-model="active">
      <van-tab title="相关推荐">
        <div class="detail-wrapper">
          <Cover class="detail" v-for="(itemDetail,indexDetail) in commendList" :key="indexDetail" :detail="itemDetail"></Cover>
        </div>
      </van-tab>
      <van-tab title="评论(12)">
        内容 2
      </van-tab>
    </van-tabs>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NavBar from '@/components/common/NavBar.vue';
  import Cover from '@/components/common/Cover.vue';

  @Component({
    components: {Cover, NavBar}
  })
  export default class Article extends Vue {
    $http: any;

    //不给出category和userinfo会报错
    model = {category: {}, userinfo: {}};
    commendList = [] //推荐数据

    //评论
    active = 0

    created() {
      this.articleData();
      this.commendData()
    }

    @Watch('$route.path')
    onRouteChanged() {
      this.articleData();
      this.commendData()
    }

    //当前视屏的数据
    async articleData() {
      const res = await this.$http.get(this.$route.path);
      this.model = res.data[0];
    }

    //推荐数据
    async commendData(){
      const res = await this.$http.get('/commend');
      this.commendList = res.data
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
          padding:1vw 2vw;
          font-size: 3.2vw;
          color: #fb7299;
          line-height: 5.33333vw;
          background-color: #f4f4f4;;
          border-radius: 3.2vw;
          /*border:1px solid red;*/
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
        padding: 3.778vw 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .user-name {
          padding-right: 3.2vw;
          font-size: 4vw;
          color: #212121;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          transform: translateY(-8%);
          .user-icon{
            padding-right:1vw;
          }
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

  .detail-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .detail{
      width:45%;
      margin:10px 0;
    }
  }
</style>