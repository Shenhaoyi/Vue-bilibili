<template>
  <div class="wrapper">
    <lazy-component>
      <CommentItem v-for="(item, index) in comment" :key="index" :item="item">asd</CommentItem>
    </lazy-component>
    <div class="none">
      <span>
        没有更多评论了~
      </span>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  import CommentItem from '@/components/comment/CommentItem.vue';

  @Component({
    components: {CommentItem}
  })
  export default class Comment extends Vue {
    $http!: { get: (arg0: string) => any }

    @Prop() commentFetchFlag?: boolean

    @Watch('commentFetchFlag')
    onFlagChanged() {
      this.commentData();
    }

    comment = [];

    created() {
      this.commentData();
    }

    async commentData() {
      const res = await this.$http.get('/web/api/comment/' + this.$route.params.id);
      //只取一级评论
      // filter(item=> item.parent_id === null).sort((a,b)=>{ return b.comment_date - a.comment_date}).slice(0,20)
      const len = res.data.length;
      this.comment = res.data.slice(len - 20);
      this.comment.reverse();
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    .none {
      padding: 12vw 0 32vw 0;
      text-align: center;
    }
  }

</style>