<template>
  <div>
    <NavBar :userInfo_img="userInfo.user_img"></NavBar>
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
            <van-icon size="7vw" name="good-job"/>点赞
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

    <van-tabs class="tabs" v-model="active">
      <van-tab title="相关推荐">
        <div class="detail-wrapper">
          <Cover class="detail" v-for="(itemDetail,indexDetail) in commendList" :key="indexDetail"
                 :detail="itemDetail"></Cover>
        </div>
      </van-tab>
      <van-tab title="最新评论">
        <div class="inputComment">
          <div class="user-img-wrapper">
            <img class='user-img' v-if="userInfo.user_img" :src='userInfo.user_img' alt="">
            <img class='user-img' v-else src="@/assets/default_img.jpg" alt="">
          </div>
          <label>
            <input type="text" v-model="myComment" placeholder="说点什么吧">
          </label>
          <button @click="inputComment">发表</button>
        </div>
        <div class="comment">
          <Comment :commentFetchFlag="commentFetchFlag"></Comment>
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NavBar from '@/components/common/NavBar.vue';
  import Cover from '@/components/common/Cover.vue';
  import {Toast} from 'vant';
  import Comment from '@/components/comment/Comment.vue';

  @Component({
    components: {Comment, Cover, NavBar}
  })
  export default class Article extends Vue {
    $http: any;

    //不给出category和userinfo会报错
    model = {category: {}, userinfo: {}};
    commendList = []; //推荐数据

    //评论
    active = 0;
    userInfo = {};

    //我的评论
    myComment = '';
    postcom = {};

    commentFetchFlag=false

    created() {
      this.articleData();
      this.commendData();
      this.userInfoData();
    }

    @Watch('$route.path')
    onRouteChanged() {
      this.articleData();
      this.commendData();
    }

    //当前视屏的数据
    async articleData() {
      const res = await this.$http.get(this.$route.path);
      this.model = res.data[0];
    }

    //推荐数据
    async commendData() {
      const res = await this.$http.get('/commend');
      this.commendList = res.data;
    }

    //推荐数据
    async userInfoData() {
      //本地有token才获取用户的信息
      if (localStorage.getItem('id') && localStorage.getItem('objtoken')) {
        const res = await this.$http.get('./user/' + localStorage.getItem('id'));
        this.userInfo = res.data[0];
        console.log(this.userInfo);
      }
    }

    async inputComment() {
      if (localStorage.getItem('id') && localStorage.getItem('objtoken')) {
        if (this.myComment.length <= 0) {
          Toast.fail('评论不能为空');
          return;
        }
        /* eslint-disable */
        this.postcom.comment_date = new Date().toJSON().substring(5, 10);
        this.postcom.comment_content = this.myComment;
        this.postcom.parent_id = null;
        this.postcom.article_id = this.$route.params.id;
        console.log(this.postcom)
        const result = await this.$http.post('/comment_post/' + localStorage.getItem('id'), this.postcom);
        if(result.status == 200) {
          Toast.success('评论发表成功')
          this.myComment =''
          this.commentFetchFlag = !this.commentFetchFlag
        }
      } else {
        Toast.fail('登录后才能发表评论');
      }
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
          padding: 1vw 2vw;
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

          .user-icon {
            padding-right: 1vw;
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

  .tabs {
    background: white;

    .detail-wrapper {
      border-top: 1.5/360*100vw solid rgb(244, 244, 244);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .detail {
        width: 45%;
        margin: 10px 0;
      }
    }

    .inputComment {
      border-top: 1.5/360*100vw solid rgb(244, 244, 244);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 1vw 3vw;

      .user-img-wrapper {
        margin-right: 2vw;

        .user-img {
          width: 30/360*100vw;
          height: 30/360*100vw;
          border-radius: 50%;
        }
      }

      input {
        border: none;
        outline: none;
        padding: 2vw 3vw;
        border-radius: 2vw;
        background: rgb(244, 244, 244);
        font-size: 13/360*100vw;
      }

      button {
        border: none;
        outline: none;
        background: #fb7299;
        border-radius: 2vw;
        margin-left: 2vw;
        padding: 1vw 2vw;
        color: white;
        font-size: 13/360*100vw;
      }

    }

  }

</style>