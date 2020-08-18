<template>
  <div class="wrapper">
    <div class="title">{{left}}</div>
    <div class="data"><slot></slot></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class EditItem extends Vue {
    @Prop() left?: string
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    padding:2.6667vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border-bottom:2px solid  #fafafa;
    font-size: 4vw;

    .title{
      color:#505050;
    }
    .data{
      color:#999;
    }
  }
</style>