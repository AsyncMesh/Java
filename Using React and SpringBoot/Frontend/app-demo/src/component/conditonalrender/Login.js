import React, { useContext } from 'react'
import { loginContext } from './context/LoginContext'

const Login = () => {
  const {userName}=useContext(loginContext)
  return (
    <>
    <div >Login</div>
    <div className='d-flex justify-content-center flex-column align-items-center mt-5'>

        <div className='text-success'>Welcome to the Registration Page</div>
        <br />
        <input type="text" placeholder='Enter Username' value={userName} className='form-control w-25' />
        <br />
        
        <input type="password" placeholder='Enter Password' className='form-control w-25' />
        <br />
        <button className='btn btn-success'>Login</button>
      </div>
      </>
  )
}

export default Login