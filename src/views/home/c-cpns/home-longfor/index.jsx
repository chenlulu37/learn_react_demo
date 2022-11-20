/*
 * @Author: 陈璐璐
 * @Date: 2022-11-10 16:17:25
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-10 16:38:59
 * @Description: file content
 */
import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style'

const SectionLongFor = memo((props) => {
  const { infoData } = props
  return (
    <LongForWrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData?.list?.map((item) => {
            return <LongforItem itemData={item} key={item.city} />
          })}
        </ScrollView>
      </div>
    </LongForWrapper>
  )
})

SectionLongFor.propTypes = {
  infoData: PropTypes.object
}

export default SectionLongFor
