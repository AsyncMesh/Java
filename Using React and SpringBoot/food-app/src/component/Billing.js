import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Billing = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const uname = JSON.parse(localStorage.getItem("user"));
    axios.get(`http://localhost:1004/order/billing/${uname.uname}`)
      .then((response) => {
        console.log(response.data)
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      <h2>Billing</h2>
      <table className='table table-hover table-striped table-bordered'>
        <thead className='table table-dark'>
          <tr>
            <th>Order Id</th>
            <th>Food Id</th>
            <th>Username</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.oid} className='order-item w-25 p-4 m-2 border border-dark'>
              <td>{order.oid}</td>
              <td>{order.fid}</td>
              <td>{order.uname}</td>
              <td>{order.odqty}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Billing