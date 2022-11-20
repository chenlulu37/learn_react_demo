/*
 * @Author: 陈璐璐
 * @Date: 2022-11-14 13:26:06
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-16 09:39:03
 * @Description: file content
 */
// import PropTypes from 'prop-types'
import PictureBrowser from '@/base-ui/picture-browser'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PictureWrapper } from './style'

const DetailPicture = memo((props) => {
  // 定义组件内部的值
  const [showBrowser, setShowBrowser] = useState(false)

  // redux获取数据
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqual
  )

  // 函数处理事件
  function changeShowBrowser(blo) {
    setShowBrowser(blo)
  }
  return (
    <PictureWrapper>
      <h2>{detailInfo.name}</h2>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={(e) => changeShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls.slice(1, 5).map((item, index) => {
            return (
              <div
                className="item"
                key={index}
                onClick={(e) => changeShowBrowser(true)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="show-btn" onClick={(e) => changeShowBrowser(true)}>
        显示图片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          closeBtnClick={changeShowBrowser}
        />
      )}
    </PictureWrapper>
  )
})

DetailPicture.propTypes = {}

export default DetailPicture
