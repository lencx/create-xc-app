import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'dva';

import Router from '/@route/Router';
import { RouteOption } from '/@route/types';
import './style.css';

interface LayoutProps {
  authenticated: boolean;
  routes: RouteOption[];
}

function Layout(props: LayoutProps) {
  const authenticated = props.authenticated;
  return (
    <div className="app">
      <nav>
        <li>
          {authenticated
            ? <Link to='/signout'> Sign Out Page </Link>
            : <Link to='/login'> Login Page </Link>}
        </li>
        <li><Link to='/protected'> Protected Page </Link></li>
      </nav>
      <div className='main'>
        <Router routes={props.routes} />
      </div>
    </div>
  )
}

export default connect((state: any) => ({
  authenticated: state.global.authenticated,
}))(Layout)
