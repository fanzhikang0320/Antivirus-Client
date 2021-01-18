import axios from 'axios'
import { loading } from '../components/Loading';

// const instance = axios.create({
//   baseURL: 'https://www.thebestantivirus.news'
// })
const instance = axios.create({});
let num = 0;
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    
    
    loading.show();
    num ++;
    return config;
    
    
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {

    num --;

    if (num <= 0) {
        loading.hide();
    }
     else {
        loading.show();
    }

    // 对响应数据做点什么

    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default instance;