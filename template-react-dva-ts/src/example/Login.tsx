import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogin = () => {
    dispatch({
      type: 'global/setState',
      payload: { authenticated: true },
    })
    history.push('/protected');
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <Link to="/">Back To Home</Link>
    </div>
  )
}
