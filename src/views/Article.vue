<template>
  <div>
    <NavBar></NavBar>
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

  }
</script>

<style lang="scss" scoped>

</style>