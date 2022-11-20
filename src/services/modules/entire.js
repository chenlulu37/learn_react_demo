/*
 * @Author: 陈璐璐
 * @Date: 2022-11-11 14:29:25
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-11 14:41:36
 * @Description: file content
 */

import cllRequst from "..";

export function getEntireRoomList(offset = 0, size = 20){
  return cllRequst.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })
}
