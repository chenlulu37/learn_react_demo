/*
 * @Author: 陈璐璐
 * @Date: 2022-11-14 09:25:04
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-14 11:18:04
 * @Description: file content
 */
import Indicator from '@/base-ui/indicator'
// import PropTypes from 'prop-types'
// import classnames from 'classnames'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo((props) => {
  const names = [
    'sgs',
    'sdgsg',
    'sgs',
    'sgdsgd',
    'sdgsdg',
    'shsdg',
    'sgdsdgs',
    'sdgsdf',
    'sgsdg',
    'sgsdg',
    'sgsdg'
  ]
  const [selectIndex, setSelectIndex] = useState(0)

  function toggleClickHandle(isRight) {
    const newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) {
      setSelectIndex(names.length - 1)
    } else if (newIndex === names.length) {
      setSelectIndex(0)
    } else {
      setSelectIndex(newIndex)
    }
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={(e) => toggleClickHandle(false)}>上一个</button>
        <button onClick={(e) => toggleClickHandle(true)}>下一个</button>
      </div>
      {selectIndex}
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {names.map((item, index) => {
            return (
              <div className="item">
                <button key={index}>{item}</button>
              </div>
            )
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

Demo.propTypes = {}

export default Demo
