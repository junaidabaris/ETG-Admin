

import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { FcApproval, FcDisapprove } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { DatePicker } from 'antd';

import React from 'react';
import { Form } from "react-bootstrap";
function DayBooks({ str }) {

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
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0, 10);
    const [dateTo, setDateTo] = useState()
    const [dateFrom, setDateFrom] = useState()
    const [values, setvalues] = useState()
    const setData = ()=>{
        setDateTo(date)
        setDateFrom(date)
        console.log(date);
    }
    useEffect(() => {
        // getData()
        setvalues(null)
        setData()
    }, [str])

    const SendValue = async () => {
       if (str == 'Day') {
        const res = await axios.get(`https://onlineparttimejobs.in/api/voucherReport/dayCash/${dateFrom + '&' + dateTo}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setvalues(res.data)
       }
       if (str == 'Bank') {
        const res = await axios.get(`https://onlineparttimejobs.in/api/voucherReport/bankbook/${dateFrom + '&' + dateTo}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setvalues(res.data?.getLedger)
       }
       if (str == 'Cash') {
        const res = await axios.get(`https://onlineparttimejobs.in/api/voucherReport/cashbook/${dateFrom + '&' + dateTo}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setvalues(res.data?.getLedger)
       }
    };
   
    return <>
        <ToastContainer />
        <div className="container">
            <div className="row ml-3">
                <h5>{str} Book</h5>
            </div>


            {/* <input id="dateRequired" type="date" name="dateRequired" defaultValue={date} /> */}
            <div className={`card ${str == 'Day' ? 'dayColor' : str == 'Bank' ? 'BankColor' : 'CashColor'}`}>
                <div className="card-body">
                    <div className="row" style={{ margin: "40px 0" }}>
                        {/* <div className="col-4">
                            <lable>Groups</lable>
                            <Form.Select aria-label="Default select example" value={valState} onChange={(e) => { setValState(e.target.value) }}>
                                <option>Open this select menu</option>
                                {underSelect && underSelect.map((item) => {
                                    return <option value={item._id}>{item?.name}</option>
                                })}
                            </Form.Select>
                        </div> */}
                        <div className="col-3">
                            <lable>From Date</lable>
                            <input className="form-control" type="date" value={dateFrom} onChange={(e) => { setDateFrom(e.target.value) }} />
                        </div>
                        <div className="col-3">
                            <lable>To Date</lable>
                            <input className="form-control" type="date" value={dateTo} onChange={(e) => { setDateTo(e.target.value) }} />
                        </div>
                        <div className="col-2" style={{ display: "grid" }}>
                            <lable style={{ color: "transparent", margin: "-2px" }}>lables</lable>
                            <button onClick={SendValue} type="button" className="btn btn-success">Display</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <table classNeme="table table-striped" width={'100%'}>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Vch Date</th>
                                        <th scope="col">Particulars </th>
                                        <th scope="col"> Vch Type</th>
                                        <th scope="col">Vch No </th>
                                        <th scope="col">Debit Amount </th>
                                        <th scope="col">Credit  Amount </th>
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
                                    {values && values?.map((item, i) => {
                                        return <tr key={item._id} className="changeRouts">
                                            <th scope="row">{i + 1}</th>
                                            <td>{item?._id?.date}</td>
                                            <td>{item?.totalCredit}</td>
                                            <td>{item?.totalDebit}</td>
                                            <td>{item?.totalDebit}</td>
                                            <td>{item?.drAmt}</td>
                                            <td>{item?.crAmt}</td>
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
                            {values?.totalling && <div style={{ margin: "20px 0", textAlign: "center", display: "flex", justifyContent: "center" }}>
                                <h6>Total  Credit : {values?.totalling[0]?.totalCredit}</h6>
                                <h6 style={{ margin: "0 20px" }}>Total Debit : {values?.totalling[0]?.totalDebit}</h6>
                                {/* <h5>Total  : {values?.totalling[0]?.total} </h5> */}
                            </div>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default DayBooks