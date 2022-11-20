/*
 * @Author: 陈璐璐
 * @Date: 2022-11-10 13:58:12
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-11 08:38:25
 * @Description: file content
 */
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { name } = props

  // 事件处理
  const navigate = useNavigate()
  function moreClickHandele() {
    // #484848
    navigate('/entire')
  }

  return (
    <FooterWrapper color={name ? '#00848A' : ''}>
      <div className="info" onClick={moreClickHandele}>
        <span className="text">
          {name ? `显示更多${name}房源` : '显示全部'}
        </span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
}

export default SectionFooter
