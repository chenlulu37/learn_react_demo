/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 13:41:22
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-16 14:19:24
 * @Description: file content
 */

import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'
import DetailInfo from './c-cpns/detail-infos'
import DetailPicture from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  // const { detailInfo } = useSelector((state) => ({
  //   detailInfo: state.detail.detailInfo
  // }))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailInfo />
      <DetailPicture />
    </DetailWrapper>
  )
})

export default Detail
