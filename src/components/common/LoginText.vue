<template>
  <div>
    <van-field :label="label"
               :type="type"
               :placeholder="placeholder"
               v-model="content"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class LoginText extends Vue {
    content = '';
    @Prop() label?: string;
    @Prop() type?: string;
    @Prop() placeholder?: string;

    @Watch('content')
    onContentChanged(val: string) {
      this.$emit('contentChanged', val);
    }
  }
</script>

<style lang="scss" scoped>

</style>