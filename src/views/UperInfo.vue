<template>
  <div class="user-info">
    <NavBar :user-info_img="userInfo.user_img"></NavBar>
    <img src="../assets/bannerTop_new.png" class="background" alt="">
    <UserDetail :uperFlag="true" :userInfo="uperInfo"></UserDetail>
    <div class="back" @click="$router.back()">返回</div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NavBar from '@/components/common/NavBar.vue';
  import UserDetail from '@/components/usercomponent/UserDetail.vue';

  @Component({
    components: {UserDetail, NavBar}
  })
  export default class UperInfo extends Vue {
    uperInfo ={}
    userInfo ={}
    model={}
    $http: any;

    async fetchUserInfo() {
      const res = await this.$http.get('./user/' + localStorage.getItem('id'));
      this.userInfo = res.data[0];
    }

    created() {
      this.fetchUserInfo();
      this.articleData();
    }

    //当前视屏的数据
    async articleData() {
      const res = await this.$http.get('/article/'+this.$route.params.id);
      this.uperInfo = res.data[0].userinfo
    }
  }
</script>

<style lang="scss" scoped>
  .user-info {
    img {
      height: 100px;
      width: 100%;
    }
  }

  .back{
    margin-top: 6.3333vw;
    background: #fb7299;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4vw;
    color: #fff;
    padding: 2.66667vw;
  }

</style>