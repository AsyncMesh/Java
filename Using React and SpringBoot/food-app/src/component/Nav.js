import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
  
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-4">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/foodList" >Food List</Link >
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addFood" >Add Food</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/searchFood" >Search Food</Link>
          </li>
        </ul>

      </nav>

    </div>
  )
}

export default Nav