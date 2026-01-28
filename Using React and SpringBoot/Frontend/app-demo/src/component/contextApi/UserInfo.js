import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserInfo = () => {

    let [user, setUser] = useState([]);
    let [loading, setLoading] = useState(true);
    const getData = () => {
        axios.get("https://randomuser.me/api/?results=20")
            .then((res) => {
                setUser(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                alert("something went wrong in fetching data")
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <h1 style={{ marginBottom: "12px" }}>User Information</h1>
            {loading ? <h2>Loading....</h2> :
                user.length > 0 ? (
                    <>
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

                                    {user.map((ele, index) => {
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
                ) : (<h2>No Data</h2>)
            }

        </div>
    )
}

export default UserInfo