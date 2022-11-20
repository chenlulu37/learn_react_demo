/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 14:14:14
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-11 16:34:07
 * @Description: file content
 */
import * as actionTypes from './constants'

const initialState = {
  currentPage: 0, //当前页面
  roomList: [], //房间列表
  totalCount: 0, //总数据个数
  isLoading:false,
}
function reducer( state = initialState, action){
  switch(action.type){
    case actionTypes.CHANGE_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case actionTypes.CHANGE_ROOM_LIST:
      return {...state, roomList:action.roomList}
    case actionTypes.CHANGE_TOTAL_COUNT:
      return {...state, totalCount: action.totalCount}
    case actionTypes.CHANGE_IS_LOADING:
      return {...state, isLoading: action.isLoading}
    default:
      return state
  }
}

export default reducer