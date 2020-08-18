<template>
  <div>
    <van-field :label="label"
               :type="type"
               :placeholder="placeholder"
               :rule="rule"
               v-model="content"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class LoginText extends Vue {
    content = '';
    @Prop() label?: string;
    @Prop() type?: string;
    @Prop() placeholder?: string;
    @Prop() rule?: string;
  }
</script>

<style lang="scss" scoped>

</style>