import axios from 'axios'
import React from 'react'

const DeleteFood = ({fid,setFoodDeleted}) => {
    const deleteHandler=()=>{
        axios.delete(`http://localhost:1004/food/del/${fid}`)
        .then((response)=>{
            console.log(response.data);
            alert("Food deleted successfully");
            setFoodDeleted(true);
        })
        .catch((error)=>{
            console.log(error);
            alert("Something went wrong");
        });
    }
  return (
    <div>
        <button onClick={deleteHandler} className='btn btn-danger'>Delete</button>
    </div>
  )
}

export default DeleteFood