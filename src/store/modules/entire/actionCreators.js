/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 14:21:03
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-14 12:56:19
 * @Description: file content
 */

import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCUrrentPageAction = (currentPage)=>({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) =>({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount)=>({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading)=>({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (page = 0)=>{
  return async (dispatch)=>{
    dispatch(changeIsLoadingAction(true))
    dispatch(changeCUrrentPageAction(page))
    const res = await getEntireRoomList(page * 20)
    // console.log(res);
    dispatch(changeTotalCountAction(res.totalCount))
    dispatch(changeRoomListAction(res.list))
    dispatch(changeIsLoadingAction(false))
  }
}