import axios from "axios"
import { useEffect, useState } from "react"
import { FcApproval, FcDisapprove } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function ListsLegers() {
    const token = window.localStorage.getItem('adminToken')
    const [underSelect, SetUnder] = useState(null)
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountLedger`, {
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
        toast.success("Ledgers Delete Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage1 = () => {
        toast.error("Ledgers Not Delete ", {
            position: "top-center"
        })
    };
    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/accountLedger/delete_Ledger//${id}`, {
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
                <h5>List Ledgers</h5>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Acc Ledger Name</th>
                                    <th scope="col">Acc Ledgre Alias</th>
                                    <th scope="col">AC Name</th>
                                    <th scope="col">AC No</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Bank Detail</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {underSelect && underSelect.map((item, i) => {
                                    return <tr key={item._id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item?.AccLedgerName}</td>
                                        <td>{item?.AccLedgreAliasName}</td>
                                        <td>{item?.AC_name}</td>
                                        <td>{item?.AC_no}</td>
                                        <td>{item?.mobile}</td>
                                        <td>{item?.Email}</td>
                                        <td>
                                            <div>
                                                {item?.AccAddLine1 + " " + item?.AccAddLine2}
                                            </div>
                                            <div>
                                                {item?.city + " " + item?.state}
                                            </div>
                                            <div>
                                                {item?.country}
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                branch Name : {item?.branch_name}
                                            </div>
                                            <div>
                                                IFSC_code: {item?.branch_name}
                                            </div>
                                           
                                        </td>
                                        <td>
                                            <Link
                                                className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                                title="Edit"
                                                to={`/admin/ledgers-edit/${item?._id}`}
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
        </div>
    </>
}
export default ListsLegers