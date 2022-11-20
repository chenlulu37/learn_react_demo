/*
 * @Author: 陈璐璐
 * @Date: 2022-11-11 13:07:37
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-11 13:16:05
 * @Description: file content
 */
export function isEmptyO(obj) {
  if(!obj) return false
  return !!Object.keys(obj).length
}