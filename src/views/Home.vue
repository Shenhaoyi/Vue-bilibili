<template>
  <div>
    <NavBar></NavBar>
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab v-for="(item, index) in category" :key="index" :title="item.title">
        {{ item.title }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NavBar from '@/components/common/NavBar.vue';
  @Component({
    components: {NavBar}
  })
  export default class Home extends Vue {
    $http: any;

    active=0//与导航栏的选中的下标同步
    category=[]

    created(){
      this.selectCategory()
    }

    async selectCategory(){
      const res= await this.$http.get('/category')
      this.changeCategory(res.data)
    }
    changeCategory(data: any){
      this.category = data
    }

  }
</script>

<style lang="scss" scoped>

</style>