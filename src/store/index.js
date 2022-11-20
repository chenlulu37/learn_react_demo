/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 13:59:27
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-16 13:32:35
 * @Description: file content
 */
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './modules/main'
import homeReducer from "./modules/home";
import entireReducer from './modules/entire'
import detailReducer from './modules/detail'

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
  }
})

export default store