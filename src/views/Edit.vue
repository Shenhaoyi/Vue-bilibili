<template>
  <div class="edit-wrapper">
    <NavBar style="margin-bottom:10px;" :user-info_img="userInfo.user_img"></NavBar>
    <div class="head-photo">
      <van-uploader :after-read="afterRead" preview-size="100vw" class="upload-img"/>
      <EditItem left="头像">
        <img class='user-img' v-if="userInfo && userInfo.user_img" :src="userInfo.user_img" alt="">
        <img class='user-img' v-else src="@/assets/default_img.jpg" alt="">
      </EditItem>
    </div>
    <EditItem left="昵称" @handleClick="showName=true">
      <a href="javascript:">{{userInfo.name}}</a>
    </EditItem>
    <EditItem left="账号">
      <a href="javascript:">{{userInfo.username}}</a>
    </EditItem>
    <EditItem left="性别" @handleClick="showGender=true">
      <a href="javascript:">{{userInfo.gender}}</a>
    </EditItem>
    <EditItem left="个性签名" @handleClick="showContent=true">
      <a href="javascript:">{{userInfo.user_desc}}</a>
    </EditItem>
    <div class="edit-back" @click="$router.push('/userinfo')">返回个人中心</div>
    <div class="edit-quit" @click="quit">退出登录</div>


    <!--    昵称修改 -->
    <van-dialog v-model="showName" title="昵称" show-cancel-button @cancel="name=''" @confirm="confirmName">
      <van-field v-model="name" autofocus/>
    </van-dialog>

    <!--    个性签名-->
    <van-dialog v-model="showContent" title="个性签名" show-cancel-button @cancel="content=''" @confirm="confirmContent">
      <van-field v-model="content" type="textarea" autofocus/>
    </van-dialog>

    <!--    性别选择-->
    <van-action-sheet v-model="showGender" cancel-text="取消" :actions="genderActions" @select="onGenderSelect"/>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NavBar from '@/components/common/NavBar.vue';
  import EditItem from '@/components/common/EditItem.vue';
  import {Toast} from 'vant';

  @Component({
    components: {EditItem, NavBar}
  })
  export default class Edit extends Vue {
    /* eslint-disable */
    userInfo = {
      user_img:'',
      name:'',
      user_desc:'',
      gender:''
    };
    $http!: { get: (arg0: string) => any; post: (arg0: string, arg1: any) => any; }

    showName = false; //通过子组件的点击事件来修改
    name = '';//与输入框双向绑定

    content = '';
    showContent = false;

    showGender = false;
    genderActions = [
      {name: '女'},
      {name: '男'},
    ];

    async selectorUser() {
      const res = await this.$http.get('/web/api/user/' + localStorage.getItem('id'));
      this.userInfo = res.data[0];
    }

    created() {
      this.selectorUser();
    }

    async afterRead(file: { file: string | Blob; }) {
      console.log(file)
      const formData = new FormData();
      formData.append('file', file.file);
      const res = await this.$http.post('/web/api/upload', formData);
      this.userInfo.user_img = res.data.url;
      await this.userInfoUpdate();
    }

    async userInfoUpdate() {
      /* eslint-disable */
      const res = await this.$http.post('/web/api/update/' + localStorage.getItem('id'), this.userInfo);
      if (res.data.code === 200) {
        Toast.fail('修改成功');
      }
    }

    async confirmName() {
      if (this.name) {
        this.userInfo.name = this.name;
        this.name = '';
        await this.userInfoUpdate();
      } else {
        Toast.fail('姓名不能为空');
      }
    }

    async confirmContent() {
      if (this.content) {
        this.userInfo.user_desc = this.content;
        this.content = '';
        await this.userInfoUpdate();
      }
    }

    async onGenderSelect(data: { name: string; }) {
      this.showGender = false;
      this.userInfo.gender = data.name;
      await this.userInfoUpdate();
    }

    quit(){
      localStorage.removeItem('objtoken');
      localStorage.removeItem('id');
      Toast.success('成功退出登录');
      setTimeout(()=>{
        this.$router.push('/login')
      },1000)
    }

  }
</script>

<style lang="scss" scoped>
  .edit-wrapper {
    .head-photo {
      position: relative;
      overflow: hidden;

      .upload-img {
        opacity: 0;
        position: absolute;
      }
    }

    .user-img {
      border-radius: 50%;
      height: 12.26667vw;
      width: 12.26667vw;
    }

    a {
      color: #999;
    }

    .edit-back{
      margin-top: 5.3333vw;
      background: #fb7299;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4vw;
      color: #fff;
      padding: 2.66667vw;
    }
    .edit-quit {
      margin-top: 0.3333vw;
      background: #fb7299;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4vw;
      color: #fff;
      padding: 2.66667vw;
    }
  }

</style>