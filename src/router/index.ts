import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import UserInfo from '@/views/UserInfo.vue';
import {Toast} from 'vant';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
      istoken: true
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  //如果是需要验证的，并且没有token或者 id的，需要重新登录
  if (to.meta.istoken && (!localStorage.getItem('id') || !localStorage.getItem('objtoken'))) {
      router.push('/login').then(() => {
        Toast.fail('请重新登录！');
      });
    return;
  }else{
    next()
  }
});

export default router;
