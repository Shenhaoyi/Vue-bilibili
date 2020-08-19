<template>
  <div>
    <img :src="detail.img">
    <p>{{detail.name}}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Detail extends Vue {
    @Prop() detail: any

  }
</script>

<style lang="scss" scoped>

img{
  width:100%;
}
  p{
    font-size: 12/360*100vw;
    margin:0;
  }
</style>