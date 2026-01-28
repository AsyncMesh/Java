import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import DeleteProduct from './DeleteProduct';
import { Link } from 'react-router-dom';

const ProductReport = () => {
    let [product, setProduct] = useState([]);
    let [del, setDelete] = useState("")
    let [id, setId] = useState('');

    const searchHandler = () => {
        if (id) {
            axios.get(`http://localhost:1004/product/fetch/${id}`)
                .then(response => {
                    setProduct([response.data]);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the products!', error);
                });
        } else {
            alert('Please enter correct id to search')
        }
    }

    useEffect(() => {
        axios.get('http://localhost:1004/product/fetch')
            .then(response => {
                setProduct(response.data);
                console.log(response.data);

            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, [del]);

    return (
        <div>
            <h2 className='text-primary'>List Of Products</h2>
            <div className='mb-3 d-flex justify-content-between px-4 align-items-center'>
                <div>

                    <input type='text' placeholder='Search Product by id' onChange={(e) => { setId(e.target.value) }} />
                    <button className='btn btn-primary pl-2' onClick={searchHandler}>Search</button>
                </div>
                <Link to='/product/add'>
                    <button className='btn btn-success'>Add Product</button>
                </Link>
            </div>



            <div>
                {product.length > 0 ? (
                    <>

                        <div>
                            <table className='table table-hover'>
                                <thead className='table table-dark'>
                                    <tr>
                                        <th>SNo.</th>
                                        <th>Product Id</th>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {product.map((ele, index) => {
                                        return (

                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{ele.pid}</td>
                                                <td>{ele.pname}</td>

                                                <td>{ele.pquantity}</td>
                                                <td>{ele.price}</td>
                                                <td><DeleteProduct id={ele.pid} setDelete={setDelete} />
                                                    <Link to={`/product/update/${ele.pid}`}>
                                                        <button className='btn btn-success'>Update</button>
                                                    </Link>
                                                </td>
                                            </tr>

                                        )
                                    })}
                                </tbody>

                            </table>
                        </div>
                    </>
                ) : <h2 style={{ color: "red" }}>No user Info</h2>
                }
            </div>
        </div>
    )
}

export default ProductReport