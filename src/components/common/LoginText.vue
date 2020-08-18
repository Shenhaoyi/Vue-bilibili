<template>
  <div>
    <van-field v-model="text" label="文本" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class LoginText extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>