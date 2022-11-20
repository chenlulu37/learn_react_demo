/*
 * @Author: 陈璐璐
 * @Date: 2022-11-09 13:45:03
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-10 16:44:29
 * @Description: file content
 */
import cllRequst from "..";

export function getHomeGoodPriceData(){
  return cllRequst.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData(){
  return cllRequst.get({
    url: '/home/highscore'
  })
}

export function getHomeDiscountData(){
  return cllRequst.get({
    url: '/home/discount'
  })
}

export function getHomeHotrecommenddestData(){
  return cllRequst.get({
    url: '/home/hotrecommenddest'
  })
}

export function getHomeLongforData(){
  return cllRequst.get({
    url: '/home/longfor'
  })
}

export function getHomePlusData(){
  return cllRequst.get({
    url: '/home/plus'
  })
}