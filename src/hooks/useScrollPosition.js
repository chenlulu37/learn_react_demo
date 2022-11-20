import { useEffect, useState } from "react";
import { throttle } from 'underscore'

/*
 * @Author: 陈璐璐
 * @Date: 2022-11-18 11:15:22
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-18 13:11:35
 * @Description: file content
 */
export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(()=>{
     const  handleScroll =  throttle(() =>{
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 200)
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollX, scrollY }
}