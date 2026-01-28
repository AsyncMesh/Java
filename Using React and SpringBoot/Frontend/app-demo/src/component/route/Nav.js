import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
        <>
            <div className='mContainer'>
                <div className='lContainer'>
                    <h2>Training App</h2>
                </div>
                <div className='rContainer'>
                   <a href='/state'>State</a>
                   <a href='/profile'>Profile</a>
                   <a href='/props'>Props</a>
                   <a href='/condrend'>Conditionalrender</a>
                   <a href='/context'>Context</a>
                   <a href='/userinfo'>Axios</a>
                   <a href='/preport'>ProductReport</a>
                   <a href='/product'>Product</a>
                </div>
            </div>
        </>
    )
}

export default Nav