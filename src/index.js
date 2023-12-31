import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './styles/global-styles.scss';

import rootReducer from './store';
import Root from './routerConfig';
import styled from 'styled-components';
import { colorA, colorALight } from './utils/colors';
import { headerHeight, footerHeight } from './utils/theme';

const StyledRoot = styled.div`
  & h1 {
    border: solid 1px #fff;
    padding: 3px 8px;
    border-radius: 8px;
    font-weight: 300;
    color: #fff;
    font-size: 24px;
    margin: 0;
    & span {
      font-weight: 700;
    }
  }

  & h2 {
    color: ${colorA};
    border-bottom: solid 1px ${colorA};
  }

  & h3 {
    font-size: 18px;
    padding: 3px 10px;
    margin: 0 10px 10px -20px;
    background: linear-gradient(
      90deg,
      rgba(38, 50, 56, 1) 0%,
      rgba(38, 50, 56, 1) 50%,
      rgba(38, 50, 56, 0) 100%
    );
    color: #fff;
    font-weight: 100;
  }

  & main {
    position: fixed;
    top: ${headerHeight}px;
    bottom: ${footerHeight}px;
    left: 0;
    right: 0;
    overflow: auto;
    background-color: ${colorALight};
  }

  & .main-content {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    & .inner-content {
      display: flex;
      flex-direction: column;
      position: relative;
      flex-direction: column;
      width: 100%;
      height: 100%;
      max-width: 1820px;
      margin: 0 auto 0 auto;
      padding: 20px 0 0 30px;
    }
  }
`;

sessionStorage.clear(); // Clear session storage

const store = configureStore({ reducer: rootReducer, devTools: false });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <StyledRoot>
      <Root />
    </StyledRoot>
  </Provider>
);
