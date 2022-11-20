/*
 * @Author: 陈璐璐
 * @Date: 2022-11-10 10:40:09
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-10 16:08:00
 * @Description: file content
 */
import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import classnames from 'classnames'

import ScrollView from '@/base-ui/scroll-view'
import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const { tabNames = [], changeCurrentIndex } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemClickHandle = useCallback(
    function (index, item) {
      setCurrentIndex(index)
      changeCurrentIndex(index, item)
    },
    [changeCurrentIndex]
  )
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={index}
              className={classnames('item', { active: currentIndex === index })}
              onClick={(e) => itemClickHandle(index, item)}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  changeCurrentIndex: PropTypes.func
}

export default SectionTabs
