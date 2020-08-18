<template>
  <div class="user-info">
    <NavBar :user-info_img="userInfo.user_img"></NavBar>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NavBar from '@/components/common/NavBar.vue';

  @Component({
    components: {NavBar}
  })
  export default class Edit extends Vue {
    userInfo = {};

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