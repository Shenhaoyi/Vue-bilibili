<template>
  <div class="user-info">
    <NavBar :user-info_img="userInfo.user_img"></NavBar>
    <img src="../assets/bannerTop_new.png" class="background" alt="">
    <UserDetail :userInfo="userInfo"></UserDetail>
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
  export default class UserInfo extends Vue {
    userInfo ={}
    $http!: { get: (arg0: string) => any }

    async fetchUserInfo() {
      const res = await this.$http.get('./user/' + localStorage.getItem('id'));
      this.userInfo = res.data[0];
    }

    created() {
      this.fetchUserInfo();
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

</style>