import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props

  useEffect(() => {
    // 1.对应selectIndex的item
    const itemEl = indicatorRef?.current?.children?.[selectIndex]
    // console.log('useEffect', selectIndex, itemEl, indicatorRef?.current)
    const offsetLeft = itemEl?.offsetLeft
    const clientWidth = itemEl?.clientWidth
    // content的宽度
    const indicatorWidth = indicatorRef?.current?.clientWidth
    const totalWidth = indicatorRef?.current?.scrollWidth
    // select要滚动的距离
    let distance = `${offsetLeft + clientWidth * 0.5 - indicatorWidth * 0.5}`
    if (distance < 0) {
      distance = 0
    } else if (distance > totalWidth - indicatorWidth) {
      distance = totalWidth - indicatorWidth
    }
    //移动处理
    indicatorRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  const indicatorRef = useRef()

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={indicatorRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator
