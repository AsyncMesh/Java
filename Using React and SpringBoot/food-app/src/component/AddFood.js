import axios from 'axios';
import React, { useState } from 'react'

const AddFood = () => {
    const [fid, setFid] = useState('');
    const [fname, setFname] = useState('');
    const [fprice, setFprice] = useState('');
    const [errors, setErrors] = useState({});

    const addFoodToServer = () => {
        axios.post("http://localhost:1004/food/add", {
            fid: fid,
            fname: fname,
            price: fprice
        }).then((response) => {
            console.log(response.data);
            alert("Food added successfully");
            setFid('');
            setFname('');
            setFprice('');
        }).catch((error) => {
            setErrors(error.response.data);
            console.log(error.response.data);
            alert("Something went wrong");
        });
    }
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow p-4" style={{minWidth: '350px', maxWidth: '400px', width: '100%'}}>
                <h2 className="mb-4 text-center">Add Food</h2>
                <div className="form-group mb-3">
                    <label htmlFor="fid">Food ID</label>
                    <input
                        id="fid"
                        type="text"
                        className="form-control"
                        value={fid}
                        placeholder="Enter food id"
                        onChange={(e) => { setFid(e.target.value) }}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="fname">Food Name</label>
                    <input
                        id="fname"
                        type="text"
                        className={`form-control${errors?.fname ? ' is-invalid' : ''}`}
                        value={fname}
                        placeholder="Enter food name"
                        onChange={(e) => { setFname(e.target.value) }}
                    />
                    {errors?.fname && <div className="invalid-feedback">{errors.fname}</div>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="fprice">Food Price</label>
                    <input
                        id="fprice"
                        type="text"
                        className={`form-control${errors?.price ? ' is-invalid' : ''}`}
                        value={fprice}
                        placeholder="Enter food price"
                        onChange={(e) => { setFprice(e.target.value) }}
                    />
                    {errors?.price && <div className="invalid-feedback">{errors.price}</div>}
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-success" onClick={addFoodToServer}>Add Food</button>
                    <a href="/foodlist" className="btn btn-primary">Go to Food List</a>
                </div>
            </div>
        </div>
    )
}

export default AddFood