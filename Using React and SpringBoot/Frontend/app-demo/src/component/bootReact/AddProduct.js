import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [product, setProduct] = React.useState({
        pid: '',
        pname: '',
        pquantity: '',
        price: ''
    });
    const [message, setMessage] = React.useState('');

    function addProductHandler() {
        axios.post('http://localhost:1004/product/add', product)
            .then(response => {
                console.log('Product added successfully:', response.data);
                setMessage('Product added successfully!');
            })
            .catch(error => {
                console.error('There was an error adding the product!', error);
            });
    }

    function refreshPage() {
        setProduct({
            pid: '',
            pname: '',
            pquantity: '',
            price: ''
        });
    }

  return (
    <div>
        <h2>Add Product</h2>
        <input type='text' placeholder='Product id' value={product.pid} onChange={(e)=>{setProduct({...product,pid:e.target.value})}}/>
        <input type='text' placeholder='Product name' value={product.pname} onChange={(e)=>{setProduct({...product,pname:e.target.value})}}/>
        <input type='text' placeholder='Product Quantity' value={product.pquantity} onChange={(e)=>{setProduct({...product,pquantity:e.target.value})}}/>
        <input type='text' placeholder='Product Price' value={product.price} onChange={(e)=>{setProduct({...product,price:e.target.value})}}/>
        <button className='btn btn-danger' onClick={() => {addProductHandler(); refreshPage();}}>Add Product</button>
        <h3 className='text-primary'>{message}</h3>
        <Link to='/preport'>
            <button className='btn btn-info'>Back to Product Report</button>
        </Link>
    </div>
  )
}

export default AddProduct