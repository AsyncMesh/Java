// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import Nav from './component/Nav';
import Food from './component/Food';
import Billing from './component/Billing';
import FoodListClient from './component/FoodListClient';
import AddFood from './component/AddFood';
import UpdateFood from './component/UpdateFood';
import DeleteFood from './component/DeleteFood';
import SearchFood from './component/SerachFood';
import Login from './component/Login';
import Register from './component/Register';
import { useEffect, useState } from 'react';
import HomeClient from './component/HomeClient';
import NavClient from './component/NavClient';
import Order from './component/Order';

function App() {
  const [user,setUser]=useState({});

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <div className="App">
      {user.uname==="admin" ? <Nav/> : <NavClient/>}
      <Routes>
          <Route path='/login' element={<Login setUser={setUser}/>}/>
          <Route path='/register' element={<Register/>}/>
          {/* Protected Routes */}
          {user.uname!=="admin" && (
            <>
              <Route path='/' element={<Home/>}/>
              <Route path='/foodList' element={<FoodListClient username={user.uname} />}/>
              <Route path="/order/:fid/:username/:fprice" element={<Order />} />
              <Route path='/billing' element={<Billing/>}/>
            </>
          )}
          {user.uname==="admin" && (
            <>
              <Route path='/' element={<HomeClient/>}/>
              <Route path='/foodList' element={<Food/>}/>
              <Route path='/addFood' element={<AddFood/>}/>
              <Route path='/updateFood/:fid' element={<UpdateFood/>}/>
              <Route path='/deleteFood' element={<DeleteFood/>}/> 
            </>
          )}
          <Route path='/searchFood' element={<SearchFood/>}/>
      </Routes>
    </div>
  );
}

export default App;
