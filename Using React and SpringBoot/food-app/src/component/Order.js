import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Order = () => {
    const { fid, username, fprice } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState({
        fid: '',
        odqty: '',
        uname: '',
        price: 0
    })

    useEffect(() => {
        setOrder({
            ...order,
            fid: fid,
            uname: username
        })

    }, [])



    const orderHandler = () => {
        axios.post("http://localhost:1004/order/add", order)
            .then((response) => {
                console.log(response.data)
                alert("Order placed successfully")
                navigate("/billing")

            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <input type='text' value={fid} readOnly />
            <input type='text' value={order.price} readOnly />
            <input type='text' value={username} readOnly />
            <input type='number' placeholder='Enter Quantity'
                onChange={(e) => {
                    const qty = Number(e.target.value);
                    setOrder(prev => ({
                        ...prev,
                        odqty: qty,
                        price: fprice * qty
                    }));
                }}
            />
            <button onClick={orderHandler}>Place Order</button>
        </div>
    )
}

export default Order