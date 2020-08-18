<template>
  <div class="edit-wrapper">
    <NavBar style="margin-bottom:10px;" :user-info_img="userInfo.user_img"></NavBar>
    <div class="head-photo">
      <van-uploader :after-read="afterRead" preview-size="100vw" class="upload-img"/>
      <EditItem left="头像" >
        <img class='user-img' v-if="userInfo && userInfo.user_img" :src='userInfo.user_img'>
        <img class='user-img' v-else src="@/assets/default_img.jpg">
      </EditItem>
    </div>
    <EditItem left="昵称">
      <a href="javascript:;">{{userInfo.name}}</a>
    </EditItem>
    <EditItem left="UID">
      <a href="javascript:;">{{userInfo.username}}</a>
    </EditItem>
    <EditItem left="性别">
      <a href="javascript:;">{{userInfo.gender}}</a>
    </EditItem>
    <EditItem left="出生日期"></EditItem>
    <EditItem left="个性签名">
      <a href="javascript:;">{{userInfo.decs}}</a>
    </EditItem>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NavBar from '@/components/common/NavBar.vue';
  import EditItem from '@/components/common/EditItem.vue';

  @Component({
    components: {EditItem, NavBar}
  })
  export default class Edit extends Vue {
    userInfo = {};
    $http: any;

    async selectorUser() {
      const res = await this.$http.get('./user/' + localStorage.getItem('id'));
      this.userInfo = res.data[0];
    }

    created() {
      this.selectorUser();
    }
    /* eslint-disable */
    async afterRead(file: any) {
      const formData = new FormData()
      formData.append('file',file.file)
      const res = await this.$http.post('/upload',formData)
      this.userInfo.user_img = res.data.url
      await this.userInfoUpdate()
    }
    async userInfoUpdate(){
      const res = await this.$http.post('/update/'+localStorage.getItem('id'), this.userInfo)
      console.log(res)
    }

  }
</script>

<style lang="scss" scoped>
  .edit-wrapper {
    .head-photo{
      position: relative;
      overflow: hidden;
      .upload-img{
        opacity: 0;
        position: absolute;
      }
    }
    .user-img {
      border-radius: 50%;
      height: 12.26667vw;
      width: 12.26667vw;
    }

    a {
      color: #999;
    }
  }

</style>