
/*
* @Author: 陈璐璐
* @Date: 2022-11-16 14:26:47
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-16 14:28:56
* @Description: file content
*/

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function useScrollTop(){
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
}