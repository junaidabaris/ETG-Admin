

import axios from "axios"
import { useEffect, useState } from "react"
import { FcApproval, FcDisapprove } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function ListCompany() {
    const token = window.localStorage.getItem('adminToken')
    const [underSelect, SetUnder] = useState(null)
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountCompany`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        SetUnder(res.data)
    }
    useEffect(() => {
        getData()
    }, [])


    const toastSuccessMessage1 = () => {
        toast.success("Company Delete Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage1 = () => {
        toast.error("Company Not Delete ", {
            position: "top-center"
        })
    };
    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/accountCompany/delete_company/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            toastSuccessMessage1()
            getData()

        } catch (error) {
            toastErrorMessage1()
        }
    }
    return <>
        <ToastContainer />
        <div className="container">
            <div className="row ml-3">
                <h5>List Group</h5>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Directory</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Financial Year</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {underSelect && underSelect.map((item, i) => {
                                    return <tr key={item._id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item?.name}</td>
                                        <td>{item?.directory}</td>
                                        <td>{item?.staff?.mobile}</td>
                                        <td>{item?.staff.email}</td>
                                        <td>
                                            <div>{item?.addressLine1} {item?.addressLine2}</div>
                                            <div>{item?.city} {item?.country}</div>

                                        </td>
                                        <td>{typeof item?.website === "object" ? item.website?.map((item) => {
                                            return <div>
                                                {item}
                                            </div>
                                        }) : <>{item.website}</>}</td>
                                        <td>{item?.financialYear}</td>
                                        <td>
                                            <Link
                                                className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                                title="Edit"
                                                to={`/admin/company_edit/${item?._id}`}
                                            >
                                                <i className="las la-edit" />
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                                                onClick={() => { deleteData(item._id) }}
                                            >
                                                <i className="las la-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    </>
}
export default ListCompany