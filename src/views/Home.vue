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
  import {Component, Watch} from 'vue-property-decorator';
  import NavBar from '@/components/common/NavBar.vue';

  @Component({
    components: {NavBar}
  })
  export default class Home extends Vue {
    $http: any;

    active = 0;//与导航栏的选中的下标同步
    category = []; //所有tabs
    currentTab: any={} //当前tab的数据

    Created() {
      this.selectCategory();
    }

    //获取tabs数据并进行改造
    async selectCategory() {
      const res = await this.$http.get('/category');
      //改造数据，每个tab下还有数据要获取，创建一个list来保存
      this.category = res.data.map((item: any) => {
        item.list = [];
        item.page=0; //默认第一页
        item.pagesize =10; //每页显示10个数据
        return item;
      });
    }

    //active变化就获取新的tab的数据
    @Watch('active') //设置immediate的话，一开始 category的数据还没有嗯, { immediate: true, deep: false }
    onActiveChanged() {
      this.currentTab = this.category[this.active];
      console.log(this.currentTab)
      this.selectArticle()
    }

    //获取currentTab的数据
    async selectArticle() {
      const res = await this.$http.get('/detail/' + this.currentTab._id,{
        params:{
          page:this.currentTab.page,
          pagesize:this.currentTab.pagesize
        }
      });
      console.log(res)
    }

  }
</script>

<style lang="scss" scoped>

</style>