/**
 * @author: lencx
 * @create_at: Jul 04, 2020
 */

// @ts-nocheck
import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import dva from '/@core/dva';
import Router from '/@route/Router';
import models from '/@/models';

const dvaApp = dva.createApp({
  initialState: {},
  models,
});

const store = dvaApp.getStore();

export default function InitApp({ routes }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Router routes={routes} />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}
