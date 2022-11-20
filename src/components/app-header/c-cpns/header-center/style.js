/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 16:41:07
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-18 14:08:31
 * @Description: file content
 */
import styled from 'styled-components'

export const HeaderCenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};
    
    .text {
      padding: 0 16px;
      color: ${props=>props.theme.isAlpha?'rgba(255,255,255,1)':'#222'};
      /* color: #222; */
      font-weight: 600;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }

  .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .bar-exit {
    opacity: 1;
  }
  .bar-exit-active{
    opacity: 0;
    transform: scale(2.85714, 1.375) translateY(58px);
  }
  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }
  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }
  
  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }
  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }
  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }
  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

`