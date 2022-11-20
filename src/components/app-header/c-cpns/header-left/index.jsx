/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 16:40:22
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-11 08:33:05
 * @Description: file content
 */
import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderLeftWrapper } from './style'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()

  function logoClickHandle() {
    navigate('/home')
  }
  return (
    <HeaderLeftWrapper>
      <div className="logo" onClick={logoClickHandle}>
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft
