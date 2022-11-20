/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 15:25:28
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-08 15:35:10
 * @Description: file content
 */
import axios from 'axios'
import { BASE_URL, TIMEOUT} from './config'

class CllRequest{

  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 返回拦截
    this.instance.interceptors.response.use((res)=>{
      return res.data
    },err=>{
      return err
    })
  }

  request(config){
    return this.instance.request(config)
  }
  get(config){
    return this.request({...config, method: 'get'})
  }
  post(config){
    return this.request({...config, method: 'post'})
  }
}
// axios.request

export default new CllRequest(BASE_URL, TIMEOUT)
// export default new CllRequest(BASE_URL, TIMEOUT)