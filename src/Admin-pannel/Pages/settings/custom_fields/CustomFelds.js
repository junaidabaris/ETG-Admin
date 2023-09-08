
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { ToastContainer, toast } from "react-toastify";

import React from 'react';
import { Link } from "react-router-dom";
function CustomFelds() {

    const token = window.localStorage.getItem('adminToken')
    const [underSelect, SetUnder] = useState(null)
    const [values, setvalues] = useState()
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountGroup`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        SetUnder(res.data)
    }
    useEffect(() => {
        // getData()
    }, [])

    return <>
        <ToastContainer />
        <div className="container">
            <div className="row ml-3">
                <h5>Custom Feld List</h5>
            </div>
            <div className='card'>
                <Link to="custom_fields_add" style={{margin:"20px" ,width:"180px"}} className="btn btn-info">New Custom Field</Link>
                <div className="card-body">

                    <div className="row">
                        <div className="col-10">
                            <table classNeme="table table-striped" width={'100%'}>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Belongs To </th>
                                        <th scope="col"> Type</th>
                                        <th scope="col">Slug</th>
                                        <th scope="col">Active</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {values && values?.map((item, i) => {
                                        return <tr key={item._id} className="changeRouts">
                                            <th scope="row">{i + 1}</th>
                                            <td>{item?._id?.date}</td>
                                            <td>{item?.totalCredit}</td>
                                            <td>{item?.totalDebit}</td>
                                            <td>{item?.totalDebit}</td>
                                            <td>{item?.drAmt}</td>
                                        </tr>
                                    })}


                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>
}
export default CustomFelds