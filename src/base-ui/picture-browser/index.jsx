/*
 * @Author: 陈璐璐
 * @Date: 2022-11-16 09:16:13
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-16 13:23:13
 * @Description: file content
 */
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import classNames from 'classnames'

import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import { BrowserWrapper } from './style'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'
import Indicator from '../indicator'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeBtnClick = () => {} } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(false)
  const [isShowList, setIsShowList] = useState(true)

  // 当图片浏览器展示出来时，滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  // 函数事件处理
  // 整体control点击
  function iconBtnClickHandle(isRight) {
    setIsNext(isRight)
    let newIndex = currentIndex
    if (isRight) newIndex = currentIndex + 1
    if (!isRight) newIndex = currentIndex - 1

    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex === pictureUrls.length) newIndex = 0
    setCurrentIndex(newIndex)
  }
  // 照片列表点击
  function imgItemClickHandle(index) {
    // if (index > currentIndex) setIsNext(true)
    // if (index < currentIndex) setIsNext(false)
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }
  // 照片列表展示隐藏
  function toggleClickHandle() {
    setIsShowList(!isShowList)
  }
  return (
    <BrowserWrapper isNext={isNext} showList={isShowList}>
      <div className="top">
        <div className="close-btn" onClick={(e) => closeBtnClick(false)}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => iconBtnClickHandle(false)}>
            <IconArrowLeft width="70" height="70" />
          </div>
          <div className="btn right" onClick={(e) => iconBtnClickHandle(true)}>
            <IconArrowRight width="70" height="70" />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition key={currentIndex} classNames="pic" timeout={200}>
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>roow apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={toggleClickHandle}>
              <span>
                {isShowList ? '隐藏' : '展示'}照片列表
                {isShowList ? (
                  <IconTriangleArrowBottom />
                ) : (
                  <IconTriangleArrowTop />
                )}
              </span>
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls?.map((item, index) => {
                return (
                  <div
                    className={classNames('item', {
                      active: currentIndex === index
                    })}
                    key={index}
                    onClick={(e) => imgItemClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeBtnClick: PropTypes.func
}

export default PictureBrowser
