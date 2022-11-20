/*
 * @Author: 陈璐璐
 * @Date: 2022-11-11 13:47:43
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-14 11:18:25
 * @Description: file content
 */
// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination'
import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo((props) => {
  const { currentPage, totalCount } = useSelector(
    (state) => ({
      currentPage: state.entire.currentPage,
      totalCount: state.entire.totalCount
    }),
    shallowEqual
  )
  const totalPage = Math.ceil(totalCount / 20) //想上取整  15.6 => 16
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  // 事件处理的逻辑
  const dispatch = useDispatch()
  function pageChangeHandle(event, count) {
    window.scrollTo(0, 0)
    console.log('分页点击', event, count)
    // dispatch(changeCUrrentPageAction(count - 1))
    dispatch(fetchRoomListAction(count - 1))
  }

  return (
    <PaginationWrapper>
      {totalCount > 0 && (
        // size="small" large
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第{startCount} - {endCount} 个房源， 共超过
            {totalCount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination
