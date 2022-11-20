/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 13:40:19
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-18 13:24:28
 * @Description: file content
 */
import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Button } from '@mui/material'
// import Button from '@mui/material/Button'
// import { Button } from 'antd'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import SectionLongFor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { isEmptyO } from '@/utils'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  // 发起网络请求
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotrecommenddestInfo,
    longforInfo,
    plusInfo
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotrecommenddestInfo: state.home.hotrecommenddestInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo
    }),
    shallowEqual
  )

  // 派发时间
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('home useEffect')
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣区域 */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {/* 热门推荐 */}
        {isEmptyO(hotrecommenddestInfo) && (
          <HomeSectionV2 infoData={hotrecommenddestInfo} />
        )}
        {/* 向往的地方 */}
        {isEmptyO(longforInfo) && <SectionLongFor infoData={longforInfo} />}
        {/* 高性价比 */}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {/* 高分 */}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {/* 更多plus房源 */}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
      <Button variant="contained">Primary</Button>
      {/* <Button type="primary">Button</Button> */}
    </HomeWrapper>
  )
})

export default Home
