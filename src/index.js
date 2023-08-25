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
import { colorA } from './utils/colors';
import { headerHeight, footerHeight } from './utils/theme';

const StyledRoot = styled.div`
  & h1 {
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

  & main {
    position: fixed;
    top: ${headerHeight}px;
    bottom: ${footerHeight}px;
    left: 0;
    right: 0;
    overflow: auto;
  }

  & .main-content {
    position: absolute;
    top: 0;
    width: 100%;
    & .inner-content {
      position: relative;
      flex-direction: column;
      width: 100%;
      max-width: 1800px;
      margin: 0 auto 0 auto;
      padding: 20px;
    }
  }
`;

const store = configureStore({ reducer: rootReducer, devTools: true });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <StyledRoot>
      <Root />
    </StyledRoot>
  </Provider>
);
