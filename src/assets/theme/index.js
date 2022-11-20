/*
 * @Author: 陈璐璐
 * @Date: 2022-11-09 09:20:21
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-09 09:37:42
 * @Description: file content
 */
const theme = {
  isAlpha: false,
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A"
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222"
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }
    `  
  }
}

export default theme