

import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function ListVochers() {
    const token = window.localStorage.getItem('adminToken')
    const [underSelect, SetUnder] = useState(null)
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountVoucher`, {
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
        toast.success("Vochers Delete Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage1 = () => {
        toast.error("Vochers Not Delete ", {
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
                <h5>List Vochers</h5>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Ledger Name</th>
                                    <th scope="col">Voucher No</th>
                                    <th scope="col">Credit Amount</th>
                                    <th scope="col">Debit Amount</th>
                                    <th scope="col">Narration</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {underSelect && underSelect.map((item, i) => {
                                    return <tr key={item._id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item?.ledgerName}</td>
                                        <td>{item?.voucherNo}</td>
                                        <td>{item?.crAmt}</td>
                                        <td>{item?.drAmt}</td>
                                        <td>--NA--</td>
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
export default ListVochers