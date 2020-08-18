<template>
  <div class="user-info">
    <NavBar></NavBar>
    <img src="../assets/bannerTop_new.png" class="background" alt="">
    <UserDetail></UserDetail>
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