

import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { FcApproval, FcDisapprove } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { DatePicker } from 'antd';

import React from 'react';
import { Form } from "react-bootstrap";
function ReportsGroup() {

    const token = window.localStorage.getItem('adminToken')
    const [underSelect, SetUnder] = useState(null)
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

    const [dateTo, setDateTo] = useState()
    const [dateFrom, setDateFrom] = useState()
    const [values, setvalues] = useState()

    const [valState, setValState] = useState(null)
    const SendValue = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountVoucher/reportByLedgerGroup/${valState + '&' + dateFrom + '&' + dateTo}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setvalues(res.data)
    };
    return <>
        <ToastContainer />
        <div className="container">
            <div className="row ml-3">
                <h5>Reports Groups</h5>
            </div>


            <div className="card">
                <div className="card-body">
                    <div className="row" style={{ margin: "40px 0" }}>
                        <div className="col-4">
                            <lable>Groups</lable>
                            <Form.Select aria-label="Default select example" value={valState} onChange={(e) => { setValState(e.target.value) }}>
                                <option>Open this select menu</option>
                                {underSelect && underSelect.map((item) => {
                                    return <option value={item._id}>{item?.name}</option>
                                })}
                            </Form.Select>
                        </div>
                        <div className="col-3">
                            <lable>From Date</lable>
                            <input className="form-control" type="date" onChange={(e) => { setDateTo(e.target.value) }} />
                        </div>
                        <div className="col-3">
                            <lable>To Date</lable>
                            <input className="form-control" type="date" onChange={(e) => { setDateFrom(e.target.value) }} />
                        </div>
                        <div className="col-2" style={{ display: "grid" }}>
                            <lable style={{ color: "white", margin: "-2px" }}>lables</lable>
                            <button onClick={SendValue} type="button" className="btn btn-success">Search</button>
                        </div>
                    </div>
                    <div className="row">
                     <div className="col-8">
                     <table classNeme="table" width={'100%'}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Acc Group  Name</th>
                                    <th scope="col">Credit Amount</th>
                                    <th scope="col">Debit Amount</th>
                                    <th scope="col">Narration </th>
                                    
                                    {/* <th scope="col">AC No</th> */}
                                    {/* <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th> */}
                                    {/* <th scope="col">Bank Detail</th> */}
                                    {/* <th scope="col">Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {values && values?.getVoucher?.map((item, i) => {
                                    return <tr key={item._id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item?.name}</td>
                                        <td>{item?.totalCredit}</td>
                                        <td>{item?.totalDebit}</td>
                                        <td>---</td>
                                        {/* <td>{item?.AC_no}</td>
                                        <td>{item?.mobile}</td>
                                        <td>{item?.Email}</td> */}
                                        {/* <td>
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
                                        </td> */}
                                    </tr>
                                })}


                            </tbody>
                        </table>
                     </div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            {values?.totalling &&  <div  style={{margin:"20px 0" ,textAlign:"center" , display:"flex" ,justifyContent:"center"}}>
                                <h6>Total  Credit : {values?.totalling[0]?.totalCredit}</h6>
                                <h6 style={{margin:"0 20px"}}>Total Debit : {values?.totalling[0]?.totalDebit}</h6>
                                {/* <h5>Total  : {values?.totalling[0]?.total} </h5> */}
                            </div>}
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default ReportsGroup