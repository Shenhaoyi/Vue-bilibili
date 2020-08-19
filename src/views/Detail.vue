<template>
  <div>
    {{detail.name}}
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

</style>