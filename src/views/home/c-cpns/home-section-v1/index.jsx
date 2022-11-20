/*
 * @Author: 陈璐璐
 * @Date: 2022-11-10 09:29:22
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-10 14:08:30
 * @Description: file content
 */
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV1Wrapper>
      <SectionHeader
        title={infoData?.title}
        subtitle={infoData?.subtitle}
        itemWidth="25%"
      />
      <SectionRooms
        roomList={infoData?.list}
        subtitle={infoData?.subtitle}
        itemWidth="25%"
      />
      <SectionFooter />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1
