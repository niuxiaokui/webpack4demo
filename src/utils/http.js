import axios from "axios";

var instance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/" : "https://www.your.com/",
  timeout: 5000,
  headers: { "key": "test" },
});

// http request 拦截器
instance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// http response 拦截器
instance.interceptors.response.use(
  res => {
    if (res.data.code === 3) { // 修改 headers 改变返回值：1、提示成功 2、提示缺少key 3、跳转到index.html
      location.href = `${process.env.BASEURL}index.html`;
    }
    return res;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
