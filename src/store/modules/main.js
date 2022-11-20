/*
 * @Author: 陈璐璐
 * @Date: 2022-11-16 13:30:47
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-18 13:25:01
 * @Description: file content
 * 
 */
import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: 'main',
  initialState:{
    headerConfig: {
      isFixed: false,
      topAlpha: false
    }
  },
  reducers:{
    changeHeaderConfigAction(state,{payload}){
      console.log('main中获取的payload', payload);
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer