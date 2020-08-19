<template>
  <div style="background: white;">
    <NavBar></NavBar>
    <van-tabs v-model="active" swipeable sticky>
      <van-tab v-for="(item, index) in category" :key="index" :title="item.title">
        <div class="detail-wrapper">
          <Cover class="detail" v-for="(itemDetail,indexDetail) in category[active].list" :key="indexDetail" :detail="itemDetail"></Cover>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NavBar from '@/components/common/NavBar.vue';
  import Cover from '@/components/common/Cover.vue';

  @Component({
    components: {Cover, NavBar}
  })
  export default class Home extends Vue {
    $http: any;

    active = 0;//与导航栏的选中的下标同步
    category = []; //所有tabs

    mounted() {
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
      // 同时需要初始化 currentTab 的数据,因为watch 不知道active的第一次变化，知道也获取不到this.category
      await this.selectArticle()
    }

    //active变化就获取新的tab的数据
    @Watch('active') //设置immediate的话，一开始 category的数据还没有嗯, { immediate: true, deep: false }
    onActiveChanged() {
      this.selectArticle()
    }

    //获取currentTab的数据
    async selectArticle() {
      const currentTab: any = this.category[this.active];
      const res = await this.$http.get('/detail/' + currentTab._id,{
        params:{
          page:currentTab.page,
          pagesize:currentTab.pagesize
        }
      });
      currentTab.list = res.data
    }

  }
</script>

<style lang="scss" scoped>
.detail-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detail{
    width:45%;
    margin:10px 0;
  }
}
</style>