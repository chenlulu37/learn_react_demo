/*
 * @Author: 陈璐璐
 * @Date: 2022-11-10 14:39:02
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-14 11:06:05
 * @Description: file content
 */
import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'

import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  // 定义内部的状态
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  // 偏移下标
  const posIndexRef = useRef(0)
  // 总偏移量
  const totalDistanceRef = useRef()

  // 组件渲染完毕， 判断是否显示按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth //可滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth //本身占据的宽度
    // console.log(
    //   '可滚动的宽度',
    //   scrollWidth,
    //   '占据的宽度',
    //   clientWidth,
    //   scrollContentRef.current
    // )
    totalDistanceRef.current = scrollWidth - clientWidth
    setShowRight(totalDistanceRef.current > 0)
  }, [props.children])

  // //函数 时间处理的逻辑
  // const rightClickHandle = useCallback(() => {
  //   posIndexRef.current += 1
  //   const newEl = scrollContentRef.current.children[posIndexRef.current]
  //   const newOffsetLeft = newEl.offsetLeft //偏移的宽度
  //   scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
  //   console.log('偏移的宽度', newOffsetLeft, newEl)
  //   setShowRight(totalDistanceRef.current > newOffsetLeft)
  // }, [posIndexRef])

  function controlClickHandle(isRight) {
    posIndexRef.current += isRight ? 1 : -1
    const newEl = scrollContentRef.current.children[posIndexRef.current]
    const newOffsetLeft = newEl.offsetLeft //偏移的宽度
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    // scrollContentRef.current.style.transform = `translate(100px)`

    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
    console.log('偏移的宽度', newOffsetLeft, newEl)
  }
  return (
    <ViewWrapper>
      {showLeft && (
        <div
          className="control left"
          onClick={(e) => controlClickHandle(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className="control right"
          onClick={(e) => controlClickHandle(true)}
        >
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {
  // children: PropTypes.elementType
  name: PropTypes.string
}

export default ScrollView
