import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(props: any) {
  const handleLogin = () => {
    props.store.dispatch({
      type: 'global/setState',
      payload: { authenticated: true },
    })
    props.history.push('/protected');
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <Link to="/">Back To Home</Link>
    </div>
  )
}
