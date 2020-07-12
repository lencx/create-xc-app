import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { CONFIG } from '/@/routes';
import { RouteOption } from './types';

const RouteWithSubRoutes = (routeProps: RouteOption) => {
  const global = useSelector((state: any) => state.global);
  // authenticated flag
  const authenticated: boolean = global.authenticated;

  return (
    <Suspense fallback={routeProps.fallback || null}>
      <Route
        path={routeProps.path}
        render={(props) => {
          const comp = routeProps.component &&
            <routeProps.component {...props} routes={routeProps.routes} />;

          return routeProps.redirect
            ? <Redirect to={routeProps.redirect}/>
            : routeProps.private
              ? (authenticated ? comp : <Redirect to={CONFIG.authRedirect} />)
              : comp
        }}
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;