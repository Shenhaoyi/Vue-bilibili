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
  import {Toast} from 'vant';
  @Component({
    components: {UserDetail, NavBar}
  })
  export default class UserInfo extends Vue {
    userInfo = {}
    $http: any;

    async fetchUserInfo(){
      try{
        const res =  await this.$http.get('./user/'+localStorage.getItem('id'),{
          headers:{
            'Authorization': 'Bearer ' + localStorage.getItem('objtoken') //注意空格
          }
        })
        this.userInfo = res.data[0]
        console.log(this.userInfo)
      }catch(error){
        Toast.fail('服务器维护中，请稍后再试。')
      }
    }
  created(){
    this.fetchUserInfo()
  }
  }
</script>

<style lang="scss" scoped>
  .user-info{
    img{
      height:100px;
      width:100%;
    }
  }

</style>