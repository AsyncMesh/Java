import React, { useState } from 'react'
import axios from "axios"

const User = () => {

    let [user, setUser] = useState([]);
    let [data, setData] = useState([]);//using 2 states copying userdata in data
    let [gender, setGender] = useState("all")
    const getData = () => {
        axios.get("https://randomuser.me/api/?results=20")
            .then((res) => {
                setUser(res.data.results);
                setData(res.data.results);
            })
            .catch((err) => {
                console.log(err);
                alert("something went wrong in fetching data")
            })
    }
    return (
        <div>
            <h2>User Info</h2>
            <button className='btn btn-outline-success' onClick={getData}>Get Data</button>

            {user.length > 0 ? (
                <>
                    <div>
                        <input name='Gender' type='radio' value={"All"} defaultChecked onClick={() => setGender("all")} />
                        <label htmlFor='Gender'>All</label>
                        <input name='Gender' type='radio' value={"Male"} onClick={() => setGender("male")} />
                        <label htmlFor='Gender'>Male</label>
                        <input type='radio' name='Gender' value={"Female"} onClick={() => setGender("female")} />
                        <label htmlFor='Gender'>Female</label>
                    </div>
                    <div>
                        <table className='table table-hover'>
                            <thead className='table table-dark'>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Image</th>
                                    <th>Email</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>

                                {user.filter(user => gender === "all" ? user : user.gender === gender).map((ele, index) => {
                                    return (

                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{ele.name.first}</td>
                                            <td>{ele.gender}</td>
                                            <td>
                                                <img src={ele.picture.medium}
                                                    height={80} width={80} />
                                            </td>
                                            <td>{ele.email}</td>
                                            <td>{ele.location.city}</td>
                                        </tr>

                                    )
                                })}
                            </tbody>

                        </table>
                    </div>
                </>
            ) : <h2 style={{ color: "red" }}>No user Info</h2>
            }


        </div>
    )
}

export default User