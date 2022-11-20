/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 13:41:11
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-16 14:19:17
 * @Description: file content
 */
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('entire useEffect')
    dispatch(fetchRoomListAction()) //参数是size  每页的条数
    dispatch(changeHeaderConfigAction({ isFixed: true }))
  }, [dispatch])
  return (
    <EntireWrapper>
      <div className="filter">
        <EntireFilter />
      </div>
      <div className="rooms">
        <EntireRooms />
      </div>
      <div className="pagination">
        <EntirePagination />
      </div>
    </EntireWrapper>
  )
})

export default Entire
