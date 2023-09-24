
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import React from 'react';
function SerialCodeTracking({ str }) {

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
    const [values, setvalues] = useState()
    const [status, setStatus] = useState()
    useEffect(() => {
        // getData()
        setvalues(null)
    }, [str])

    const [vals, setVals] = useState('')
    const SendValue = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/serviceProductStock/serialNo/${vals}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setvalues(res.data)
        setStatus(res.data.status)
    };

    return <>
        <ToastContainer />
        <div className="container">
            <div className="row ml-3">
                <h5>Serial Code Tracking</h5>
            </div>
            <div className={`card`}>
                <div className="card-body">
                    <div className="row" style={{ margin: "40px 0" }}>

                        <div className="col-6">
                            <lable>Serial Code</lable>
                            <input placeholder="Input Serial Code" value={vals} className="form-control" type="text" onChange={(e) => { setVals(e.target.value) }} />
                        </div>
                        <div className="col-2" style={{ display: "grid" }}>
                            <lable style={{ color: "transparent", margin: "-2px" }}>lables</lable>
                            <button onClick={SendValue} type="button" className="btn btn-success">Display</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <table classNeme="table" width={'100%'} border={'1px solid black'}>
                                <thead>
                                    <tr className="simples">
                                        <th scope="col">Date</th>
                                        <th scope="col">Serial No </th>
                                        <th scope="col">Product </th>
                                        <th scope="col">SKU</th>
                                        <th scope="col">variantId </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {values && <tr className="changeRoutss changeRouts">
                                        <td>{values?.stock?.createdAt}</td>
                                        <td>{values?.stock?.serialNo}</td>
                                        <td>{values?.name}</td>
                                        <td>{values?.stock?.sku}</td>
                                        <td>{values?.variant?.weight}</td>
                                    </tr>}

                                </tbody>
                            </table>
                        </div>

                    </div>



                    <div className="row" style={{margin:"20px 0"}}>
                        <h5>Status</h5>
                        <div className="col-10">
                            <table classNeme="table" width={'100%'} border={'1px solid black'}>
                                <thead>
                                    <tr className="simples">
                                        <th scope="col">Date</th>
                                        <th scope="col">To</th>
                                        <th scope="col">Billing </th>
                                        <th scope="col">Shipping </th>
                                        <th scope="col">PickupPoint </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {status && status?.map((item) => {
                                        return <tr className="changeRoutss changeRouts">
                                            <td>{item?.updatedAt}</td>
                                            <td>{item?.to}</td>
                                            <td>{item?.billingAddress?.addressLine1 && item?.billingAddress?.addressLine1 + ',' + item?.billingAddress?.addressLine2 + ' ,' + item?.billingAddress?.landmark + ' ,' + item?.billingAddress?.zip + ', ' + item?.billingAddress?.city + ' ,' + item?.billingAddress?.state + ' ,' + item?.billingAddress?.country}</td>
                                            <td>{item?.shippingAddress?.addressLine1 && item?.shippingAddress?.addressLine1 + ',' + item?.shippingAddress?.addressLine2 + ' ,' + item?.shippingAddress?.landmark + ' ,' + item?.shippingAddress?.zip + ', ' + item?.shippingAddress?.city + ' ,' + item?.shippingAddress?.state + ' ,' + item?.shippingAddress?.country}</td>
                                            <td>{item?.pickupPoint?.pickupPoint_name}</td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        </div>

                    </div>


                    {/* <div className="row">
                        <div className="col-12">
                            {values?.totalling && <div style={{ margin: "20px 0", textAlign: "center", display: "flex", justifyContent: "center" }}>
                                <h6>Total  Credit : {values?.totalling[0]?.totalCredit}</h6>
                                <h6 style={{ margin: "0 20px" }}>Total Debit : {values?.totalling[0]?.totalDebit}</h6>
                            </div>}

                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
}
export default SerialCodeTracking