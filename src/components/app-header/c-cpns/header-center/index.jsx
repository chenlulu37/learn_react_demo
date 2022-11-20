/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 16:41:07
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-18 11:05:18
 * @Description: file content
 */
import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import SearchTitles from '@/assets/data/search_titles.json'
import SearchSections from './c-cpns/search-sections'
import SearchTabs from './c-cpns/search-tabs'
import { HeaderCenterWrapper } from './style'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props

  const [tabIndex, setTabIndex] = useState(0)
  const titles = SearchTitles.map((item) => item.title)

  // 事件处理
  function searchBarClickHanlde() {
    if (searchBarClick) searchBarClick()
  }
  return (
    <HeaderCenterWrapper>
      <CSSTransition
        in={!isSearch}
        timeout={250}
        classNames="bar"
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickHanlde}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        timeout={250}
        classNames="detail"
        unmountOnExit={true}
      >
        <div className="search-detail">
          <div className="search-detail">
            <SearchTabs titles={titles} tabClick={setTabIndex} />
            <div className="infos">
              <SearchSections
                searchInfos={SearchTitles[tabIndex].searchInfos}
              />
            </div>
          </div>
        </div>
      </CSSTransition>
    </HeaderCenterWrapper>
  )
})
HeaderCenter.propTypes = {
  isSearch: PropTypes.bool,
  searchBarClick: PropTypes.func
}

export default HeaderCenter
