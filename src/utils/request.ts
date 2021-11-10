import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: 'https://shop.fed.lagou.com/api/admin'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份token
  return config
}, function (error) {
  return Promise.reject(error)
})

request.interceptors.response.use(function (response) {
  // 统一处理接口相应错误，比如token过期无效，服务端异常等
  return response
}, function (error) {
  return Promise.reject(error)
})

// request 不支持泛型
// request.get post put 支持响应数据泛型
// 由于我们的后端又包装一层数据data，导致我们访问数据比较麻烦,所以我们自己封装了一个request
export default <T = any>(config:AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
