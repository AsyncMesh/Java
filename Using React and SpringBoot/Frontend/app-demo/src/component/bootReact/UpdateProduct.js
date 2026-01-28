import React, { useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {pid}=useParams();

    const [product, setProduct] = React.useState({
        pid: '',
        pname: '',
        pquantity: '',
        price: ''
    });

    const [message, setMessage] = React.useState('');

    useEffect(()=>{
        axios.get(`http://localhost:1004/product/fetch/${pid}`)
        .then(response=>{
            console.log(response.data);
            setProduct(response.data);
        })
        .catch(error=>{
            console.error('There was an error fetching the product!',error);
        })
    }, [pid]);

    const updateProductHandler = () => {
        axios.put(`http://localhost:1004/product/update/${pid}`, product)
            .then(response => {
                console.log('Product updated successfully:', response.data);
                setMessage('Product updated successfully!');
                
            })
            .catch(error => {
                console.error('There was an error updating the product!', error);
            });
    }

    return (
        <div>

            <div style={{padding:"8px"}}>
                <h2>Update Product</h2>
                <input type='text' placeholder='Product id' value={product.pid} onChange={(e) => { setProduct({ ...product, pid: e.target.value }) }} />
                <input type='text' placeholder='Product name' value={product.pname} onChange={(e) => { setProduct({ ...product, pname: e.target.value }) }} />
                <input type='text' placeholder='Product Quantity' value={product.pquantity} onChange={(e) => { setProduct({ ...product, pquantity: e.target.value }) }} />
                <input type='text' placeholder='Product Price' value={product.price} onChange={(e) => { setProduct({ ...product, price: e.target.value }) }} />
                <button className='btn btn-success' onClick={updateProductHandler}>Update Product</button>
                <h3 className='text-primary'>{message}</h3>
                <Link to='/preport'>
                    <button className='btn btn-info'>Back to Product Report</button>
                </Link>
            </div>

        </div>
    )
}

export default UpdateProduct