/*
 * @Author: 陈璐璐
 * @Date: 2022-11-11 13:48:06
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-16 14:23:18
 * @Description: file content
 */
import styled from "styled-components";

export const RoomsWrapper = styled.div`
  margin-top: 128px;
  padding: 30px 20px;
  position: relative;
  .title{
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 10px 10px;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
  }
  >.cover{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255,255,255,.6);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    h1{
      margin-top: 50px;
    }
  }
`