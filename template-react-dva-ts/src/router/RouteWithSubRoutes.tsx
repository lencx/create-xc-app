import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { CONFIG } from '../routes';
import { RouteOption, RouteWithSubRoutesProps } from './types';

const RouteWithSubRoutes = (routeProps: RouteWithSubRoutesProps) => {
  /** authenticated flag */
  const authenticated: unknown = (routeProps.store || {}).authenticated;

  return (
    <Suspense fallback={routeProps.fallback || <div>loading...</div>}>
      <Route
        path={routeProps.path}
        render={(props) => {
          const comp = routeProps.component &&
            <routeProps.component {...props} routes={routeProps.routes} store={routeProps.store} />;

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