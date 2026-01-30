import React, { useEffect, useState } from 'react'
import Order from './Order';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FoodListClient = ({username}) => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        axios.get("http://localhost:1004/food/fetch")
            .then((response) => {
                console.log(response.data)
                setFoods(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <div>
            <h2>Available Foods</h2>
            <table className='table table-hover table-striped table-bordered'>
                <thead className='table table-dark'>
                    <tr>
                        <th>Food Id</th>
                        <th>Food Name</th>
                        <th>Food Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((food) => (
                        <tr key={food.fid} className='food-item w-25 p-4 m-2 border border-dark'>
                            <td>{food.fid}</td>
                            <td>{food.fname}</td>
                            <td>{food.price}</td>
                            <td>
                                <Link to={`/order/${food.fid}/${username}/${food.price}`}>
                                   <button>Order</button>
                                </Link>
                            </td>
                        </tr>

                    ))}
                </tbody>

            </table>

        </div>
    )
}

export default FoodListClient