import React from 'react';
import { Link } from 'react-router-dom';

export default function SignOut(props: any) {
  const handleOut = () => {
    props.store.dispatch({
      type: 'global/setState',
      payload: { authenticated: false },
    })
    props.history.push('/login');
  }
  return (
    <div>
      <h1>SignOut Page</h1>
      <button onClick={handleOut}>SignOut</button>
      <Link to="/">Back To Home</Link>
    </div>
  )
}
