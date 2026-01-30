import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateFood = () => {
    const {fid}=useParams();
    const [food,setFood]=useState({});
    useEffect(()=>{
        axios.get(`http://localhost:1004/food/fetch/${fid}`)
        .then((response)=>{
            console.log(response.data);
            setFood(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[fid])

    const updateFoodHandler=()=>{
        axios.put(`http://localhost:1004/food/update/${fid}`,food)
        .then((response)=>{ 
            console.log(response.data);
            alert("Food updated successfully");
        })
        .catch((error)=>{
            console.log(error);
            alert(error.response.data.fname);
        });
    }
  return (
    <div>
        <h2>Update Food</h2>
        <input type="text" placeholder='Enter food id' value={food.fid} onChange={(e) => setFood({...food, fid: e.target.value})} /> <br/><br/>
        <input type="text" placeholder='Enter new food name' value={food.fname} onChange={(e) => setFood({...food, fname: e.target.value})} /> <br/><br/>
        <input type="text" placeholder='Enter new food price' value={food.price} onChange={(e) => setFood({...food, price: e.target.value})} /> <br/><br/>
        <button className='btn btn-warning' onClick={updateFoodHandler}>Update</button>
        <a href="/foodlist">

        <button className='btn btn-primary m-1'>Go to Food List</button>
        </a>
    </div>
  )
}

export default UpdateFood