/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 16:41:28
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-09 10:56:52
 * @Description: file content
 */
import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './style'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)
  function profileClickHandle(e) {
    // e.preDefault()
    setShowPanel(true)
  }
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener('click', windowHandleClick, true)
    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  return (
    <HeaderRightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight
