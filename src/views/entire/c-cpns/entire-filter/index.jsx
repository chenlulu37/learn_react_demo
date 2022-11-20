/*
 * @Author: 陈璐璐
 * @Date: 2022-11-11 13:46:14
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-14 11:21:41
 * @Description: file content
 */
// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classnames from 'classnames'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState(['人数'])
  function itemClickHandle(item) {
    let arr = [...selectItems]
    if (arr.includes(item)) {
      arr.splice(arr.indexOf(item), 1)
    } else {
      arr.push(item)
    }
    setSelectItems(arr)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classnames('item', {
                active: selectItems.includes(item)
              })}
              key={index}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter
