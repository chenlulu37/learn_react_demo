/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 11:11:51
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-18 15:43:58
 * @Description: file content
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from '@/App';
import 'normalize.css'
import '@/assets/css/index.less'
import store from '@/store';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
