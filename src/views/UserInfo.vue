<template>
  <div class="user-info">
    <NavBar></NavBar>
    <img src="../assets/bannerTop_new.png" class="background" alt="">
    <div></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NavBar from '@/components/common/NavBar.vue';
  @Component({
    components: {NavBar}
  })
  export default class UserInfo extends Vue {

  }
</script>

<style lang="scss" scoped>
  .user-info{
    img{
      height:131px;
      width:100%;
    }
  }

</style>