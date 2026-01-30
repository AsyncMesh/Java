import axios from 'axios'
import React, { useState } from 'react'

const SearchFood = () => {
  const [fname, setFname] = useState('');
  const [filteredFood, setFilteredFood] = useState([]);

  const searchButtonHandler = () => {
    axios.get(`http://localhost:1004/food/fetch`)
      .then((response) => {
        console.log(response.data);
        setFilteredFood(response.data.filter((f) => {
         return (
           f.fname.toLowerCase().includes(fname.toLowerCase()) || f.fid.toString().includes(fname)
         );
       }));
      }).catch((error) => {
        console.log(error);
        alert("No Food found");
      });
  }


  return (
    <div>
      
      <input
        type="text"
        className="form-control"
        value={fname}
        placeholder="Enter food name to search"
        onChange={(e) => { setFname(e.target.value) }}
      />
      <button onClick={searchButtonHandler}>Search</button>
      <div>
        <table className='table table-hover table-striped table-bordered'>
          <thead className='table table-dark'>
            <tr>
              <th>Food Id</th>
              <th>Food Name</th>
              <th>Food Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredFood.map((f) => (
              <tr key={f.fid}>
                <td>{f.fid}</td>
                <td>{f.fname}</td>
                <td>{f.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SearchFood