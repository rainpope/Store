import axios from "axios";

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });

  // 2.1请求拦截器的作用
  instance.interceptors.request.use(
    config => {
      // 比如config中的一些信息不符合服务器的要求，
      // 每次发送网络请求都希望页面显示一个请求的图标
      // 某些网络请求（需要登录的token），必须携带一些特殊的请求

      return config;
    },
    err => {
      console.log(err);
    }
  );
  // 2.2 响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      console.log(err);
    }
  );

  // 3.发送真正的网络请求
  return instance(config);
}
