import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h2>Products</h2>
            <div style={{ display: "flex", gap: "12px" }}>
                {/* href causes page reload use Link from react-router-dom for navigation without reload */}
                {/* <a href='/product/jw'>Jewelery</a><br />
                <a href='/product/gr'>Garments</a><br />
                <a href='/product/elec'>Electronics</a><br />
                <a href='/product/rt'>Retails</a><br /> */}
                
                <Link to='jw'>Jewelery</Link>
                <Link to='gr'>Garments</Link>
                <Link to='elec'>Electronics</Link>
                <Link to='rt'>Retails</Link>
            </div>
            <div style={{ padding: "12px" }}>
                    {/* is a placeholder for nested routes */}
                <Outlet />
            </div>
        </div>
    )
}

export default Product