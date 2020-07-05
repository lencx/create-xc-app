import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWithSubRoutes from './RouteWithSubRoutes';
import { RouteOption, RouterProps } from './types';

const Router: React.FC<RouterProps> = ({ routes, store = {} }) => {
  return (
    <Switch>
      {routes && routes.map((route: RouteOption) => <RouteWithSubRoutes key={route.path} {...route} store={store} />)}
    </Switch>
  );
};

export default Router;