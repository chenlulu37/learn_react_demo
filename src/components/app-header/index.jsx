/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 16:25:11
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-18 14:13:25
 * @Description: file content
 */
import React, { memo, useEffect, useRef, useState } from 'react'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import classNames from 'classnames'

import useScrollPosition from '@/hooks/useScrollPosition'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  // 定义组件内部的状态
  const [isSearch, setIsSearch] = useState(false)

  // 从redux中获取数据
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqual
  )
  const { isFixed, topAlpha } = headerConfig

  // 滚动监听
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  if (!isSearch) prevY.current = scrollY
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  //透明度的逻辑
  // if (topAlpha && scrollY < 80 && !isSearch) setIsSearch(true)
  const isAlpha = topAlpha && scrollY < 80

  // 事件处理
  function searchBarClick() {
    setIsSearch(true)
  }

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper
        className={classNames({ fixed: isFixed })}
        isAlpha={isAlpha}
      >
        <div className="content">
          <div className="top">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={searchBarClick}
            ></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>
          <SearchAreaWrapper
            isSearch={isAlpha || isSearch}
            className="search-area"
          >
            <div></div>
          </SearchAreaWrapper>
        </div>
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
