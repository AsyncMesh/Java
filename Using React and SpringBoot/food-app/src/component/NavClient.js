import React from 'react'

const NavClient = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">FoodApp</a>
                    <a className='navbar-brand' href='/foodList'>FoodList</a>
                    <a className='navbar-brand' href='/searchFood'>Search Food</a>
                    <a className='navbar-brand' href='/billing'>Billing</a>
                </div>
            </nav>
        </div>
    )
}

export default NavClient