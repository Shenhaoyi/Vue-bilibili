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
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class LoginText extends Vue {
    content = '';
    @Prop() label?: string;
    @Prop() type?: string;
    @Prop() placeholder?: string;
    @Prop() rule?: string;

    //输入内容正则
    handleRules(){
      //将字符串转成
      const rule = new RegExp(this.rule!)

      //监听输入的内容
      if(rule.test(this.content)){
        this.$emit('validInput',this.content)
      }
    }

    @Watch('content')
    onContentChanged(val: string, oldVal: string) {
      this.handleRules()
    }
  }
</script>

<style lang="scss" scoped>

</style>