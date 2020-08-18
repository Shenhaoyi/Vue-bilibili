<template>
  <div>
    <van-field :label="label"
               :type="type"
               :placeholder="placeholder"
               :rule="rule"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class LoginText extends Vue {
    @Prop() label?: string
    @Prop() type?: string
    @Prop() placeholder?: string
    @Prop() rule?: string
  }
</script>

<style lang="scss" scoped>

</style>