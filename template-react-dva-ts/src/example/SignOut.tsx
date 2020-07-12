import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function SignOut() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleOut = () => {
    dispatch({
      type: 'global/setState',
      payload: { authenticated: false },
    })
    history.push('/example/login');
  }
  return (
    <div>
      <h1>SignOut Page</h1>
      <button onClick={handleOut}>SignOut</button>
      <Link to="/example">Back To Home</Link>
    </div>
  )
}
