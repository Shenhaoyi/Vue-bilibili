import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import UserInfo from '@/views/UserInfo.vue';
import {Toast} from 'vant';
import Edit from '@/views/Edit.vue';
import Article from '@/views/Article.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      keepalive:true,
    }
  },
  {//注册页面
    path: '/register',
    name: 'Register',
    component: Register
  },
  {//登录
    path: '/login',
    name: 'Login',
    component: Login
  },
  {//用户信息页
    path: '/userinfo',
    name: 'UserInfo',
    component: UserInfo,
    meta: {
      isToken: true
    }
  },
  {//编辑页面
    path: '/edit',
    name: 'Edit',
    component: Edit,
    meta: {
      isToken: true
    }
  },
  {//文章详情页
    path: '/article/:id', //设置成动态路径
    name: 'Article',
    component: Article
  },
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  //如果是需要验证的，并且没有token或者 id的，需要重新登录
  //只能验证是由有token和id，错误的验证不了
  if (to.meta.isToken && (!localStorage.getItem('id') || !localStorage.getItem('objtoken'))) {
      router.push('/login').then(() => {
        Toast.fail('请重新登录！');
      });
    return;
  }else{
    next()
  }
});

export default router;
