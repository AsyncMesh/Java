import React from 'react'
import Register from './Register'
import Login from './Login'
import LoginContextProvider from './context/LoginContextProvider';

const Main = () => {
  const [state, setState] = React.useState(true);
  const [name, setName] = React.useState("");
  return (
    <>
      <LoginContextProvider userName={name}>
        <button onClick={() => setState(!state)} className='bg-primary'>
          {state ? 'Go to Login' : 'Go to Register'}
        </button>
        {state ? <h2>Register Page</h2> : <h2>Login Page</h2>}
        {state ? <Register setState={setState} setName={setName} /> : <Login />}
      </LoginContextProvider>

    </>
  )
}

export default Main