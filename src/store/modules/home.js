/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 14:00:00
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-10 16:45:21
 * @Description: file content
 */
import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotrecommenddestData, getHomeLongforData, getHomePlusData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchdata', (payload, {dispatch, getState})=>{
   getHomeGoodPriceData().then(res=>{
    dispatch(changeGoodPriceInfoAction(res))
   })
   getHomeHighScoreData().then(res=>{
    dispatch(changeHighScoreInfoAction(res))
   })
   getHomeDiscountData().then(res=>{
    dispatch(changeDiscountInfoAction(res))
   })
   getHomeHotrecommenddestData().then(res=>{
    dispatch(changeHotrecommenddestInfoAction(res))
   })
   getHomeLongforData().then(res=>{
    dispatch(changeLongforInfoAction(res))
   })
   getHomePlusData().then(res=>{
    dispatch(changePlusInfoAction(res))
   })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {}, 
    hotrecommenddestInfo: {},
    longforInfo: {},
    plusInfo: {}
    
  },
  reducers:{
    changeGoodPriceInfoAction(state, {payload}){
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, {payload}){
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, {payload}){
      state.discountInfo = payload
    },
    changeHotrecommenddestInfoAction(state, {payload}){
      state.hotrecommenddestInfo = payload
    },
    changeLongforInfoAction(state, {payload}){
      state.longforInfo = payload
    },
    changePlusInfoAction(state, {payload}){
      state.plusInfo = payload
    }
  },
  // 额外的reducers  //pendding  fulfilled  rejected
  // extraReducers:{
    // [fetchHomeDataAction.fulfilled](state, {payload}){
    //   state.goodPriceInfo = payload
    // }
  // }
})

export const { 
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction, 
  changeDiscountInfoAction, 
  changeHotrecommenddestInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer