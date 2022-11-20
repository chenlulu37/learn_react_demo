/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 11:11:51
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-18 15:44:04
 * @Description: file content
 */
import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { connect } from 'react-redux'

import routes from '@/router'
import AppHeader from 'components/app-header'
import AppFooter from 'components/app-footer'
import { useScrollTop } from './hooks'

const App = memo((props) => {
  useScrollTop()
  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="content">
          {/* <outLet />    非一级路由的占位符 */}
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

const mapStateToProps = (state) => ({
  // name: state.home.name,
  // age: state.home.age,
  // entireName: state.entire.name,
  // entireAge: state.entire.age
})

export default connect(mapStateToProps)(App)
// export default App
