import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        uname: "",
        nm: "",
        phno: "",
        email: "",
        pass: ""
    });

    const handleRegister = () => {
        axios.post("http://localhost:1004/register/add", user)
        .then((response) => {
            console.log(response.data);
            alert("Registration successful");
            navigate('/login');
        })
        .catch((error) => {
            console.log(error.response.data);
            alert("Registration failed");
        });
    }
  return (
    <div>
        <h2>Register</h2>
        <input type="text" placeholder='Enter username' value={user.uname} onChange={(e) => setUser({...user, uname: e.target.value})} />
        <br />
        <input type="text" placeholder='Enter Name' value={user.nm} onChange={(e) => setUser({...user, nm: e.target.value})} />
        <br />
        <input type="number" placeholder='Enter Phone Number' value={user.phno} onChange={(e) => setUser({...user, phno: e.target.value})} />
        <br />
        <input type="email" placeholder='Enter email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
        <br />
        <input type="password" placeholder='Enter password' value={user.pass} onChange={(e) => setUser({...user, pass: e.target.value})} />
        <br />
        <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register