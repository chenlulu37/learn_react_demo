/*
 * @Author: 陈璐璐
 * @Date: 2022-11-09 17:23:27
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-14 11:21:17
 * @Description: file content
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props
  return (
    <RoomsWrapper>
      {roomList?.slice(0, 8).map((item) => {
        return (
          <RoomItem
            key={item.id}
            itemData={item}
            itemWidth={itemWidth}
          ></RoomItem>
        )
      })}
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  itemWidth: PropTypes.string,
  roomList: PropTypes.array
}

export default SectionRooms
