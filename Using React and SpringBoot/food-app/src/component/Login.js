import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const LoginHandler = () => {
        axios.post("http://localhost:1004/login/user", {
            uname: uname,
            pass: pass
        }).then((response) => {
            console.log(response.data);
            alert("Login successful");
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate('/');
        }).catch((error) => {
            console.log(error.response.data);
            alert("Login failed");
        });
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Enter username' value={uname} onChange={(e) => setUname(e.target.value)} />
        <br />
        <input type="password" placeholder='Enter password' value={pass} onChange={(e) => setPass(e.target.value)} />
        <br />
        <button onClick={LoginHandler}>Login</button>
    </div>
  )
}

export default Login