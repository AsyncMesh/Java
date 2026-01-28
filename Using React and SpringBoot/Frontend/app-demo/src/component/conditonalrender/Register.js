import React, { useState } from 'react'

const Register = ({setState,setName}) => {
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");

  return (
    <>
    <div >Register</div>
    <div className='d-flex justify-content-center flex-column align-items-center mt-5'>

        <div className='text-success'>Welcome to the Registration Page</div>
        <br />
        <input type="email" placeholder='Enter Email' className='form-control w-25' onChange={(e)=>{setEmail(e.target.value)}} />
        <br />
        <input type="text" placeholder='Enter Name' className='form-control w-25' onChange={(e)=>{setName(e.target.value)}}/>
        <br />
        <input type="password" placeholder='Enter Password' className='form-control w-25' onChange={(e)=>{setPassWord(e.target.value)}} />
        <br />
        <button className='btn btn-success' onClick={() => setState(false)}>Submit</button>
      </div>
      </>
  )
}

export default Register