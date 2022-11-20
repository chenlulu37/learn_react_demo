/*
 * @Author: 陈璐璐
 * @Date: 2022-11-14 09:22:29
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-14 10:15:09
 * @Description: file content
 */
import styled from "styled-components";

export const  IndicatorWrapper = styled.div`
  overflow: hidden;
  
  .i-content{
    display: flex;
    position: relative;
    transition: transform 250ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`