import axios from 'axios'
import router from '@/router';
import {Toast} from 'vant';

const http = axios.create({
  //接口
  baseURL:'http://112.74.99.5:3000'
})
// const http =axios


//请求拦截
http.interceptors.request.use(function (config) {
  //拦截操作
  if(localStorage.getItem('id')&&localStorage.getItem('objtoken')){
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('objtoken')
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
//响应拦截
http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  //重定向
  if(error.response.status === 401 || error.response.status === 402){
    router.push('/login').then(() => {
      Toast.fail('请重新登录')
    })
  }else if(error.response.status === 500){
    Toast.fail('服务器内部错误')
  }else{
    Toast.fail('未知错误')
  }
  return Promise.reject(error);
});

export default http