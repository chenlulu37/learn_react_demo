/*
 * @Author: 陈璐璐
 * @Date: 2022-11-09 14:43:47
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-16 10:45:21
 * @Description: file content
 */
import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rate, Carousel } from 'antd'
import classnames from 'classnames'

import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()

  //函数
  function controlClickHandle(isRight = true, event) {
    let newIndex = selectIndex
    if (isRight) {
      sliderRef.current.next()
      newIndex += 1
    } else {
      sliderRef.current.prev()
      newIndex -= 1
    }
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
    setSelectIndex(newIndex)

    // 阻止事件冒泡
    event.stopPropagation()
  }

  function itemClickHandle() {
    if (itemClick) itemClick(itemData)
    return
  }

  // 子元素
  const pictureEl = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" style={{ width: '100%' }} />
    </div>
  )
  const sliderEl = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30px" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30px" />
        </div>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls &&
          itemData.picture_urls.map((item, index) => {
            return (
              <div className="cover" key={index}>
                <img src={item} alt="" style={{ width: '100%' }} />
              </div>
            )
          })}
      </Carousel>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={index}>
                <span
                  className={classnames('dot', {
                    active: selectIndex === index
                  })}
                >
                  {/* {index} */}
                </span>
              </div>
            )
          })}
        </Indicator>
      </div>
    </div>
  )
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || '#767676'}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {itemData.picture_urls ? sliderEl : pictureEl}
        {/* {sliderEl} */}
        {/* {pictureEl} */}

        <div className="desc">
          {itemData.verify_info?.messages?.join(' · ')}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rate
            allowHalf
            defaultValue={itemData.star_rating ?? 5}
            style={{
              fontSize: '10px',
              color: itemData.star_rating_color || '#oo848A'
            }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span
              className="extra"
              style={{
                color: itemData.bottom_info?.content_color,
                fontSize: itemData.bottom_info?.font_size + 'px'
              }}
            >
              ·{itemData.bottom_info?.content}
            </span>
          )}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemWidth: PropTypes.string,
  itemData: PropTypes.object,
  itemClick: PropTypes.func
}

export default RoomItem
