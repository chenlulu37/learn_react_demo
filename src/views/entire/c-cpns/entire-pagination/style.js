/*
 * @Author: 陈璐璐
 * @Date: 2022-11-11 13:47:18
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-11 15:52:50
 * @Description: file content
 */
import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .info{
    display: flex;
    flex-direction: column;
    align-items: center;
    .MuiPaginationItem-page{
      margin: 0 10px;
      &:hover{
        text-decoration: underline
      }
    }
    .MuiPaginationItem-page.Mui-selected{
      background: #222;
      color: #fff;
    }
    .desc{
      margin-top: 16px;
      color: #222;
    }
  }
`