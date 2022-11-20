/*
 * @Author: 陈璐璐
 * @Date: 2022-11-10 13:23:42
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-10 16:20:03
 * @Description: file content
 */
import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData = {} } = props

  // 数据转换
  const [currentIndex, setCurrentIndex] = useState(0)
  const tabNames = infoData.dest_address?.map((item) => item.name) || []
  const roomList = infoData.dest_list?.[tabNames[currentIndex]] || []

  const changeCurrentIndex = useCallback((index, name) => {
    setCurrentIndex(index)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
      <SectionTabs
        tabNames={tabNames}
        changeCurrentIndex={changeCurrentIndex}
      />
      <SectionRooms roomList={roomList} itemWidth="33.3333%" />
      <SectionFooter name={tabNames?.[currentIndex]} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2
