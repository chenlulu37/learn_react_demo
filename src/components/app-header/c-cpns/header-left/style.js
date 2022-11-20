/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 16:40:32
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-18 13:30:26
 * @Description: file content
 */
import styled from 'styled-components'

export const HeaderLeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${props => props.theme.isAlpha ? "#fff": props.theme.color.primaryColor};
  
  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`