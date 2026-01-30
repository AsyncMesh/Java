import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteFood from './DeleteFood'

const Food = () => {

    const [foods, setFoods] = useState([])
    const [foodDeleted, setFoodDeleted] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:1004/food/fetch")
            .then((response) => {
                console.log(response.data)
                setFoods(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [foodDeleted]);

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
                                <DeleteFood fid={food.fid} setFoodDeleted={setFoodDeleted} />
                                <Link to={`/updateFood/${food.fid}`}>
                                    <button>Update</button>
                                </Link>

                            </td>
                        </tr>

                    ))}
                </tbody>

            </table>

        </div>
    )
}

export default Food