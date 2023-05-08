// +---------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +---------------------------------------------------------------------
// | Copyright (c) 2016~2023 https://www.crmeb.com All rights reserved.
// +---------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +---------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +---------------------------------------------------------------------

import axios from 'axios'
import { Message } from 'iview'
// import { getCookies, removeCookies } from '@/libs/util'
import configs from '@/config'
import router from '@/router'
const service = axios.create({
  baseURL: configs.baseUrl.dev,
  timeout: 10000 // 请求超时时间
})

axios.defaults.withCredentials = true // 携带cookie

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    console.log(222, config)
    switch (process.env.NODE_ENV) {
      case 'production':
        config.baseURL = configs.baseUrl.pro
        break
      default:
        config.baseURL = configs.baseUrl.dev
    }
    // if (config.kefu) {
    //   let baseUrl = Setting.apiBaseURL.replace(/adminapi/, 'kefuapi');
    //   config.baseURL = baseUrl;
    // } else {
    //   config.baseURL = Setting.apiBaseURL;
    // }
    // if (config.file) {
    //   config.headers['Content-Type'] = 'multipart/form-data';
    // }

    // config.headers['Authorization'] = 'Bearer ' + token;
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    let obj = {}
    if (response.data) {
      if (typeof response.data === 'string') {
        obj = JSON.parse(response.data)
      } else {
        obj = response.data
      }
    }
    let status = response.data ? obj.code : 0
    // let status = response.data ? response.data.status : 0;
    const code = status
    switch (code) {
      case 200:
        return obj
      case 110002:
      case 110003:
      case 110004:
        // localStorage.clear();
        // removeCookies('token');
        // removeCookies('expires_time');
        // removeCookies('uuid');
        // router.replace({ name: 'login' });
        break
      case 110005:
      case 110006:
      case 110007:
        // removeCookies('kefuInfo')
        // removeCookies('kefu_token');
        // removeCookies('kefu_expires_time');
        // removeCookies('kefu_uuid');
        // router.replace({ path: '/kefu' });
        // console.log(9999)
        break
      case 110008:
        router.replace({ name: 'system_opendir_login' })
        break
      default:
        return Promise.reject(obj || { msg: '未知错误' })
    }
  },
  (error) => {
    Message.error(error.msg)
    return Promise.reject(error)
  }
)

export default service
