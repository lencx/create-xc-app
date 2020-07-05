import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'dva';

import Router from '/@route/Router';
import './style.css';

function Layout(props: any) {
  return (
    <div className="app">
      <nav>
        <li>
          {props.authenticated
            ? <Link to='/signout'> Sign Out </Link>
            : <Link to='/login'> Login </Link>}
        </li>
        <li><Link to='/protected'> Protected </Link></li>
      </nav>
      <div className='main'>
        <Router
          routes={props.routes}
          store={{
            authenticated: props.authenticated,
            dispatch: props.dispatch,
          }}
        />
      </div>
    </div>
  )
}

export default connect((state: any) => state.global)(Layout)
