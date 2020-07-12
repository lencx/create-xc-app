/**
 * @author: lencx
 * @create_at: Jul 04, 2020
 */

import React, { StrictMode, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import createApp from '/@core/dva';
import Router, { RouteOption } from '/@route/Router';
import models from '/@/models';

const dvaApp = createApp({
  initialState: {},
  models,
});

const store = dvaApp.getStore();

interface InitAppProps {
  routes: RouteOption[];
}

export default function InitApp({ routes }: InitAppProps) {
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
