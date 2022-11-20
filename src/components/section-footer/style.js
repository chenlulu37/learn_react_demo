/*
 * @Author: 陈璐璐
 * @Date: 2022-11-10 13:58:30
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-10 14:09:33
 * @Description: file content
 */
import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  .info {
    display: flex;
    align-items: center;
    cursor: pointer;

    font-size: 17px;
    font-weight: 700;
    color: ${props => props.color};
    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`